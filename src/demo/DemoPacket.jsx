import React from 'react';import {Card,CodeBlock,ScoreBadge} from '../components';export default function DemoPacket(){return <div className="demo-content"><div className="split"><Card title="Decision packet"><ScoreBadge score="72" label="misalignment index"/><p style={{color:'var(--muted)',marginTop:'1rem'}}>Recommendation: pause automated permission change and route to a human operator.</p><p className="positive">Evidence: 6 nodes · Doctrine: 2 triggers · Confidence: 91%</p></Card><CodeBlock language="json">{`{
  "trace": "tr_demo_2026",
  "status": "review_required",
  "provenance": ["ev_01", "ev_02", "ev_06"]
}`}</CodeBlock></div><div className="notice"><strong>What this means:</strong> the score organizes evidence for a decision. It does not certify safety, intent, or compliance.</div></div>}
