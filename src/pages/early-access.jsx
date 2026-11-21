import React from 'react';
import { Card } from '../components';

export default function EarlyAccess() {
  return <section className="page page-header" style={{maxWidth:'760px'}}>
    <span className="kicker">Small-business beta</span>
    <h1>Beta signup is not open yet.</h1>
    <p>We're looking for small-business owners willing to help us understand where alignment breaks in real work. A signup process is being prepared; this page does not collect an email address or other contact information.</p>
    <p><a className="text-link" href="#/explorer">Explore a business problem in the meantime →</a></p>
    <Card title="Current boundary"><p>The public site is an exploratory presentation with local prototypes. It does not represent an available production service, and no beta program is accepting participants through this website yet.</p></Card>
  </section>;
}
