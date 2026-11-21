import React from 'react';
import { MisalignmentScore, ProcessButton, SeverityBadge } from '../components';

export default function DemoMisalignment({ analysis, onNext }) {
  return <div className="demo-content">
    <div className="notice">
      <span className="eyebrow">Toy keyword heuristic</span>
      <p>The local script counts a small list of words in the sample text. It does not interpret intent, compare action with context, or assess actual risk.</p>
      <p><SeverityBadge level={analysis.severity}/> Demo-only flag from a non-validated formula.</p>
    </div>
    <MisalignmentScore score={analysis.score} label="Toy keyword score"/>
    <div className="demo-actions"><span style={{color:'var(--muted)',fontSize:'.8rem'}}>No model, evidence graph, or operational decision</span><ProcessButton onClick={onNext}>Show placeholder profile</ProcessButton></div>
  </div>;
}
