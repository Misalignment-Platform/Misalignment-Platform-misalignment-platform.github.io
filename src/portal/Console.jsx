import React, { useState } from 'react';
import { ApiResponsePanel, ErrorBadge, ProcessButton, CodeBlock } from '../components';

const sampleFiles = [
  ['./mock/engines/conscio.json', 'Conscio sample'],
  ['./mock/engines/v12.json', 'V12 sample'],
  ['./mock/engines/sentinel.json', 'Sentinel sample'],
  ['./mock/ledger/event_sample.json', 'Ledger event fixture']
];

export default function Console() {
  const [endpoint, setEndpoint] = useState(sampleFiles[0][0]);
  const [state, setState] = useState({ response: null, error: null, running: false });

  async function run() {
    setState({ response: null, error: null, running: true });
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      setState({ response: await response.json(), error: null, running: false });
    } catch (error) {
      setState({ response: null, error: error.message, running: false });
    }
  }

  return <section className="section">
    <header className="page-header">
      <span className="kicker">Local JSON fixtures</span>
      <h1>Sample-data viewer</h1>
      <p>Choose a static file bundled with this site. These fixtures are not responses from a live API or production engine.</p>
    </header>
    <div className="api-console">
      <label className="input-panel"><span>Sample file</span><select value={endpoint} onChange={event => setEndpoint(event.target.value)}>{sampleFiles.map(([path, label]) => <option key={path} value={path}>{label}</option>)}</select></label>
      <ProcessButton onClick={run} disabled={state.running}>{state.running ? 'Reading sample...' : 'Read sample file'}</ProcessButton>
      {state.error && <ErrorBadge>{state.error}</ErrorBadge>}
      {state.response && <ApiResponsePanel status="Local file"><CodeBlock>{JSON.stringify(state.response, null, 2)}</CodeBlock></ApiResponsePanel>}
    </div>
  </section>;
}
