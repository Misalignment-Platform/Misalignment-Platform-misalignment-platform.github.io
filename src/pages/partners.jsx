import React from 'react';
import { Card, CardGrid } from '../components';

export default function Partners() {
  return <>
    <header className="page page-header">
      <span className="kicker">Possible research directions</span>
      <h1>Questions for future collaboration.</h1>
      <p>These are areas someone might explore with the project. They do not indicate existing partners, integrations, or an active partner program.</p>
    </header>
    <section className="section">
      <CardGrid>
        <Card title="Technology questions"><p>What evidence and context could be exchanged between model gateways and observability tools?</p></Card>
        <Card title="Implementation questions"><p>How might teams express operating principles without presenting them as guaranteed enforcement?</p></Card>
        <Card title="Research questions"><p>Which baselines, experiments, and uncertainty measures would be needed to evaluate a proposed signal?</p></Card>
      </CardGrid>
    </section>
    <section className="section band">
      <div className="notice"><h2>No partner program is represented.</h2><p style={{color:'var(--muted)'}}>This page describes possible topics only; no application or partnership workflow is connected.</p></div>
    </section>
  </>;
}
