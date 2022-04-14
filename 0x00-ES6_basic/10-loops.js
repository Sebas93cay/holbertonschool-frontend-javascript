export default function appendToEachArrayValue(array, appendString) {
  const task = 3;
  console.log(task);
  for (const item of array) {
    array[array.indexOf(item)] = appendString + item;
  }
  return array;
}
