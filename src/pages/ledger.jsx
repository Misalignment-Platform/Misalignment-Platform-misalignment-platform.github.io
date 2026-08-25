import React, { useState } from 'react';
import LedgerChainViewer from '../components/LedgerChainViewer';

export default function Ledger() {
  const [tenantId, setTenantId] = useState('tenantA');
  return <><header className="page page-header"><span className="kicker">Provenance</span><h1>Ledger viewer</h1><p>Follow every decision-support signal through its tenant-scoped hash chain.</p></header><section className="section"><label className="input-panel"><span>Tenant</span><select value={tenantId} onChange={event => setTenantId(event.target.value)}><option value="tenantA">Tenant A</option><option value="tenantB">Tenant B</option></select></label><LedgerChainViewer tenantId={tenantId}/></section></>;
}
