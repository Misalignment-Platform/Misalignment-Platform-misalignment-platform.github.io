import React from 'react';
import { Card, CardGrid } from '../components';

export default function Developers() {
  return <>
    <header className="page page-header">
      <span className="kicker">Developer samples</span>
      <h1>Inspect the local prototype data.</h1>
      <p>This repository does not establish a deployed public API or SDK. The console reads static JSON files bundled with this website; it does not submit observations or contact a platform backend.</p>
      <a className="text-link" href="#/console">Open the local sample-data viewer →</a>
    </header>
    <section className="section">
      <CardGrid>
        <Card title="Sample engine data"><p>Static mock files show possible response shapes. They are not engine results or service responses.</p></Card>
        <Card title="Sample audit event"><p>A fixture demonstrates how event metadata could be displayed. It is not a real customer event or audit record.</p><a className="text-link" href="#/audit">View the fixture →</a></Card>
        <Card title="Sample ledger"><p>Local JSON illustrates a chain-shaped display. It does not verify a live or immutable ledger.</p><a className="text-link" href="#/ledger">View the fixture →</a></Card>
      </CardGrid>
    </section>
  </>;
}
