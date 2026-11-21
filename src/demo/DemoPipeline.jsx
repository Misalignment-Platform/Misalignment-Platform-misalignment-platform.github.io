import React, { useState } from 'react';
import { StepIndicator } from '../components';
import { analyzeObservation } from './analyzeObservation';
import { scenarios } from './scenarios';
import DemoInput from './DemoInput';
import DemoAwareness from './DemoAwareness';
import DemoMisalignment from './DemoMisalignment';
import DemoV12 from './DemoV12';
import DemoDoctrine from './DemoDoctrine';
import DemoPacket from './DemoPacket';

const steps = ['Choose sample', 'Display fields', 'Toy score', 'Placeholder graphic', 'Example prompts', 'Local summary'];

export default function DemoPipeline() {
  const [step, setStep] = useState(0);
  const [scenarioIndex, setScenarioIndex] = useState(3);
  const [input, setInput] = useState(scenarios[3]);
  const [analysis, setAnalysis] = useState(() => analyzeObservation(scenarios[3]));
  const chooseScenario = index => {
    const selected = scenarios[index];
    setScenarioIndex(index);
    setInput(selected);
    setAnalysis(analyzeObservation(selected));
    setStep(0);
  };
  const next = () => {
    setAnalysis(analyzeObservation(input));
    setStep(current => Math.min(5, current + 1));
  };
  const reset = () => setStep(0);
  const views = [
    <DemoInput scenario={input} scenarios={scenarios} selectedIndex={scenarioIndex} onScenarioChange={chooseScenario} onNext={next}/>,
    <DemoAwareness input={input} onNext={next}/>,
    <DemoMisalignment analysis={analysis} onNext={next}/>,
    <DemoV12 analysis={analysis} onNext={next}/>,
    <DemoDoctrine analysis={analysis} onNext={next}/>,
    <DemoPacket input={input} analysis={analysis}/>
  ];

  return <div className="demo-shell">
    <StepIndicator steps={steps} current={step}/>
    <div>
      <div className="panel-heading" style={{marginBottom:'1rem'}}>
        <div><span className="eyebrow">Local browser demonstration</span><h2 style={{margin:'.35rem 0'}}>Inspect a sample step by step.</h2></div>
        {step === 5 && <button className="button-quiet" onClick={reset}>Run again ↻</button>}
      </div>
      {views[step]}
    </div>
  </div>;
}
