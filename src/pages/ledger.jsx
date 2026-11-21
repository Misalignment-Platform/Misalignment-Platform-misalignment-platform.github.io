import React, { useState } from 'react';
import LedgerChainViewer from '../components/LedgerChainViewer';

export default function Ledger() {
  const [tenantId, setTenantId] = useState('tenantA');
  return <><header className="page page-header"><span className="kicker">Local JSON fixtures</span><h1>Illustrative chain-shaped data</h1><p>The viewer reads static sample files. It does not verify hashes, provide tenant isolation, or connect to a live or immutable ledger.</p></header><section className="section"><label className="input-panel"><span>Sample fixture label</span><select value={tenantId} onChange={event => setTenantId(event.target.value)}><option value="tenantA">Sample A</option><option value="tenantB">Sample B</option></select></label><LedgerChainViewer tenantId={tenantId}/></section></>;
}
