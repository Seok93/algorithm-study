function strToSet(str) {
  const set = [];
  for (let i = 0; i < str.length - 1; i++) {
    const regex = /^[a-zA-Z]+$/;
    const target = str.slice(i, i + 2);
    if (regex.test(target)) set.push(target.toLowerCase());
  }
  return set;
}

function solution(str1, str2) {
  const set1 = strToSet(str1);
  const set2 = strToSet(str2);
  const map1 = new Map();
  const map2 = new Map();

  if (set1.length === 0 && set2.length === 0) return 65536;

  set1.forEach((str) => map1.set(str, (map1.get(str) || 0) + 1));
  set2.forEach((str) => map2.set(str, (map2.get(str) || 0) + 1));

  let common = 0;
  let total = 0;
  for (const [key, value] of map1) {
    const value2 = map2.has(key) ? map2.get(key) : 0;
    common += Math.min(...[value, value2]);
  }
  total = set1.length + set2.length - common;

  return Math.floor((common / total) * 65536);
}
