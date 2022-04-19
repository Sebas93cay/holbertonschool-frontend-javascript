export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';
  const strings = [...set].filter((item) => item.startsWith(startString));
  const cutStrings = strings.map((item) => item.replace(startString, ''));
  return cutStrings.join('-');
}
