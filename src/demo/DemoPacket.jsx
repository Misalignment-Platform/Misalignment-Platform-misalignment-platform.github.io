import React from 'react';import {Card,CodeBlock,ScoreBadge} from '../components';export default function DemoPacket({input,analysis}){return <div className="demo-content"><div className="split"><Card title="Decision packet"><ScoreBadge score={analysis.score} label="misalignment index"/><p style={{color:'var(--muted)',marginTop:'1rem'}}>{analysis.triggeredRules?'Recommendation: route this observation to a human operator.':'Recommendation: continue with normal monitoring.'}</p><p className="positive">Subject: {input.subject} · Doctrine: {analysis.triggeredRules} triggers · Confidence: {analysis.confidence}%</p></Card><CodeBlock language="json">{`{
  "trace": "tr_demo_2026",
  "status": "${analysis.triggeredRules?'review_required':'observed'}",
  "score": ${analysis.score},
  "provenance": ["ev_01", "ev_02"]
}`}</CodeBlock></div><div className="notice"><strong>What this means:</strong> the score organizes evidence for a decision. It does not certify safety, intent, or compliance.</div></div>}
