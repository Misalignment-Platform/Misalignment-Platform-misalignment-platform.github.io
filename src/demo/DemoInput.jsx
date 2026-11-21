import React from 'react';
import { CodeBlock, ProcessButton } from '../components';

export default function DemoInput({ scenario, scenarios, selectedIndex, onScenarioChange, onNext }) {
  return <div className="demo-content">
    <label className="input-panel"><span>Local sample scenario</span><select value={selectedIndex} onChange={event => onScenarioChange(Number(event.target.value))}>{scenarios.map((item, index) => <option key={item.id} value={index}>{item.label}</option>)}</select></label>
    <div className="notice"><span className="eyebrow">Illustrative text · not an observed trace</span><p>{scenario.trace}</p><CodeBlock>{JSON.stringify({subject:scenario.subject, action:scenario.action, context:scenario.context}, null, 2)}</CodeBlock></div>
    <div className="demo-actions"><span style={{color:'var(--muted)',fontSize:'.8rem'}}>Preset only · not submitted or stored</span><ProcessButton onClick={onNext}>Display scenario fields</ProcessButton></div>
  </div>;
}
