export default function guardrail(fun) {
  const queue = [];
  try {
    const r = fun();
    queue.push(r);
  } catch (e) {
    queue.push('Error: ' + e.message);
  }
  queue.push('Guardrail was processed');
  return queue;
}
