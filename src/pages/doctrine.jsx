import React from 'react';
import { DoctrineRule, RuleList, Card } from '../components';

const principles = [
  ['ATA-01', 'Keep agency explicit', 'A design principle: any delegated authority should be bounded and visible.'],
  ['ATA-02', 'Make claims traceable', 'A design principle: connect claims to observations, sources, or stated uncertainty.'],
  ['ATA-03', 'Describe impact in context', 'A design principle: consider who and what may be affected, not only a model score.'],
  ['ATA-04', 'Preserve human choice', 'A design principle: when signals conflict, avoid implying that a score settles the decision.']
];

export default function Doctrine() {
  return <>
    <header className="page page-header">
      <span className="kicker">Ata-Cont · proposed design principles</span>
      <h1>Boundaries to discuss, not controls in force.</h1>
      <p>This page presents an illustrative summary of doctrine themes. The website does not load, version, or enforce these rules in a platform runtime.</p>
    </header>
    <section className="section">
      <Card title="Status"><p style={{color:'var(--muted)'}}>Conceptual material. No active profile, integrated enforcement guarantee, or production control is represented here.</p></Card>
      <RuleList>{principles.map(([id, title, text]) => <DoctrineRule key={id} id={id} title={title}>{text}</DoctrineRule>)}</RuleList>
    </section>
    <section className="section band">
      <h2>Human review remains a design question</h2>
      <p style={{color:'var(--muted)'}}>The prototype does not trigger a review packet or route an operational decision. Its controls are illustrative UI only.</p>
    </section>
  </>;
}
