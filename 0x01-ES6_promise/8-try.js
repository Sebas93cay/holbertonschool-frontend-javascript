export default function divideFunction(numerator, denominator) {
  let r;
  try {
    if (denominator === 0) throw new Error('cannot divide by 0');
    r = numerator / denominator;
  } catch (e) {
    throw e;
  }
  return r;
}
