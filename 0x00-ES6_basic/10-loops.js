export default function appendToEachArrayValue(array, appendString) {
  const a = [...array];
  for (const item of array) {
    a[array.indexOf(item)] = appendString + item;
  }
  return a;
}
