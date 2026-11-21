import React, { useEffect, useRef, useState } from 'react';

const scenarios = [
  {
    id: 'customers', label: 'Customers', icon: '💬', tone: 'coral',
    quote: 'That’s not what I thought I was buying.',
    description: 'Explore where expectations, communication, and delivery stopped matching.',
    lens: 'what was said and what the customer understood',
    example: {
      goal: 'Explain that our landscaping quote covered spring cleanup only, with weekly mowing priced separately.',
      happened: 'The customer expected weekly mowing to be included and was upset when the first mowing invoice arrived.',
      context: 'The quote was discussed by phone, then emailed as a one-line total. The customer had used a previous company that bundled mowing.',
      environment: 'It was our busiest week and the quote was sent from a phone between jobs.',
      useful: 'Customers can tell from the quote exactly what is and is not included before they say yes.'
    },
    questions: ['Where did the customer first form their understanding, and what did they see or hear there?', 'Was there a moment when the customer could confirm their understanding before acting on it?']
  },
  {
    id: 'employees', label: 'Employees', icon: '🧭', tone: 'amber',
    quote: 'That’s not what I asked for.',
    description: 'Look at the gap between the instruction, what was understood, and what actually happened.',
    lens: 'the instruction, what was understood, and what happened',
    example: {
      goal: 'Every catering order is double-checked against the order sheet before it leaves the kitchen.',
      happened: 'On busy days, orders go out after a quick glance. Two orders last month were missing items.',
      context: 'The checklist is in a binder in the office. Newer staff learned the job by shadowing, not from the checklist.',
      environment: 'Saturday mornings have several pickups within the same half hour and one fewer person on shift.',
      useful: 'A check that people actually do on the busiest days, not just on paper.'
    },
    questions: ['When the written process and daily practice differ, which one do people believe they are expected to follow?', 'Has anyone said what makes the written step hard to do in the moment?']
  },
  {
    id: 'ai', label: 'AI & automation', icon: '⚙️', tone: 'blue',
    quote: 'Technically right. Completely wrong.',
    description: 'Explore when software or AI completes the request but misses the real objective.',
    lens: 'the instruction given and what the tool produced',
    example: {
      goal: 'Use an AI tool to draft friendly payment reminders for invoices more than 30 days overdue.',
      happened: 'It drafted reminders for every unpaid invoice, including ones not yet due, and the tone felt stern.',
      context: 'The prompt said “write reminders for unpaid invoices” and attached the full invoice export.',
      environment: 'The drafts were generated at month end and almost sent in a batch before someone noticed.',
      useful: 'Drafts only for the right invoices, in a tone that protects long-term customer relationships.'
    },
    questions: ['Which part of what you meant was written down in the instruction, and which part was assumed?', 'Who reviews the output before it reaches a customer or changes a record?']
  },
  {
    id: 'owner', label: 'Owner overload', icon: '🧩', tone: 'violet',
    quote: 'I know we talked about this somewhere…',
    description: 'Look at decisions and context scattered across conversations, email, documents, systems, and memory.',
    lens: 'decisions that were made and where they can be found',
    example: {
      goal: 'Agree on a new delivery-fee policy with the team and apply it consistently.',
      happened: 'Two staff members quoted different fees to customers the same week.',
      context: 'The decision was made in a hallway conversation, then mentioned in a group text that not everyone saw.',
      environment: 'I was traveling for a supplier visit and answering questions from my phone.',
      useful: 'One place where current decisions live, so the team does not have to ask me.'
    },
    questions: ['Where would someone look today to find the current version of this decision?', 'Who needed to know about the decision, and how would they have learned it?']
  }
];

const fields = [
  ['goal', 'What were you trying to accomplish?', 'Describe what success was supposed to mean.'],
  ['happened', 'What actually happened?', 'Describe what occurred, as plainly as you can.'],
  ['context', 'What context might have mattered?', 'Information, assumptions, or communication that shaped it.'],
  ['useful', 'What would a useful result look like?', 'What would be different if this went well?'],
  ['environment', 'What was happening around it? (optional)', 'Pressures, systems, timing, incentives, or circumstances that may have mattered.']
];

const empty = { goal: '', happened: '', context: '', environment: '', useful: '' };
const clean = text => text.trim();
const quote = text => `“${clean(text).replace(/[.!?]+$/, '')}”`;

