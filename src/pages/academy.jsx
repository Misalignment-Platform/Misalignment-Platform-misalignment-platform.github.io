import React from 'react';
import { Card, CardGrid, Collapse } from '../components';

export default function Academy() {
  return <>
    <header className="page page-header"><span className="kicker">Exploration notes</span><h1>Questions for investigating a signal.</h1><p>These static prompts are not a course, training program, or validated operating method.</p></header>
    <section className="section"><CardGrid>
      <Card title="01 · Evidence thinking"><p>Separate an observed output from an interpretation of intent.</p></Card>
      <Card title="02 · Drift patterns"><p>Ask what context and baseline would be needed to examine behavioral change.</p></Card>
      <Card title="03 · Decision practice"><p>Treat prototype scores as unvalidated examples, not calibrated prompts or decisions.</p></Card>
    </CardGrid></section>
    <section className="section band"><h2>Topics to explore</h2><div className="rule-list">
      <Collapse title="Operations"><p>Questions about evidence, incident review, and handoffs.</p></Collapse>
      <Collapse title="Engineering"><p>Questions about trace context, provenance, and delegation boundaries.</p></Collapse>
      <Collapse title="Governance"><p>Questions about expressing principles and stating uncertainty.</p></Collapse>
    </div></section>
  </>;
}
