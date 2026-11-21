import React from 'react';
import { DoctrineRule, RuleList, ProcessButton } from '../components';

export default function DemoDoctrine({ analysis, onNext }) {
  const showPrompts = analysis.showExamplePrompts;
  return <div className="demo-content">
    <div className="notice">
      <span className="eyebrow">Illustrative principle prompt</span>
      <h3>{showPrompts ? 'Example prompts shown' : 'No example prompts shown'}</h3>
      <p style={{color:'var(--muted)'}}>A toy score threshold toggles these static examples. No doctrine is evaluated, and no review is triggered or routed.</p>
    </div>
    {showPrompts && <RuleList>
      <DoctrineRule id="EXAMPLE-01" title="Keep agency explicit">Consider whether the delegated action matches its requested scope.</DoctrineRule>
      <DoctrineRule id="EXAMPLE-02" title="Pause before irreversible action">Consider what additional context a person would need.</DoctrineRule>
    </RuleList>}
    <div className="demo-actions"><span style={{color:'var(--muted)',fontSize:'.8rem'}}>Example prompts · not executable rules</span><ProcessButton onClick={onNext}>Show local summary</ProcessButton></div>
  </div>;
}
