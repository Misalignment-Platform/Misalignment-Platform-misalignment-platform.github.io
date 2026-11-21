import React from 'react';
import AuditEventViewer from '../components/AuditEventViewer';

export default function Audit() {
  return <><header className="page page-header"><span className="kicker">Local fixture</span><h1>Sample event viewer</h1><p>This page reads one static JSON fixture. It is not a real audit record, customer event, or evidence of an operational audit service.</p></header><section className="section"><AuditEventViewer eventId="evt_0003"/></section></>;
}
