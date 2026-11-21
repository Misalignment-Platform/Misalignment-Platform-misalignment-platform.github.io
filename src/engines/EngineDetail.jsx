import React, { useEffect, useState } from 'react';
import { Card, CodeBlock, ConflictMap, DoctrineRule, RuleList, BankGrid, BankPanel, ConfidenceMeter, MisalignmentScore, SeverityBadge, AlignmentRadar } from '../components';
import { loadMock } from '../utils/loadMock';

function useEngineMock(name) {
  const [state, setState] = useState({ loading: true, data: null, error: null });
  useEffect(() => {
    let active = true;
    loadMock(name).then(data => active && setState({ loading: false, data, error: null }))
      .catch(error => active && setState({ loading: false, data: null, error: error.message }));
    return () => { active = false; };
  }, [name]);
  return state;
}

export function EngineDetail({ name }) {
  const { loading, data, error } = useEngineMock(name);
  if (loading) return <section className="section"><p className="eyebrow">Loading engine trace...</p></section>;
  if (error) return <section className="section"><p role="alert">{error}</p></section>;
  const title = data.engine;
  return <section className="section engine-detail">
    <header className="page-header">
      <span className="kicker">Local illustrative data · {data.version}</span>
      <h1>{title} sample</h1>
      <p>Mock description: {data.description}</p>
      <p>This page renders static sample data from this website. It is not a live engine result, validated assessment, or production capability.</p>
    </header>
    {name === 'conscio' && <Card title="Static awareness fixture"><ConfidenceMeter value={data.awareness_states.reduce((sum, item) => sum + item.confidence, 0) / data.awareness_states.length * 100}/><RuleList>{data.awareness_states.map(item => <DoctrineRule key={item.type} id={item.type} title={item.value}>Illustrative mock value: {Math.round(item.confidence * 100)}%</DoctrineRule>)}</RuleList><CodeBlock language="json">{JSON.stringify(data.metadata, null, 2)}</CodeBlock></Card>}
    {name === 'misalignment' && <Card title="Illustrative scoring fixture"><MisalignmentScore score={Math.round(data.score * 100)} label="Static mock value"/><SeverityBadge level={data.severity}/><AlignmentRadar data={Object.values(data.radar).map(value => Math.round((1 - value) * 100))}/><BankGrid items={data.dimensions.map(item => ({ key: item.name, value: item.value, note: 'mock field' }))}/></Card>}
    {name === 'v12' && <><BankPanel title="Static perspective labels"><BankGrid items={data.banks.map(bank => ({ key: `BANK ${bank.id}`, value: bank.score, note: bank.label }))}/></BankPanel><Card title="Example conflict entries"><ConflictMap items={data.conflicts.map(conflict => ({ left: `Bank ${conflict.between[0]}`, right: `Bank ${conflict.between[1]}`, level: 'medium' }))}/>{data.conflicts.map(conflict => <p key={conflict.description}>{conflict.description}</p>)}</Card></>}
    {name === 'doctrine' && <Card title={`Illustrative fixture ${data.baseline.version}`}><p>Example label: <SeverityBadge level="low"/><strong>{data.verdict}</strong></p><RuleList>{data.rules.map(rule => <DoctrineRule key={rule.id} id={rule.id} title={rule.description}><SeverityBadge level={rule.severity}/></DoctrineRule>)}</RuleList><p className="eyebrow">Sample identifier: {data.ledger_chain_id}</p></Card>}
    {name === 'ata' && <Card title="Adaptive training cycles"><BankGrid items={data.cycles.map(cycle => ({ key: `CYCLE ${cycle.cycle}`, value: `+${cycle.delta}`, note: cycle.notes }))}/><RuleList>{data.practitioner_levels.map(level => <DoctrineRule key={level.level} id={`L${level.level}`} title={level.label}>Practitioner level</DoctrineRule>)}</RuleList></Card>}
    {name === 'rephrase' && <Card title="Static rephrase fixture"><div className="split"><BankGrid items={[{ key: 'SAMPLE RISK FIELD', value: data.adversarial_risk_score, note: 'mock value' }, { key: 'SAMPLE TONE FIELD', value: data.tone_drift_score, note: 'mock value' }, { key: 'SAMPLE ALIGNMENT FIELD', value: data.expressive_alignment_score, note: 'mock value' }]}/><div className="notice"><span className="eyebrow">Illustrative text pair</span><p>{data.normalized_input}</p><p>Sample label: <strong>{data.correction_level}</strong></p><p className="positive">Mock flag: {String(data.signals.intent_preserved)}</p></div></div><RuleList>{data.manipulation_indicators.length ? data.manipulation_indicators.map(item => <DoctrineRule key={item} id="SAMPLE" title={item}>Static example label; no screening result.</DoctrineRule>) : <DoctrineRule id="SAMPLE" title="No example indicators">Fixture contains no indicator labels; no risk screening was performed.</DoctrineRule>}</RuleList></Card>}
    {['sentinel','omnitrax','ata-cont','codex'].includes(name) && <Card title="Sample signals"><BankGrid items={data.signals.map(signal => ({ key: signal.name, value: signal.value, note: 'local mock value' }))}/><p className="eyebrow">Illustrative values only; no live engine integration is represented.</p></Card>}
    {name === 'gateway' && <Card title="Illustrative pipeline fixture"><BankGrid items={Object.entries(data.pipeline).map(([key, value]) => ({ key, value, note: 'sample label' }))}/><div className="notice"><strong>Example status: {data.final_packet.status}</strong> — {data.final_packet.summary}<br/>Sample identifier: {data.final_packet.packet_id}</div></Card>}
  </section>;
}
