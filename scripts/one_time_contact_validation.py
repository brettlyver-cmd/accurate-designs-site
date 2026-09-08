from pathlib import Path

path = Path("src/App.jsx")
text = path.read_text(encoding="utf-8")


def replace_once(old: str, new: str, label: str) -> None:
    global text
    if old in text:
        text = text.replace(old, new, 1)
    elif new not in text:
        raise SystemExit(f"Missing expected text for {label}")


inp_old = '''function Inp({ label, type = "text", textarea }) {
  const fieldName = label.replace(" *", "");

  const b = {'''
inp_new = '''function Inp({ label, type = "text", textarea }) {
  const fieldName = label.replace(" *", "");
  const required = label.endsWith(" *");
  const fieldId = `field-${fieldName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const autoComplete = {
    "First Name": "given-name",
    "Last Name": "family-name",
    Email: "email",
    Phone: "tel",
  }[fieldName];

  const b = {'''
replace_once(inp_old, inp_new, "input field metadata")

label_old = '''      <label
        style={{'''
label_new = '''      <label
        htmlFor={fieldId}
        style={{'''
replace_once(label_old, label_new, "input label association")

textarea_old = '''        <textarea
          name={fieldName}
          rows={3}'''
textarea_new = '''        <textarea
          id={fieldId}
          name={fieldName}
          required={required}
          rows={3}'''
replace_once(textarea_old, textarea_new, "textarea validation")

input_old = '''        <input
          name={fieldName}
          type={type}
          style={b}'''
input_new = '''        <input
          id={fieldId}
          name={fieldName}
          type={type}
          required={required}
          autoComplete={autoComplete}
          style={b}'''
replace_once(input_old, input_new, "input validation")

sel_old = '''function Sel({ label, options }) {
  const fieldName = label.replace(" *", "");

  return ('''
sel_new = '''function Sel({ label, options }) {
  const fieldName = label.replace(" *", "");
  const required = label.endsWith(" *");
  const fieldId = `field-${fieldName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return ('''
replace_once(sel_old, sel_new, "select field metadata")

# Replace the second matching label (the first is already updated in Inp).
sel_label_old = '''      <label
        style={{'''
sel_label_new = '''      <label
        htmlFor={fieldId}
        style={{'''
replace_once(sel_label_old, sel_label_new, "select label association")

select_old = '''      <select
        name={fieldName}
        style={{'''
select_new = '''      <select
        id={fieldId}
        name={fieldName}
        required={required}
        defaultValue=""
        style={{'''
replace_once(select_old, select_new, "select validation")

options_old = '''        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}'''
options_new = '''        {options.map((o, i) => {
          const placeholder = i === 0 && o === "Select...";
          return (
            <option key={o} value={placeholder ? "" : o} disabled={placeholder}>
              {o}
            </option>
          );
        })}'''
replace_once(options_old, options_new, "select placeholder values")

submit_old = '''  onClick={async () => {
    const formData = new FormData();

    document.querySelectorAll("input, textarea, select").forEach((field) => {'''
submit_new = '''  onClick={async () => {
    const requiredFields = Array.from(
      document.querySelectorAll("input[required], textarea[required], select[required]")
    );
    const invalidField = requiredFields.find((field) => !field.checkValidity());

    if (invalidField) {
      invalidField.reportValidity();
      invalidField.focus();
      return;
    }

    const formData = new FormData();

    document.querySelectorAll("input, textarea, select").forEach((field) => {'''
replace_once(submit_old, submit_new, "submit validation")

path.write_text(text, encoding="utf-8")
