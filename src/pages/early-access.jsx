import React from 'react';
import { Card } from '../components';

export default function EarlyAccess() {
  return <section className="page page-header" style={{maxWidth:'760px'}}>
    <span className="kicker">Small-business beta</span>
    <h1>Coming Soon — Join the Beta</h1>
    <p>We're preparing a beta for small-business owners to help us understand where alignment breaks in real work. Signup isn't open yet, and this page doesn't collect contact information.</p>
    <p><a className="text-link" href="#/explorer">Explore a business problem in the meantime →</a></p>
    <Card title="Current boundary"><p>The public site is an exploratory presentation with local prototypes. It does not represent an available production service. We'll share more about beta participation when signup opens.</p></Card>
  </section>;
}
