import React from 'react';
import AuditEventViewer from '../components/AuditEventViewer';

export default function Audit() {
  return <><header className="page page-header"><span className="kicker">Evidence inspection</span><h1>Audit explorer</h1><p>Inspect a single event and the metadata behind its finding.</p></header><section className="section"><AuditEventViewer eventId="evt_0003"/></section></>;
}
