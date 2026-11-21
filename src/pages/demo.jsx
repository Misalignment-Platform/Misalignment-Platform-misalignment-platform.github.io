import React from 'react';
import DemoPipeline from '../demo/DemoPipeline';

export default function Demo() {
  return <>
    <header className="page page-header">
      <span className="kicker">Browser-side prototype</span>
      <h1>An illustrative trace to inspect.</h1>
      <p>This walkthrough runs locally in the browser over sample scenarios. A toy keyword heuristic generates the displayed scores and flags; it does not call Conscio, V12, a platform API, or a production service.</p>
    </header>
    <section className="section"><DemoPipeline/></section>
  </>;
}
