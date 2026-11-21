import React from 'react';
import { BankGrid, BankPanel, ProcessButton } from '../components';

export default function DemoAwareness({ input, onNext }) {
  return <div className="demo-content">
    <p>This step displays fields from the selected scenario. No model or awareness extractor runs.</p>
    <BankPanel title="Scenario fields">
      <BankGrid items={[
        {key:'SUBJECT', value:input.subject, note:'sample field'},
        {key:'ACTION', value:input.action, note:'sample field'},
        {key:'CONTEXT', value:input.context, note:'sample field'}
      ]}/>
    </BankPanel>
    <div className="demo-actions"><span className="positive">Static local fields · no evidence links</span><ProcessButton onClick={onNext}>Run toy keyword heuristic</ProcessButton></div>
  </div>;
}