function examine(scenario, entry) {
  const prompts = [];
  const gaps = [];
  const { goal, happened, context, environment, useful } = Object.fromEntries(Object.entries(entry).map(([key, value]) => [key, clean(value)]));
  if (goal) prompts.push(`You described the goal as ${quote(goal)}. Did everyone involved share that same definition of success before it started?`);
  if (goal && happened) prompts.push(`Place ${quote(goal)} next to ${quote(happened)}. At what moment did these first start to differ?`);
  if (context) prompts.push(`You noted ${quote(context)}. Who knew this at the time, and who did not?`);
  if (environment) prompts.push(`You mentioned ${quote(environment)}. Would the outcome likely have been different under ordinary conditions? What would tell you?`);
  if (useful) prompts.push(`You said a useful result would be ${quote(useful)}. What is one observable sign that you would recognize that result?`);
  if (goal && useful) prompts.push('Compare your original goal with the useful result you described. Are they the same outcome, or has the goal itself shifted?');
  prompts.push(...scenario.questions);
  if (!goal) gaps.push('The intended result was not described, so what success meant remains unknown.');
  if (!happened) gaps.push('What actually happened was not described, so the outcome remains unknown.');
  if (!context) gaps.push('No context was provided. Information or assumptions that influenced the outcome remain unknown.');
  if (!environment) gaps.push('No surrounding conditions were provided. Their effect remains unknown.');
  if (!useful) gaps.push('A useful result was not described, so it is unclear what “better” would look like.');
  return { prompts, gaps };
}

function Pillar({ title, name, meaning, value, tone }) {
  return <article className={`pillar pillar-${tone}`}>
    <span className="eyebrow">{name}</span>
    <h3>{title}</h3>
    <p className="pillar-meaning">{meaning}</p>
    {clean(value) ? <blockquote>{clean(value)}</blockquote> : <p className="unknown">Unknown — not provided.</p>}
  </article>;
}

