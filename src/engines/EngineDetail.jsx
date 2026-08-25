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
      <span className="kicker">{data.version}</span>
      <h1>{title} Engine</h1>
      <p>{data.description}</p>
    </header>
    {name === 'conscio' && <Card title="Awareness extraction"><ConfidenceMeter value={data.awareness_states.reduce((sum, item) => sum + item.confidence, 0) / data.awareness_states.length * 100}/><RuleList>{data.awareness_states.map(item => <DoctrineRule key={item.type} id={item.type} title={item.value}>{Math.round(item.confidence * 100)}% confidence</DoctrineRule>)}</RuleList><CodeBlock language="json">{JSON.stringify(data.metadata, null, 2)}</CodeBlock></Card>}
    {name === 'misalignment' && <Card title="Drift and severity scoring"><MisalignmentScore score={Math.round(data.score * 100)} delta="mock"/><SeverityBadge level={data.severity}/><AlignmentRadar data={Object.values(data.radar).map(value => Math.round((1 - value) * 100))}/><BankGrid items={data.dimensions.map(item => ({ key: item.name, value: item.value, note: 'normalized signal' }))}/></Card>}
    {name === 'v12' && <><BankPanel title="Reasoning banks"><BankGrid items={data.banks.map(bank => ({ key: `BANK ${bank.id}`, value: bank.score, note: bank.label }))}/></BankPanel><Card title="Detected conflicts"><ConflictMap items={data.conflicts.map(conflict => ({ left: `Bank ${conflict.between[0]}`, right: `Bank ${conflict.between[1]}`, level: 'medium' }))}/>{data.conflicts.map(conflict => <p key={conflict.description}>{conflict.description}</p>)}</Card></>}
    {name === 'doctrine' && <Card title={`Baseline ${data.baseline.version}`}><p>Verdict: <SeverityBadge level="low"/><strong>{data.verdict}</strong></p><RuleList>{data.rules.map(rule => <DoctrineRule key={rule.id} id={rule.id} title={rule.description}><SeverityBadge level={rule.severity}/></DoctrineRule>)}</RuleList><p className="eyebrow">Ledger chain: {data.ledger_chain_id}</p></Card>}
    {name === 'ata' && <Card title="Adaptive training cycles"><BankGrid items={data.cycles.map(cycle => ({ key: `CYCLE ${cycle.cycle}`, value: `+${cycle.delta}`, note: cycle.notes }))}/><RuleList>{data.practitioner_levels.map(level => <DoctrineRule key={level.level} id={`L${level.level}`} title={level.label}>Practitioner level</DoctrineRule>)}</RuleList></Card>}
    {name === 'rephrase' && <Card title="Expressive intelligence"><div className="split"><BankGrid items={[{ key: 'ADVERSARIAL RISK', value: data.adversarial_risk_score, note: 'normalized score' }, { key: 'TONE DRIFT', value: data.tone_drift_score, note: 'expressive drift' }, { key: 'ALIGNMENT', value: data.expressive_alignment_score, note: 'expressive stability' }]}/><div className="notice"><span className="eyebrow">Normalized input</span><p>{data.normalized_input}</p><p>Correction level: <strong>{data.correction_level}</strong></p><p className="positive">Intent preserved: {String(data.signals.intent_preserved)}</p></div></div><RuleList>{data.manipulation_indicators.length ? data.manipulation_indicators.map(item => <DoctrineRule key={item} id="RISK" title={item}>Manipulation indicator</DoctrineRule>) : <DoctrineRule id="CLEAR" title="No manipulation indicators">Input passed expressive risk screening.</DoctrineRule>}</RuleList></Card>}
    {name === 'gateway' && <Card title="Full alignment pipeline"><BankGrid items={Object.entries(data.pipeline).map(([key, value]) => ({ key, value, note: 'version' }))}/><div className="notice"><strong>{data.final_packet.status}</strong> — {data.final_packet.summary}<br/>Packet: {data.final_packet.packet_id}</div></Card>}
  </section>;
}
