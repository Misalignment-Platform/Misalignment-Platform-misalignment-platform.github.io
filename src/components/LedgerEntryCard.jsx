import React from 'react';
import { CodeBlock } from './index';

export default function LedgerEntryCard({ entry }) {
  return <article className="card ledger-entry">
    <div className="section-heading"><div><span className="eyebrow">{entry.event_id}</span><h3>{entry.type}</h3></div><span className="status-dot">● linked</span></div>
    <p>{entry.timestamp}</p>
    <CodeBlock>{`hash: ${entry.hash}\nprev: ${entry.prev_hash || 'ROOT'}`}</CodeBlock>
  </article>;
}
