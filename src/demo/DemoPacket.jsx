import React from 'react';
import { Card, CodeBlock, ScoreBadge } from '../components';

export default function DemoPacket({ input, analysis }) {
  const sample = {
    scenario: input.id,
    toyKeywordScore: analysis.score,
    demoFlag: analysis.showExamplePrompts ? 'example_prompts_shown' : 'no_example_prompts',
    source: 'local browser demonstration; no provenance'
  };
  return <div className="demo-content">
    <div className="split">
      <Card title="Local demonstration summary"><ScoreBadge score={analysis.score} label="toy keyword score"/><p style={{color:'var(--muted)',marginTop:'1rem'}}>This value comes from a small keyword heuristic. It is not evidence, a risk assessment, or a recommendation.</p></Card>
      <CodeBlock language="illustrative JSON">{JSON.stringify(sample, null, 2)}</CodeBlock>
    </div>
    <div className="notice"><strong>Interpretation:</strong> this browser-side sample does not create a trace, attach evidence, evaluate doctrine, or route a decision.</div>
  </div>;
}
