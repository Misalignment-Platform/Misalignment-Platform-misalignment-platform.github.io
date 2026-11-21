import React from 'react';
import { Card } from '../components';

export default function EarlyAccess() {
  return <section className="page page-header" style={{maxWidth:'760px'}}>
    <span className="kicker">Project status</span>
    <h1>No access-request service is connected.</h1>
    <p>The previous form was a browser-only interaction and did not transmit or store requests. This page makes that limitation explicit; it does not collect an email address.</p>
    <Card title="Current boundary"><p>The public site is an exploratory presentation with local prototypes. It does not represent an available production service or active early-access program.</p></Card>
  </section>;
}
