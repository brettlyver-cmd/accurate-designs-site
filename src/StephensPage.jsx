import React from 'react';
import content from './stephens-content.json';
import './StephensPage.css';
import details from './stephens-details.json';
const detailByName = Object.fromEntries(details.map(item => [item.name,item]));

const imageDimensions = {"exterior-hero": [3194, 1797], "stone-and-entrance-detail": [6742, 3792], "foyer-and-dining-connection": [6068, 3413], "dining-room": [6068, 3413], "rear-family-spaces": [6068, 3413], "great-room-and-staircase": [6068, 3413], "kitchen": [6068, 3413], "servery": [6068, 3413], "office": [6068, 3413], "flush-shower": [6068, 3413], "morning-reflections-landscape": [1616, 956], "morning-reflections-portrait": [756, 1008], "exterior-material-board": [1448, 1086], "interior-material-board": [1122, 1402]};

function ProjectImage({ name, alt, eager = false }) {
  const [width, height] = detailByName[name] ? [detailByName[name].width,detailByName[name].height] : name.includes('material-board') ? [1836,2376] : imageDimensions[name];
  return <img src={`/stephens/${name}-1200.webp`} srcSet={`/stephens/${name}-600.webp 600w, /stephens/${name}-1200.webp 1200w, /stephens/${name}-1800.webp 1800w`} sizes="(max-width: 808px) calc(100vw - 48px), 760px" alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" width={width} height={height} />;
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
        <p className="stephens-eyebrow">Case Studies / Custom Homes / Oakville, Ontario</p>
        <h1>Case Study: {content.subtitle} by Accurate Designs</h1>
        <p className="stephens-subtitle">{content.title}</p>
        <p className="stephens-byline">By Brett Lyver, Accurate Designs</p>
      </div>
      <figure className="stephens-cover"><ProjectImage name="great-room-and-staircase" alt="Double-height family room with glass staircase at 587 Stephens Crescent" eager /></figure>
    </header>
    <div className="stephens-reading stephens-wrap">
      <div className="stephens-story">
        <div className="stephens-intro">{content.intro.map((p,i)=><p key={i}>{p}</p>)}</div>
        {content.sections.map((section,index)=><section className="stephens-section" id={section.id} key={section.id}>
          <h2>{section.heading}</h2>
          {index===0 && <EditorialPhoto name="foyer-and-dining-connection" alt="View from the foyer showing the dining room to the left and office to the right" caption={detailByName['foyer-and-dining-connection'].caption} />}
          {index===1 && <EditorialPhoto name="servery" alt="Servery connecting the dining and breakfast spaces" caption={detailByName.servery.caption} />}
          {index===2 && <EditorialPhoto name="rear-family-spaces" alt="Separated family room windows and the view at Stephens" caption="The windows respond to the view and to privacy from four neighbouring homes." />}
          {index===3 && <EditorialPhoto name="exterior-hero" alt="Stone and stucco exterior at 587 Stephens Crescent" caption="Stone and stucco were chosen with the neighbourhood and a planned ten-year stay in mind." />}
          {index===4 && <EditorialPhoto name="stone-and-entrance-detail" alt="Full-bed stone and front entrance" caption="Stone that did not need dressing saved installation and cleanup labour." />}
          {index===5 && <EditorialPhoto name="ensuite" alt="Ensuite showing the freestanding bath, vanity and glass shower" caption={detailByName.ensuite.caption} />}
          {index===7 && <><EditorialPhoto name="kitchen-detail" alt="Kitchen hood, cabinetry, backsplash and crystal chandelier" caption={detailByName['kitchen-detail'].caption} /></>}
          {section.paragraphs.map((p,i)=><React.Fragment key={i}><StoryParagraph text={p} />{index===2 && i===2 && <EditorialPhoto name="morning-reflections-landscape" alt="Actual morning sunlight and chandelier reflections on the family room walls" caption="Morning light catches the chandelier and brings the walls to life." />}</React.Fragment>)}
        </section>)}
        <div className="stephens-detail-gallery"><h2>Attention to the everyday details</h2><EditorialPhoto name="dining-room" alt="Stephens dining room" caption="The kitchen stays hidden from the dining room." /><div className="stephens-pair">{['powder-room','laundry-room','rear-elevation','door-hardware'].map(name=><EditorialPhoto key={name} name={name} alt={detailByName[name].role} caption={detailByName[name].caption} />)}</div></div>
        <section className="stephens-section stephens-materials" id="material-palettes"><p className="stephens-eyebrow">The material studies</p><h2>Texture, tone and the finished home</h2><p>Created from the project photographs, these retrospective boards bring the confirmed exterior and interior selections together.</p>{[['exterior','Stone and stucco in a classic composition'],['interior','White cabinetry, oak, dark wood and blue accents']].map(([type,caption])=><figure className="stephens-figure stephens-board" key={type}><ProjectImage name={`${type}-material-board`} alt={`Stephens ${type} material board with confirmed project materials`} /><figcaption>{caption}. <a href={`/stephens/${type}-material-board-1800.webp`} target="_blank" rel="noreferrer">View the {type} material board in full</a></figcaption></figure>)}</section>
        <section className="stephens-project-details"><p className="stephens-eyebrow">Project details</p><h2>587 Stephens Crescent</h2><dl><div><dt>Location</dt><dd>Oakville, Ontario</dd></div><div><dt>Design and construction</dt><dd>Brett Lyver, Accurate Designs</dd></div><div><dt>Living space</dt><dd>4,200+ sq ft of living space, including the finished basement</dd></div><div><dt>Timeline</dt><dd>Lot purchased April 3, 2019. Permit issued September 13, 2019. Ready for final occupancy March 30, 2020. Final occupancy granted May 2020.</dd></div></dl><h2>Key products and materials</h2><dl><div><dt>Refrigerator</dt><dd>Sub-Zero</dd></div><div><dt>Cooktop</dt><dd>Wolf</dd></div><div><dt>Additional appliances</dt><dd>Double wall ovens and dishwasher</dd></div><div><dt>Exterior</dt><dd>Full-bed natural stone veneer and smooth stucco</dd></div><div><dt>Cabinetry</dt><dd>White shaker cabinets and dark wood island</dd></div><div><dt>Countertops</dt><dd>Quartz with subtle veining</dd></div><div><dt>Flooring</dt><dd>Wide-plank oak</dd></div><div><dt>Lighting</dt><dd>Crystal linear chandelier</dd></div><div><dt>Stair railing</dt><dd>Glass with metal hardware</dd></div></dl><a className="stephens-download" href="/stephens/Stephens-case-study.pdf" download>Download the illustrated case study</a></section>
        <footer className="stephens-next"><p className="stephens-eyebrow">Your next step</p><h2>Planning your own custom home?</h2><p>Let's start with how you want to live.</p><a className="stephens-button" href="/contact">Book a Project Consultation</a><a className="stephens-related" href="/custom-home-design-build">Explore custom home design and build</a></footer>
      </div>
    </div>
  </article>;
}