export default function Explorer({ navigate }) {
  const [scenarioId, setScenarioId] = useState(null);
  const [entry, setEntry] = useState(empty);
  const [showResults, setShowResults] = useState(false);
  const [exampleLoaded, setExampleLoaded] = useState(false);
  const scenario = scenarios.find(item => item.id === scenarioId);
  const formHeading = useRef(null);
  const resultsHeading = useRef(null);
  const startHeading = useRef(null);
  const [focusRequest, setFocusRequest] = useState(null);

  useEffect(() => { focusRequest?.target.current?.focus(); }, [focusRequest]);
  const focusOn = target => setFocusRequest({ target });

  const choose = id => { setScenarioId(id); setShowResults(false); setExampleLoaded(false); focusOn(formHeading); };
  const showExample = () => { setScenarioId('customers'); setEntry(scenarios[0].example); setExampleLoaded(true); setShowResults(false); focusOn(formHeading); };
  const update = (key, value) => setEntry(current => ({ ...current, [key]: value }));
  const hasEnough = clean(entry.goal) || clean(entry.happened);
  const submit = event => { event.preventDefault(); if (!hasEnough) return; setShowResults(true); focusOn(resultsHeading); };
  const reset = () => { setScenarioId(null); setEntry(empty); setExampleLoaded(false); setShowResults(false); focusOn(startHeading); };
  const editAgain = () => { setShowResults(false); focusOn(formHeading); };
  const result = scenario && showResults ? examine(scenario, entry) : null;

  return <div className="explorer">
    <header className="explorer-hero">
      <span className="kicker">SMB Owner Explorer</span>
      <h1>Where does your business lose alignment?</h1>
      <p>The problem isn’t always that something went wrong. Sometimes everything worked, just toward the wrong outcome.</p>
      <p>Misalignment can show up between owners and employees, businesses and customers, people and processes, or people and AI.</p>
      <p>The Misalignment Explorer gives you a structured way to examine the gap without pretending to know things the evidence can’t tell us.</p>
      {!scenario && <div className="explorer-actions">
        <button type="button" className="button" onClick={showExample}>Show me how<span aria-hidden="true">→</span></button>
        <button type="button" className="button-outline" onClick={() => focusOn(startHeading)}>Explore my own situation</button>
      </div>}
      <ul className="explorer-promises" aria-label="How this explorer works">
        <li>No account needed</li>
        <li>Stays in this browser tab</li>
        <li>Nothing is sent to Misalignment Platform</li>
      </ul>
    </header>

    <section className="explorer-step" aria-labelledby="explorer-start">
      <h2 id="explorer-start" ref={startHeading} tabIndex={-1}><span className="step-number">1</span>Pick a starting point</h2>
      <div className="scenario-grid">
        {scenarios.map(item => <button key={item.id} type="button" className={`scenario-card tone-${item.tone}`} aria-pressed={scenarioId === item.id} onClick={() => choose(item.id)}>
          <span className="scenario-icon" aria-hidden="true">{item.icon}</span>
          <strong>{item.label}</strong>
          <span>“{item.quote}”</span>
          <span>{item.description}</span>
        </button>)}
      </div>
    </section>

    {scenario && !showResults && <section className={`explorer-step tone-${scenario.tone}`} aria-labelledby="explorer-describe">
      <h2 id="explorer-describe" ref={formHeading} tabIndex={-1}><span className="step-number">2</span>Describe what happened</h2>
      <p className="step-help">Looking at {scenario.lens}. Write in your own words, or start from an example and edit it.</p>
      {exampleLoaded && <p className="step-help" role="status">Example answers loaded. Edit them or organize them to see how the walkthrough works.</p>}
      <div className="explorer-actions">
        <button type="button" className="button-outline" onClick={() => { setEntry(scenario.example); setExampleLoaded(true); }}>Fill in an example</button>
        <button type="button" className="button-outline" onClick={() => { setEntry(empty); setExampleLoaded(false); }}>Clear answers</button>
      </div>
      <form className="explorer-form" onSubmit={submit}>
        {fields.map(([key, label, hint]) => <label key={key} className="explorer-field">
          <span>{label}</span>
          <small id={`hint-${key}`}>{hint}</small>
          <textarea rows={3} maxLength={800} value={entry[key]} aria-describedby={`hint-${key}`} onChange={event => update(key, event.target.value)}/>
        </label>)}
        <p className="local-note">Your answers stay in this browser tab. This exploratory demo does not submit the entered scenario to Misalignment Platform, and answers are cleared when you reset or leave the page.</p>
        <div className="explorer-actions">
          <button type="submit" className="button" disabled={!hasEnough}>Organize my answers<span aria-hidden="true">→</span></button>
          {!hasEnough && <span className="step-help">Describe the goal or what happened to continue.</span>}
        </div>
      </form>
    </section>}

    {result && <section className="explorer-step explorer-results" aria-labelledby="explorer-results">
      <h2 id="explorer-results" ref={resultsHeading} tabIndex={-1}><span className="step-number">3</span>Let’s look at where the gap might be.</h2>
      <p className="boundary" role="note"><strong>This is an exploratory walkthrough, not an automated diagnosis.</strong> Your words are sorted into four pillars and paired with questions. Nothing was scored or analyzed by Conscio or any other engine, and nothing was sent anywhere.</p>
      <div className="pillar-grid">
        <Pillar name="Intent" title="What you intended" meaning="What were you actually trying to make happen?" value={entry.goal} tone="coral"/>
        <Pillar name="Behavior" title="What happened" meaning="What can we establish about the result?" value={entry.happened} tone="amber"/>
        <Pillar name="Context" title="What people knew" meaning="What information, assumptions, or expectations were different?" value={entry.context} tone="blue"/>
        <Pillar name="Environment" title="What was happening around it" meaning="What pressures, systems, timing, incentives, or circumstances may have mattered?" value={entry.environment} tone="violet"/>
      </div>
      {clean(entry.useful) && <div className="useful-result"><span className="eyebrow">What a useful result looks like</span><p>{clean(entry.useful)}</p></div>}
      <div className="examine">
        <h3>Questions to explore</h3>
        <ol>{result.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ol>
        <h4>What we still don’t know</h4>
        <p>Instead of filling in the blanks, we’ll keep important unknowns visible.</p>
        {result.gaps.length > 0
          ? <ul>{result.gaps.map(gap => <li key={gap}>{gap}</li>)}</ul>
          : <p>You provided an answer for each area. Other details may still be unknown.</p>}
      </div>
      <div className="explorer-actions">
        <button type="button" className="button-outline" onClick={editAgain}>Edit my answers</button>
        <button type="button" className="button" onClick={reset}>Try another scenario<span aria-hidden="true">↺</span></button>
      </div>
    </section>}

    <section className="beta-bridge" aria-labelledby="beta-heading">
      <h2 id="beta-heading">Does your business have problems like this?</h2>
      <p>We’re building Misalignment Platform around real situations, not imaginary use cases.</p>
      <p>If communication gaps, process drift, lost context, AI mistakes, or “how the hell did we end up here?” moments are familiar, we’d like your input.</p>
      <a className="button" href="#/early-access" onClick={event => { if (navigate) { event.preventDefault(); navigate('/early-access'); } }}>Help shape the beta<span aria-hidden="true">→</span></a>
      <p>No sales pitch required. When signup opens, tell us what actually goes wrong, what you’ve already tried, and what a useful solution would need to do.</p>
      <p>Beta signup is coming soon; this page does not collect or submit your answers.</p>
    </section>
  </div>;
}
