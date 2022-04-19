export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const times = weakMap.get(endpoint);
  if (!times) weakMap.set(endpoint, 1);
  else weakMap.set(endpoint, times + 1);
  if (times >= 5) throw new Error('Endpoint load is high');
}
