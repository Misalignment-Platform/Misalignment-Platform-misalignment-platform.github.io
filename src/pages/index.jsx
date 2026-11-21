import React, { useState } from 'react';
import { AnimatedSection, Card, CardGrid, EngineCard, Tabs, TabPanel, ProcessButton, Reveal, StepIndicator, ConscioMascot, OutputCard } from '../components';

const engineRoles = [
  ['CONSCIO', '01', 'Proposed role: interpreting intent and conversational context'],
  ['SENTINEL', '02', 'Proposed role: examining behavioral change'],
  ['OMNITRAX', '03', 'Proposed role: representing trace provenance'],
  ['ATA-CONT', '04', 'Proposed role: expressing constraints and doctrine'],
  ['REPHRASE', '05', 'Proposed role: exploring prompt resilience'],
  ['CODEX', '06', 'Proposed role: surfacing policy-related code signals']
];

export default function Home({ navigate }) {
  const [domain, setDomain] = useState('Operations');
  return <>
    <section className="page hero">
      <div>
        <span className="kicker">Research direction &amp; local prototype</span>
        <h1>Explore the gap<br/>between <em>intent and behavior.</em></h1>
        <p className="lede">Misalignment Platform explores ways to examine divergence between intent, behavior, and context. This site presents concepts and browser-side prototypes; it is not a deployed monitoring or governance service.</p>
        <div className="hero-actions"><ProcessButton onClick={() => navigate('/demo')}>Explore the local demo</ProcessButton><a className="button-quiet" href="#/doctrine">View proposed principles →</a></div>
      </div>
      <div className="pipeline">
        <div className="pipeline-title"><span>Illustrative concept flow</span><span>Not a runtime</span></div>
        <OutputCard title="Example review path" eyebrow="Static illustration">
          <StepIndicator steps={['Observation', 'Context', 'Questions', 'Human review']} current={0}/>
          <ConscioMascot mood="calm"/>
        </OutputCard>
        <div className="pipeline-steps">{['Describe an observation', 'Add relevant context', 'Identify open questions', 'Leave decisions to people'].map((text, index) => <div className="pipeline-node" key={text}><i/><span>{text}</span><small>{index + 1}</small></div>)}</div>
        <p style={{color:'var(--muted)',fontSize:'.78rem',margin:'1rem 0 0'}}>This illustration does not process a live trace or produce a validated assessment.</p>
      </div>
    </section>

    <AnimatedSection className="section">
      <div className="section-heading"><div><span className="eyebrow">Areas under exploration</span><h2>Questions worth making legible.</h2></div><p>These are design goals, not claims about an available or validated platform capability.</p></div>
      <CardGrid>{[
        ['Observe', 'How could interaction traces and relevant context be examined without interrupting a workflow?'],
        ['Interpret', 'How might signals across intent, policy, and behavior be compared while preserving uncertainty?'],
        ['Review', 'What evidence would help a person decide what to investigate next?'],
        ['Provenance', 'How should a finding retain links to observations and sources?'],
        ['Continuity', 'What would be needed to compare observations over time?'],
        ['Doctrine', 'How might an organization describe boundaries on delegated authority?']
      ].map(([title, text]) => <Card key={title} title={title}><p>{text}</p></Card>)}</CardGrid>
    </AnimatedSection>

    <section className="section band">
      <div className="section-heading"><div><span className="eyebrow">Conceptual engine roles</span><h2>Ideas, not a deployed suite.</h2></div><a className="text-link" href="#/engines">Review role descriptions →</a></div>
      <CardGrid>{engineRoles.map(([name, code, description]) => <EngineCard key={name} name={name} code={code} description={description} onClick={() => navigate(`/engines/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}/>)}</CardGrid>
    </section>

    <section className="section">
      <div className="split">
        <div><span className="eyebrow">Local interactive demo</span><h2>A small, illustrative trace.</h2><p style={{color:'var(--muted)'}}>The browser-side demo uses a toy keyword heuristic and sample scenarios. Its scores are not validated measures of alignment, intent, or risk.</p><ProcessButton onClick={() => navigate('/demo')}>Explore a sample trace</ProcessButton></div>
        <div className="notice"><span className="eyebrow">Illustrative scenario</span><p>“A support agent resolves a ticket, then broadens account permissions to improve future response time.”</p><span className="text-link">Sample text · not an observed event</span></div>
      </div>
    </section>

    <section className="section band">
      <div className="section-heading"><div><span className="eyebrow">Illustrative use cases</span><h2>Questions across different settings.</h2></div></div>
      <Tabs items={['Operations','Product','Security','Research']} active={domain} onChange={setDomain}/>
      <TabPanel active={domain === 'Operations'}><div className="split"><Card title="Human review"><p>What evidence could help a team decide when to investigate an output?</p></Card><Card title="Change over time"><p>What baselines and context would be needed to interpret behavioral change?</p></Card></div></TabPanel>
      <TabPanel active={domain === 'Product'}><div className="notice">A research question: how could model behavior be represented as useful product telemetry?</div></TabPanel>
      <TabPanel active={domain === 'Security'}><div className="notice">A research question: how could policy concerns be connected to trace-level evidence?</div></TabPanel>
      <TabPanel active={domain === 'Research'}><div className="notice">A research question: how should experiments document baselines, observations, and uncertainty?</div></TabPanel>
    </section>

    <section className="section">
      <div className="split">
        <div><span className="eyebrow">Proposed doctrine themes</span><h2>Principles to examine, not controls in force.</h2><p style={{color:'var(--muted)'}}>The Ata-Cont material expresses design ideas about agency, truth, impact, and stewardship. This site does not apply or enforce those ideas in a platform runtime.</p><a className="text-link" href="#/doctrine">Read the illustrative principles →</a></div>
        <Reveal><div className="quote">“A score is a signal to investigate—not a substitute for judgment.”<small style={{display:'block',color:'var(--muted)',marginTop:'.8rem'}}>Guiding design principle; not a validated measurement claim.</small></div></Reveal>
      </div>
    </section>

    <section className="section band">
      <div className="split"><div><span className="eyebrow">Potential research directions</span><h2>Make evidence useful together.</h2></div><div><p style={{color:'var(--muted)'}}>Integration, implementation, and research are ideas for possible collaboration, not an established partner program.</p><a className="text-link" href="#/partners">See the research directions →</a></div></div>
    </section>

    <section className="section">
      <div className="split"><div><span className="eyebrow">Project motivation</span><h2>Governance questions deserve evidence.</h2></div><p style={{color:'var(--muted)'}}>The project explores how to make weak signals, uncertainty, and decision handoffs more visible. This is a design intention, not a demonstrated product outcome.</p></div>
    </section>

    <section className="section"><div className="notice"><span className="eyebrow">Project status</span><h2 style={{margin:'.4rem 0'}}>No access-request service is connected.</h2><p style={{color:'var(--muted)',margin:0}}>The website does not submit or store access requests.</p></div></section>
  </>;
}
