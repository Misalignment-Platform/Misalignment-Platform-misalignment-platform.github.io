import React from 'react';
import { AlignmentRadar, Card, ProcessButton } from '../components';

export default function DemoV12({ analysis, onNext }) {
  return <div className="demo-content">
    <div className="split">
      <Card title="Placeholder profile"><p style={{color:'var(--muted)'}}>The displayed shape is a fixed illustration independent of the toy score. It is not a six-dimension analysis or a V12 runtime result.</p></Card>
      <Card title="Illustrative graphic"><AlignmentRadar data={analysis.radar}/></Card>
    </div>
    <div className="demo-actions"><span className="positive">Static illustration · no provenance attached</span><ProcessButton onClick={onNext}>Show principle prompt</ProcessButton></div>
  </div>;
}
