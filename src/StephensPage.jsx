import React from 'react';
import content from './stephens-content.json';
import './StephensPage.css';

const imageDimensions = {"exterior-hero": [3194, 1797], "stone-and-entrance-detail": [6742, 3792], "foyer-and-dining-connection": [6068, 3413], "dining-room": [6068, 3413], "rear-family-spaces": [6068, 3413], "great-room-and-staircase": [6068, 3413], "kitchen": [6068, 3413], "servery": [6068, 3413], "office": [6068, 3413], "flush-shower": [6068, 3413], "morning-reflections-landscape": [1616, 956], "morning-reflections-portrait": [756, 1008], "exterior-material-board": [1448, 1086], "interior-material-board": [1122, 1402]};

function ProjectImage({ name, alt, eager = false }) {
  const [width, height] = imageDimensions[name];
  return <img src={`/stephens/${name}-1200.webp`} srcSet={`/stephens/${name}-600.webp 600w, /stephens/${name}-1200.webp 1200w, /stephens/${name}-1800.webp 1800w`} sizes="(max-width: 760px) 100vw, 1100px" alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" width={width} height={height} />;
}

export default function StephensPage() {
  return <article className="stephens-case">
    <header className="stephens-hero">
      <div className="stephens-wrap">
        <a className="stephens-back" href="/portfolio">Back to portfolio</a>
        <p className="stephens-eyebrow">Behind the Design / Oakville, Ontario</p>
        <h1>{content.title}</h1>
        <p className="stephens-subtitle">{content.subtitle}</p>
        <p className="stephens-byline">By Brett Lyver, Accurate Designs</p>
      </div>
      <figure className="stephens-cover"><ProjectImage name="great-room-and-staircase" alt="Double-height family room with glass staircase at 587 Stephens Crescent" eager /></figure>
    </header>
    <div className="stephens-facts stephens-wrap">
      <p><strong>4,200+ sq ft of living space</strong><span>Including the finished basement</span></p>
      <p><strong>2019 to 2020</strong><span>Personally funded design and build</span></p>
      <a className="stephens-download" href="/stephens/Stephens-case-study.pdf" download>Download the illustrated case study</a>
    </div>
    <div className="stephens-reading stephens-wrap">
      <aside className="stephens-contents" aria-label="Case study contents"><p>In this story</p><nav>{content.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}</nav></aside>
      <div className="stephens-story">
        <div className="stephens-intro">{content.intro.map((p,i)=><p key={i}>{p}</p>)}</div>
        {content.sections.map(section=><section className="stephens-section" id={section.id} key={section.id}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((p,i)=>p === "'What sucks about my drawings?'" || p.startsWith("Communication isn't") || p === 'A little magic, every morning.' ? <blockquote key={i}>{p}</blockquote> : <p key={i}>{p}</p>)}
          {section.image && <figure className={section.image.includes('material-board') ? 'stephens-figure stephens-board' : 'stephens-figure'}>
            <ProjectImage name={section.image} alt={section.alt} />
            {section.image.includes('material-board') && <figcaption><a href={`/stephens/${section.image}-1800.webp`} target="_blank" rel="noreferrer">View the exterior material board in full</a></figcaption>}
          </figure>}
        </section>)}
        <section className="stephens-section" id="interior-palette"><h2>The interior material palette</h2><figure className="stephens-figure stephens-board"><ProjectImage name="interior-material-board" alt="Stephens interior material board with white cabinetry, quartz, oak, dark wood and blue decor accents" /><figcaption><a href="/stephens/interior-material-board-1800.webp" target="_blank" rel="noreferrer">View the interior material board in full</a></figcaption></figure></section>
        <footer className="stephens-next"><p className="stephens-eyebrow">Your next step</p><h2>Planning your own custom home?</h2><p>Let's start with how you want to live.</p><a className="stephens-button" href="/contact">Book a Project Consultation</a><a className="stephens-related" href="/custom-home-design-build">Explore custom home design and build</a></footer>
      </div>
    </div>
  </article>;
}
