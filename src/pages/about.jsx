import React from 'react';
import { Card, CardGrid } from '../components';

const capabilities = [
  ['Awareness', 'A proposed way to describe states inferred from model output and surrounding context.'],
  ['Misalignment', 'An experimental topic: how clarity, coherence, safety, and behavioral change might be examined.'],
  ['V12 reasoning', 'A conceptual approach to representing multiple perspectives and questions for review.'],
  ['Doctrine', 'A design goal of expressing governance principles as reviewable rules.'],
  ['Decision support', 'A proposed presentation of evidence for human consideration, not an automated decision.'],
  ['Provenance', 'A design question about retaining the sources and context behind a finding.']
];

const audiences = [
  ['Governance & compliance', 'Potential readers interested in oversight and evidence practices.'],
  ['Engineering & architecture', 'Potential readers exploring observability and system boundaries.'],
  ['Product & operations', 'Potential readers considering how to interpret behavior over time.'],
  ['Research', 'Potential readers studying evidence, evaluation, and uncertainty.']
];

export default function About() {
  return <>
    <header className="page page-header">
      <span className="kicker">About this project</span>
      <h1>Exploring the gap between intent and impact.</h1>
      <p>AI systems can produce outputs that differ from what people expected. The project explores how to describe those differences and what evidence may help people assess them.</p>
      <p>The website is a presentation and local prototype. It does not provide continuous monitoring, validated risk measurement, or an operational governance service.</p>
    </header>
    <section className="section band">
      <div className="section-heading"><div><span className="eyebrow">Concepts under exploration</span><h2>Questions, not available capabilities.</h2></div><p>The descriptions below summarize intended directions; repository examples do not establish end-to-end implementation.</p></div>
      <CardGrid>{capabilities.map(([title, description]) => <Card key={title} title={title}><p>{description}</p></Card>)}</CardGrid>
    </section>
    <section className="section">
      <div className="section-heading"><div><span className="eyebrow">Potential readers</span><h2>One topic, many perspectives.</h2></div></div>
      <CardGrid>{audiences.map(([title, description]) => <Card key={title} title={title}><p>{description}</p></Card>)}</CardGrid>
    </section>
    <section className="section band">
      <div className="split">
        <Card title="Aim"><p>Explore ways to make AI behavior, evidence, and uncertainty easier to discuss without presenting prototypes as guarantees.</p></Card>
        <Card title="Long-term aspiration"><p>Develop and validate methods that help people examine behavior and make accountable decisions. This is an aspiration, not a current platform outcome.</p></Card>
      </div>
    </section>
    <section className="section">
      <div className="split">
        <div><span className="eyebrow">Why examine alignment?</span><h2>Differences need context.</h2></div>
        <div><p>A difference between an expected and observed behavior is a prompt for investigation, not by itself proof of failure or intent.</p><p>Any measurement would require clear definitions, suitable baselines, representative evaluation, and published limitations. The repository evidence reviewed does not establish a canonical scoring method.</p></div>
      </div>
      <div className="notice" style={{marginTop:'2rem'}}><strong>Evidence boundary</strong><p style={{color:'var(--muted)',margin:'.5rem 0 0'}}>Repository code and tests support bounded prototype claims only. They do not establish reliable general measurement, production readiness, or deployment.</p></div>
    </section>
  </>;
}
