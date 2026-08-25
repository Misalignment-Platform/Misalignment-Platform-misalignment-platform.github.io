import React, { useEffect, useState } from 'react';
import LedgerEntryCard from './LedgerEntryCard';

export default function LedgerChainViewer({ tenantId }) {
  const [state, setState] = useState({ loading: true, data: null, error: null });
  useEffect(() => {
    let active = true;
    fetch(`./mock/ledger/${tenantId}_chain.json`)
      .then(response => { if (!response.ok) throw new Error('Ledger chain unavailable'); return response.json(); })
      .then(data => active && setState({ loading: false, data, error: null }))
      .catch(error => active && setState({ loading: false, data: null, error: error.message }));
    return () => { active = false; };
  }, [tenantId]);
  if (state.loading) return <p>Loading ledger chain...</p>;
  if (state.error) return <p role="alert">{state.error}</p>;
  return <div className="ledger-chain"><div className="section-heading"><div><span className="eyebrow">Append-only provenance</span><h2>{state.data.tenant_id} chain</h2></div><code>{state.data.chain_id}</code></div>{state.data.entries.map(entry => <LedgerEntryCard key={entry.event_id} entry={entry}/>)}</div>;
}
