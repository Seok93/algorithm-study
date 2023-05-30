function solution(X, Y) {
  let pair = '';
  const x = new Map();
  const y = new Map();

  for (let i = 0; i < 10; i++) {
    x.set(`${i}`, 0);
    y.set(`${i}`, 0);
  }

  [...X].forEach((elem) => x.set(elem, x.get(elem) + 1));
  [...Y].forEach((elem) => y.set(elem, y.get(elem) + 1));

  x.forEach((xValue, key) => {
    const yValue = y.get(key);
    const count = xValue > yValue ? yValue : xValue;
    pair += key.repeat(count);
  });

  pair = pair.length > 0 ? [...pair].sort((a, b) => b - a).join('') : '-1';
  pair = /[1-9]/.test(pair) ? pair : '0';

  return pair;
}
