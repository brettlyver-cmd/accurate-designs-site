import React from 'react';
import content from './stephens-content.json';
import './StephensPage.css';

const imageDimensions = {"exterior-hero": [3194, 1797], "stone-and-entrance-detail": [6742, 3792], "foyer-and-dining-connection": [6068, 3413], "dining-room": [6068, 3413], "rear-family-spaces": [6068, 3413], "great-room-and-staircase": [6068, 3413], "kitchen": [6068, 3413], "servery": [6068, 3413], "office": [6068, 3413], "flush-shower": [6068, 3413], "morning-reflections-landscape": [1616, 956], "morning-reflections-portrait": [756, 1008], "exterior-material-board": [1448, 1086], "interior-material-board": [1122, 1402]};

function ProjectImage({ name, alt, eager = false }) {
  const [width, height] = imageDimensions[name];
  return <img src={`/stephens/${name}-1200.webp`} srcSet={`/stephens/${name}-600.webp 600w, /stephens/${name}-1200.webp 1200w, /stephens/${name}-1800.webp 1800w`} sizes="(max-width: 760px) 100vw, 1100px" alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" width={width} height={height} />;
}

function EditorialPhoto({ name, alt, caption }) {
  return <figure className="stephens-figure"><ProjectImage name={name} alt={alt} /><figcaption>{caption}</figcaption></figure>;
}

function StoryParagraph({ text }) {
  const quote = text === "'What sucks about my drawings?'" || text.startsWith("Communication isn't") || text === 'A little magic, every morning.';
  return quote ? <blockquote>{text}</blockquote> : <p>{text}</p>;
}

export default function StephensPage() {
  return <article className="stephens-case">
    <header className="stephens-hero">
      <div className="stephens-wrap">
        <a className="stephens-back" href="/portfolio">Back to portfolio</a>
        <p className="stephens-eyebrow">Behind the Design / Oakville, Ontario</p>
        <h1>{content.subtitle}</h1>
        <p className="stephens-subtitle">{content.title}</p>
        <p className="stephens-byline">By Brett Lyver, Accurate Designs</p>
      </div>
      <figure className="stephens-cover"><ProjectImage name="great-room-and-staircase" alt="Double-height family room with glass staircase at 587 Stephens Crescent" eager /></figure>
    </header>
    <div className="stephens-reading stephens-wrap">
      <details className="stephens-contents"><summary>In this story</summary><nav aria-label="Case study contents">{content.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}</nav></details>
      <div className="stephens-story">
        <div className="stephens-intro">{content.intro.map((p,i)=><p key={i}>{p}</p>)}</div>
        {content.sections.map((section,index)=><section className="stephens-section" id={section.id} key={section.id}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p,i)=><React.Fragment key={i}><StoryParagraph text={p} />{index===2 && i===2 && <EditorialPhoto name="rear-family-spaces" alt="Separated family room windows and the view at Stephens" caption="The windows respond to the view and to privacy from four neighbouring homes." />}</React.Fragment>)}
          {index===0 && <div className="stephens-pair"><EditorialPhoto name="office" alt="Office beside the foyer" caption="An office at the front keeps client visits separate from family life." /><EditorialPhoto name="foyer-and-dining-connection" alt="Foyer and dining room" caption="The foyer connects the spaces guests need." /></div>}
          {index===1 && <div className="stephens-pair"><EditorialPhoto name="dining-room" alt="Stephens dining room" caption="The kitchen stays hidden from the dining room." /><EditorialPhoto name="servery" alt="Servery connecting the dining and breakfast spaces" caption="The servery makes entertaining more convenient." /></div>}
          {index===2 && <EditorialPhoto name="morning-reflections-landscape" alt="Actual morning sunlight and chandelier reflections on the family room walls" caption="Morning light catches the chandelier and brings the walls to life." />}
          {index===3 && <EditorialPhoto name="exterior-hero" alt="Stone and stucco exterior at 587 Stephens Crescent" caption="Stone and stucco were chosen with the neighbourhood and a planned ten-year stay in mind." />}
          {index===4 && <EditorialPhoto name="stone-and-entrance-detail" alt="Full-bed stone and front entrance" caption="Stone that did not need dressing saved installation and cleanup labour." />}
          {index===5 && <EditorialPhoto name="flush-shower" alt="Flush shower entry in the completed ensuite" caption="The flush entry and the space for drainage were considered together during design." />}
          {index===7 && <EditorialPhoto name="kitchen" alt="White cabinetry and dark wood island in the Stephens kitchen" caption="Financial judgment and the pleasure of living in a home both belong in the design conversation." />}
        </section>)}
        <section className="stephens-section stephens-materials" id="material-palettes"><p className="stephens-eyebrow">The material studies</p><h2>Texture, tone and the finished home</h2><p>Created from the project photographs, these retrospective boards bring the confirmed exterior and interior selections together.</p>{[['exterior','Stone and stucco in a classic composition'],['interior','White cabinetry, oak, dark wood and blue accents']].map(([type,caption])=><figure className="stephens-figure stephens-board" key={type}><ProjectImage name={`${type}-material-board`} alt={`Stephens ${type} material board with confirmed project materials`} /><figcaption>{caption}. <a href={`/stephens/${type}-material-board-1800.webp`} target="_blank" rel="noreferrer">View the {type} material board in full</a></figcaption></figure>)}</section>
        <section className="stephens-project-details"><p className="stephens-eyebrow">Project details</p><h2>587 Stephens Crescent</h2><dl><div><dt>Location</dt><dd>Oakville, Ontario</dd></div><div><dt>Design and construction</dt><dd>Brett Lyver, Accurate Designs</dd></div><div><dt>Living space</dt><dd>4,200+ sq ft of living space, including the finished basement</dd></div><div><dt>Timeline</dt><dd>Lot purchased April 3, 2019. Permit issued September 13, 2019. Ready for final occupancy March 30, 2020. Final occupancy granted May 2020.</dd></div><div><dt>Selected appliances</dt><dd>Sub-Zero refrigerator, Wolf cooktop, double wall ovens and dishwasher</dd></div></dl><a className="stephens-download" href="/stephens/Stephens-case-study.pdf" download>Download the illustrated case study</a></section>
        <footer className="stephens-next"><p className="stephens-eyebrow">Your next step</p><h2>Planning your own custom home?</h2><p>Let's start with how you want to live.</p><a className="stephens-button" href="/contact">Book a Project Consultation</a><a className="stephens-related" href="/custom-home-design-build">Explore custom home design and build</a></footer>
      </div>
    </div>
  </article>;
}
