import React, { useState } from 'react';
import { ApiRequestPanel, ApiResponsePanel, ErrorBadge, ProcessButton, CodeBlock } from '../components';

export default function Console() {
  const [endpoint, setEndpoint] = useState('./mock/engines/conscio.json');
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
  return <section className="section"><header className="page-header"><span className="kicker">Developer portal</span><h1>API console</h1><p>Run deterministic requests against the public mock endpoints.</p></header><div className="api-console"><label className="input-panel"><span>GET endpoint</span><input value={endpoint} onChange={event => setEndpoint(event.target.value)}/></label><ProcessButton onClick={run} disabled={state.running}>{state.running ? 'Requesting...' : 'Send request'}</ProcessButton><ApiRequestPanel method="GET" endpoint={endpoint}/>{state.error && <ErrorBadge>{state.error}</ErrorBadge>}{state.response && <ApiResponsePanel status="200 OK"><CodeBlock>{JSON.stringify(state.response, null, 2)}</CodeBlock></ApiResponsePanel>}</div></section>;
}
