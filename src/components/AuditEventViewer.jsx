import React, { useEffect, useState } from 'react';
import { CodeBlock, SeverityBadge } from './index';

export default function AuditEventViewer({ eventId }) {
  const [state, setState] = useState({ loading: true, data: null, error: null });
  useEffect(() => {
    let active = true;
    fetch('./mock/ledger/event_sample.json')
      .then(response => { if (!response.ok) throw new Error('Audit event unavailable'); return response.json(); })
      .then(data => active && setState({ loading: false, data, error: null }))
      .catch(error => active && setState({ loading: false, data: null, error: error.message }));
    return () => { active = false; };
  }, [eventId]);
  if (state.loading) return <p>Loading audit event...</p>;
  if (state.error) return <p role="alert">{state.error}</p>;
  const data = state.data;
  return <article className="card audit-event"><span className="eyebrow">{data.event_id}</span><h2>Audit event</h2><p>Tenant: {data.tenant_id} · {data.timestamp}</p><p>{data.type} · score {data.score} · <SeverityBadge level={data.severity}/></p><CodeBlock>{JSON.stringify(data.metadata, null, 2)}</CodeBlock></article>;
}
