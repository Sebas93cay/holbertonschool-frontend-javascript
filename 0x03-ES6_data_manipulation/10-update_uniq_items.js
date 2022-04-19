export default function updateUniqueItems(map) {
  if (map.constructor.name !== 'Map') throw new Error('Cannot process');
  [...map.entries()].forEach(([key, value]) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
