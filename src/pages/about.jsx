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
      <p>This website is a presentation with local demo data. The separate Platform repository contains implemented service artifacts and tested prototypes at different maturity levels; they are not connected to this website or represented as a production service.</p>
    </header>
    <section className="section band">
      <div className="section-heading"><div><span className="eyebrow">Concepts under exploration</span><h2>Design goals alongside implementation.</h2></div><p>The ideas below are not all delivered capabilities; related code and prototypes exist, with status described separately.</p></div>
      <CardGrid>{capabilities.map(([title, description]) => <Card key={title} title={title}><p>{description}</p></Card>)}</CardGrid>
    </section>
    <section className="section">
      <div className="section-heading"><div><span className="eyebrow">Implementation status</span><h2>What exists—and what it proves.</h2></div><p>Status labels separate versioned code, current prototypes, design roles, and production readiness.</p></div>
      <CardGrid>
        <Card title="VERIFIED · historical implementation">
          <p>The repository retains an earlier local Conscio runtime and drift-verification harness in <code>runtime-v010</code>, including Smith orchestration and aligned, drift, policy, and failure scenarios. This verifies historical implementation code, not current service availability or deployment.</p>
          <a className="text-link" href="https://github.com/Misalignment-Platform/misalignment-platform/tree/main/runtime-v010">Browse the historical runtime →</a>
        </Card>
        <Card title="VERIFIED · current service prototypes">
          <p>The current-state record lists a Conscio session endpoint with a length-based prototype score, SQLite event storage, Smith async orchestration proof, Rephrase advisory, a static UI, an API gateway, and backend bearer-token scopes. These are bounded repository artifacts, not a production suite.</p>
          <a className="text-link" href="https://github.com/Misalignment-Platform/misalignment-platform/blob/main/CURRENT_STATE.md">Read the implementation inventory →</a>
          <p><a className="text-link" href="https://github.com/Misalignment-Platform/misalignment-platform/blob/main/conscio-api/main.py">Conscio API code →</a> · <a className="text-link" href="https://github.com/Misalignment-Platform/misalignment-platform/blob/main/smith-api/main.py">Smith prototype code →</a></p>
        </Card>
        <Card title="VERIFIED · current tested prototype">
          <p>The standalone Triad runtime uses eight bounded high-severity rules through AthenaSentinel and a local tamper-evident hash chain. Its validation report records 46 passing tests on 2026-10-08. Without a rule match, its score is caller-supplied confidence, not measured alignment; adversarial coverage is incomplete and downstream delivery is not implemented.</p>
          <a className="text-link" href="https://github.com/Misalignment-Platform/misalignment-platform/blob/main/reports/triad_runtime_validation_report.md">Read the Triad limits and test report →</a>
        </Card>
        <Card title="CONCEPTUAL · design roles">
          <p>Conscio as a platform-wide evidence-grounded interpreter and Smith as an independent deterministic enforcement authority remain intended roles, not an integrated guarantee. Triad's tested gate is AthenaSentinel.</p>
          <a className="text-link" href="https://github.com/Misalignment-Platform/misalignment-platform/pull/73">See the repository-local reconciliation in PR #73 →</a>
        </Card>
        <Card title="UNPROVEN · production capability">
          <p>The current-state record says canonical alignment scoring, production-grade authentication and tenant isolation, externally anchored immutable audit, production deployment, and governed autonomy are not implemented.</p>
          <a className="text-link" href="https://github.com/Misalignment-Platform/misalignment-platform/blob/main/CURRENT_STATE.md">Review the production boundary →</a>
        </Card>
      </CardGrid>
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
      <div className="notice" style={{marginTop:'2rem'}}><strong>Evidence boundary</strong><p style={{color:'var(--muted)',margin:'.5rem 0 0'}}>The repository contains real service and runtime implementations; validation supports the specific prototype behaviors reported, not general measurement, canonical scoring, production readiness, or deployment of the Platform services.</p></div>
    </section>
  </>;
}
