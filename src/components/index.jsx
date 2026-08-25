import React, { useState } from 'react';
export function InputPanel({label='Input', value, onChange, placeholder, children}) { return <label className="input-panel"><span>{label}</span>{children||<textarea value={value} onChange={e=>onChange?.(e.target.value)} placeholder={placeholder} rows={5}/>}</label>; }
export function ProcessButton({children='Run analysis', onClick, disabled=false}) { return <button className="button" onClick={onClick} disabled={disabled}>{children}<span>→</span></button>; }
export function OutputCard({title, eyebrow, children, accent='mint'}) { return <article className={'output-card accent-'+accent}>{eyebrow&&<span className="eyebrow">{eyebrow}</span>}<h3>{title}</h3><div>{children}</div></article>; }
export function ScoreBadge({score, label='Alignment score'}) { return <span className="score-badge"><strong>{score}</strong><small>{label}</small></span>; }
export function StepIndicator({steps, current=0}) { return <ol className="step-indicator">{steps.map((s,i)=><li key={s} className={i===current?'current':i<current?'done':''}><span>{i<current?'✓':i+1}</span>{s}</li>)}</ol>; }
export function Tabs({items, active, onChange}) { return <div className="tabs" role="tablist">{items.map(item=><button key={item} role="tab" aria-selected={active===item} className={active===item?'active':''} onClick={()=>onChange(item)}>{item}</button>)}</div>; }
export function Tab({children, active, onClick}) { return <button role="tab" className={active?'active':''} onClick={onClick}>{children}</button>; }
export function TabPanel({children, active}) { return active ? <div role="tabpanel" className="tab-panel">{children}</div> : null; }
export function Card({title, icon, children, className=''}) { return <article className={'card '+className}>{icon&&<div className="card-icon">{icon}</div>}{title&&<h3>{title}</h3>}<div>{children}</div></article>; }
export function CardGrid({children, className=''}) { return <div className={'card-grid '+className}>{children}</div>; }
export function EngineCard({name, code, description, status='Operational', onClick}) { return <article className={'engine-card engine-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-')} onClick={onClick} tabIndex={onClick?0:undefined}><span className="engine-scan"/><div className="engine-top"><span className="engine-code">{code}</span><span className="status-dot">● {status}</span></div><h3>{name}</h3><p>{description}</p><span className="text-link">Inspect engine →</span></article>; }
export function Reveal({children}) { return <div className="reveal">{children}</div>; }
export function Collapse({title, children, open=false}) { const [expanded,setExpanded]=useState(open); return <div className="collapse"><button onClick={()=>setExpanded(!expanded)} aria-expanded={expanded}><span>{title}</span><span>{expanded?'−':'+'}</span></button>{expanded&&<div className="collapse-content">{children}</div>}</div>; }
export function AnimatedSection({children, className=''}) { return <section className={'animated-section '+className}>{children}</section>; }
export function ConscioMascot({mood='calm'}) { return <div className={'mascot mascot-'+mood} aria-label={'Conscio is '+mood}><div className="mascot-eye"/><div className="mascot-eye"/><div className="mascot-core">✦</div></div>; }
export function MascotReaction({mood, children}) { return <div className="mascot-reaction"><ConscioMascot mood={mood}/><span>{children}</span></div>; }
export function MascotBubble({children}) { return <div className="mascot-bubble">{children}</div>; }
export function SeverityBadge({level='medium'}) { return <span className={'severity severity-'+level}>{level}</span>; }
export function ConfidenceMeter({value=82}) { return <div className="confidence"><div className="meter"><span style={{width:value+'%'}}/></div><span>{value}% confidence</span></div>; }
export function MisalignmentScore({score=72, delta='+4.2'}) { return <div className="misalignment-score"><div className="score-ring" style={{'--score':score}}><strong>{score}</strong><small>/100</small></div><div><span className="eyebrow">Misalignment index</span><p className="positive">{delta} from last observation</p></div></div>; }
export function BankPanel({title='Evidence bank', children}) { return <section className="bank-panel"><div className="panel-heading"><h3>{title}</h3><span className="live-label">● LIVE</span></div>{children}</section>; }
export function BankGrid({items=[]}) { return <div className="bank-grid">{items.map((x,i)=><div className="bank-item" key={i}><span className="bank-key">{x.key}</span><strong>{x.value}</strong><small>{x.note}</small></div>)}</div>; }
export function ConflictMap({items=[]}) { return <div className="conflict-map">{items.map((x,i)=><div className="conflict-row" key={i}><span>{x.left}</span><b>↔</b><span>{x.right}</span><SeverityBadge level={x.level}/></div>)}</div>; }
export function DoctrineRule({id, title, children}) { return <article className="doctrine-rule"><span className="rule-id">{id}</span><div><h4>{title}</h4><p>{children}</p></div></article>; }
export function RuleList({children}) { return <div className="rule-list">{children}</div>; }
export function RuleTrigger({children, onClick}) { return <button className="rule-trigger" onClick={onClick}>{children}<span>↗</span></button>; }
export function CodeBlock({children, language='json'}) { return <pre className="code-block"><code><span className="code-lang">{language}</span>{children}</code></pre>; }
export function ApiRequestPanel({method='POST', endpoint='/v1/observations', children}) { return <div className="api-panel"><div className="api-header"><span className="method">{method}</span><code>{endpoint}</code></div>{children||<CodeBlock language="json">{`{
  "subject": "support-agent",
  "trace_id": "tr_01H..."
}`}</CodeBlock>}</div>; }
export function ApiResponsePanel({status='200 OK', children}) { return <div className="api-panel response"><div className="api-header"><span className="method">{status}</span><span className="status-dot">● observed</span></div>{children||<CodeBlock language="json">{`{
  "alignment_score": 86,
  "confidence": 0.91,
  "provenance": "ev_7f2..."
}`}</CodeBlock>}</div>; }
export function ErrorBadge({children='No errors'}) { return <span className="error-badge">{children}</span>; }
export function Collapsible({title, children}) { return <Collapse title={title}>{children}</Collapse>; }
export function AlignmentRadar({data=[62,80,54,75,88,68]}) { return <div className="radar-wrap"><div className="radar"><span className="radar-label l1">Intent</span><span className="radar-label l2">Policy</span><span className="radar-label l3">Impact</span><span className="radar-label l4">Truth</span><span className="radar-label l5">Agency</span><span className="radar-label l6">Context</span><div className="radar-shape" style={{'--points':data.join(' ')}}/></div></div>; }
export function DomainTabs({domains, active, onChange}) { return <Tabs items={domains} active={active} onChange={onChange}/>; }
export function RadarSeverityOverlay({level='watch'}) { return <div className={'radar-overlay overlay-'+level}><span className="pulse"/> {level} severity envelope</div>; }
