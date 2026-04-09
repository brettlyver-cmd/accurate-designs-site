import Foundation

// MARK: - README math only

/// Window: S = reference day start, E = S + 6 days (inclusive). Count assignment iff dueDate ∈ [S, E].
/// adjustedHours = estimatedHours * (1 + B)
/// TRH = sum(adjustedHours) for counted assignments
/// TAH = (5 * WFH) + (2 * WEH)
/// CI = TAH - TRH
public enum WorkloadSeverity: String, Sendable {
    case safe = "SAFE"
    case manageable = "MANAGEABLE"
    case warning = "WARNING"
    case critical = "CRITICAL"
}

public struct WorkloadAssignment: Sendable {
    public var estimatedHours: Double
    public var dueDate: Date

    public init(estimatedHours: Double, dueDate: Date) {
        self.estimatedHours = estimatedHours
        self.dueDate = dueDate
    }
}

public struct WorkloadResult: Equatable, Sendable {
    public var TAH: Double
    public var TRH: Double
    public var CI: Double
    /// `nil` when TRH == 0 (empty message: add an assignment)
    public var severity: WorkloadSeverity?
    public var emptyWorkloadMessage: String?
    /// Fix It: SN = ceil((TRH * 60) / SL)
    public var SN: Int
    /// Fix It: MSD = ceil(SN / 7)
    public var MSD: Int
    /// Fix It: LatestStartDate = S + 1 day
    public var latestStartDate: Date

    public init(
        TAH: Double,
        TRH: Double,
        CI: Double,
        severity: WorkloadSeverity?,
        emptyWorkloadMessage: String?,
        SN: Int,
        MSD: Int,
        latestStartDate: Date
    ) {
        self.TAH = TAH
        self.TRH = TRH
        self.CI = CI
        self.severity = severity
        self.emptyWorkloadMessage = emptyWorkloadMessage
        self.SN = SN
        self.MSD = MSD
        self.latestStartDate = latestStartDate
    }
}

public enum WorkloadCalculator {
    /// S = start of `referenceDate`’s day; E = S + 6 days inclusive.
    public static func windowBounds(referenceDate: Date) -> (S: Date, E: Date) {
        let cal = Calendar.current
        let S = cal.startOfDay(for: referenceDate)
        let E = cal.date(byAdding: .day, value: 6, to: S)!
        return (S, E)
    }

    private static func isDueDateInWindow(dueDate: Date, S: Date, E: Date) -> Bool {
        let d = Calendar.current.startOfDay(for: dueDate)
        return d >= S && d <= E
    }

    /// Severity: TRH == 0 → nil + “Add an assignment”; else CI thresholds per README.
    public static func severity(forCI ci: Double, TRH: Double) -> WorkloadSeverity? {
        guard TRH != 0 else { return nil }
        if ci >= 0 { return .safe }
        if ci >= -2 { return .manageable }
        if ci >= -6 { return .warning }
        return .critical
    }

    public static func compute(
        assignments: [WorkloadAssignment],
        WFH: Double,
        WEH: Double,
        buffer B: Double,
        sessionLengthMinutes SL: Double,
        referenceDate: Date = Date()
    ) -> WorkloadResult {
        let cal = Calendar.current
        let (S, E) = windowBounds(referenceDate: referenceDate)
        let latestStartDate = cal.date(byAdding: .day, value: 1, to: S)!

        let TAH = (5 * WFH) + (2 * WEH)

        var TRH: Double = 0
        for a in assignments where isDueDateInWindow(dueDate: a.dueDate, S: S, E: E) {
            TRH += a.estimatedHours * (1 + B)
        }

        let CI = TAH - TRH

        let emptyMessage = "Add an assignment"
        let sev: WorkloadSeverity?
        let emptyWorkloadMessage: String?
        if TRH == 0 {
            sev = nil
            emptyWorkloadMessage = emptyMessage
        } else {
            sev = severity(forCI: CI, TRH: TRH)
            emptyWorkloadMessage = nil
        }

        let SN = Int(ceil((TRH * 60) / SL))
        let MSD = Int(ceil(Double(SN) / 7.0))

        return WorkloadResult(
            TAH: TAH,
            TRH: TRH,
            CI: CI,
            severity: sev,
            emptyWorkloadMessage: emptyWorkloadMessage,
            SN: SN,
            MSD: MSD,
            latestStartDate: latestStartDate
        )
    }

    /// WFH=2, WEH=3, B=0.20, SL=90; assignments 10h + 20h with due dates in window.
    /// Expected: TAH=16, TRH=36, CI=-20, severity=CRITICAL, SN=24, MSD=4.
    public static func runAcceptanceTest() -> WorkloadResult {
        let cal = Calendar.current
        let S = cal.startOfDay(for: Date(timeIntervalSince1970: 1_700_000_000))
        let midWindow = cal.date(byAdding: .day, value: 3, to: S)!

        let assignments = [
            WorkloadAssignment(estimatedHours: 10, dueDate: midWindow),
            WorkloadAssignment(estimatedHours: 20, dueDate: midWindow),
        ]

        return compute(
            assignments: assignments,
            WFH: 2,
            WEH: 3,
            buffer: 0.20,
            sessionLengthMinutes: 90,
            referenceDate: S
        )
    }
}
