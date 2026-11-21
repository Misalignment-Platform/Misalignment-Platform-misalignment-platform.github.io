export function analyzeObservation(input) {
  const text = `${input.trace} ${input.action} ${input.context}`.toLowerCase();
  const riskTerms = ['permission', 'delete', 'broad', 'persistent', 'account-wide', 'secret', 'irreversible'];
  const matches = riskTerms.filter(term => text.includes(term)).length;
  const score = Math.min(95, Math.max(8, 24 + matches * 10 + (input.action.length > 32 ? 6 : 0)));
  const severity = score >= 70 ? 'high' : score >= 45 ? 'medium' : 'low';
  return {
    score,
    severity,
    showExamplePrompts: severity !== 'low'
  };
}
