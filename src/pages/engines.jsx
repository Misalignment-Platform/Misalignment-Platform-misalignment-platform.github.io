import React from 'react';
import { EngineCard, CardGrid, AnimatedSection } from '../components';

const roles = [
  ['CONSCIO', '01', 'Proposed role: describing intent and conversational context.'],
  ['MISALIGNMENT', '02', 'Proposed role: exploring behavioral differences and open questions.'],
  ['V12', '03', 'Proposed role: representing competing perspectives for review.'],
  ['DOCTRINE', '04', 'Proposed role: expressing governance principles as reviewable rules.'],
  ['ATA-CONT', '05', 'Proposed role: exploring constraints around delegated agency.'],
  ['REPHRASE', '06', 'Proposed role: studying prompt resilience and rephrasing.'],
  ['SENTINEL', '07', 'Proposed role: examining behavioral change over time.'],
  ['OMNITRAX', '08', 'Proposed role: representing trace sources and relationships.'],
  ['CODEX', '09', 'Proposed role: surfacing policy-related code questions.'],
  ['GATEWAY', '10', 'Proposed role: exploring how components might be connected.']
];

export default function Engines({ navigate }) {
  return <>
    <header className="page page-header">
      <span className="kicker">Conceptual roles &amp; local mock data</span>
      <h1>Ideas for examining AI behavior.</h1>
      <p>Some related components have service prototypes and tests in the Platform repository; others remain design roles. These cards present the role map, while detail pages render static sample data stored with this website—not connected engine output.</p>
    </header>
    <AnimatedSection className="section"><CardGrid>{roles.map(([name, code, description]) => <EngineCard key={name} name={name} code={code} description={description} onClick={() => navigate?.(`/engines/${name.toLowerCase()}`)}/>)}</CardGrid></AnimatedSection>
    <section className="section band">
      <div className="split"><div><span className="eyebrow">Conscio · proposed role</span><h2>A concept for interpreting observations.</h2></div><p style={{color:'var(--muted)'}}>The Conscio material describes an intended interpretation role. The repository examples do not establish end-to-end, evidence-grounded interpretation.</p></div>
    </section>
  </>;
}
