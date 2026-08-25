export async function loadMock(name) {
  const response = await fetch(`./mock/engines/${name}.json`);
  if (!response.ok) throw new Error(`Unable to load ${name} engine mock`);
  return response.json();
}
