import React from 'react';
import { Card, CardGrid } from '../components';

const capabilities = [
  ['Awareness', 'Extract awareness states from model output and surrounding context.'],
  ['Misalignment', 'Score clarity, coherence, safety, and behavioral drift.'],
  ['V12 reasoning', 'Render multiple perspectives and surface conflicts for review.'],
  ['Doctrine', 'Apply versioned governance rules to operational decisions.'],
  ['Alignment packets', 'Deliver explainable decision-support signals downstream.'],
  ['Provenance', 'Maintain tenant-scoped evidence for audit and replay.']
];

const audiences = [
  ['Governance & Compliance', 'Continuous oversight and audit-ready provenance.'],
  ['Engineering & Architecture', 'A runtime alignment layer for any model.'],
  ['Product & Operations', 'Visibility into behavioral drift over time.'],
  ['Executive Leadership', 'Strategic guardrails for dependable AI.']
];

export default function About() {
  return <>
    <header className="page page-header">
      <span className="kicker">About</span>
      <h1>Governance for the moments between intent and impact.</h1>
      <p>AI systems do not always fail loudly. They drift, misinterpret context, over-generalize patterns, or respond in ways that do not match the intent behind a request.</p>
      <p>Misalignment Platform helps organizations understand and govern those moments with continuous evidence about AI behavior, reasoning shifts, and operational risk.</p>
    </header>
    <section className="section band">
      <div className="section-heading"><div><span className="eyebrow">What the platform does</span><h2>Make behavior visible.</h2></div><p>AI safety becomes an operating practice when teams can observe, measure, govern, and improve it continuously.</p></div>
      <CardGrid>{capabilities.map(([title, description]) => <Card key={title} title={title}><p>{description}</p></Card>)}</CardGrid>
    </section>
    <section className="section">
      <div className="section-heading"><div><span className="eyebrow">Who it is for</span><h2>One evidence layer, many decisions.</h2></div></div>
      <CardGrid>{audiences.map(([title, description]) => <Card key={title} title={title}><p>{description}</p></Card>)}</CardGrid>
    </section>
    <section className="section band">
      <div className="split">
        <Card title="Mission"><p>To make AI behavior understandable, measurable, and governable—so organizations can deploy powerful systems without sacrificing safety, trust, or operational integrity.</p></Card>
        <Card title="Vision"><p>A world where every AI system operates with transparent evidence, stable alignment, and continuous governance—where drift is detectable, misalignment is correctable, and intent reliably becomes impact.</p></Card>
      </div>
    </section>
    <section className="section">
      <div className="split">
        <div><span className="eyebrow">Why alignment matters</span><h2>AI does not break like traditional software. It drifts.</h2></div>
        <div><p>Models can respond differently over time even when application code has not changed. Those shifts are subtle, often invisible, and capable of creating real-world consequences before anyone notices.</p><p>Alignment is the discipline of understanding how a system interprets input, makes decisions, and matches policy, ethics, and user expectations. It is not about restricting capability; it is about ensuring capability behaves as intended.</p></div>
      </div>
      <div className="notice" style={{marginTop:'2rem'}}><strong>Alignment is infrastructure.</strong><p style={{color:'var(--muted)',margin:'.5rem 0 0'}}>It turns drift into a measurable signal, doctrine into an enforceable practice, and governance from a reactive process into a continuous capability.</p></div>
    </section>
    <section className="section band">
      <div className="split"><div><span className="eyebrow">Our beginning</span><h2>From utility operations to AI observability.</h2></div><p style={{color:'var(--muted)'}}>Founder Brianel Hunter brings a utility operator's respect for weak signals, clear handoffs, and accountable decisions to the design of Conscio, V12, and the Ata-Cont doctrine.</p></div>
    </section>
  </>;
}
