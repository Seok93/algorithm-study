function solution(n, words) {
  const spoken = [];
  let result = [0, 0];
  let order = 1;
  let round = 1;

  for (let i = 0; i < words.length; i++) {
    const prev = words[i - 1];
    const cur = words[i];

    if (spoken.includes(cur) || (prev && prev[prev.length - 1] !== cur[0])) {
      result = [order, round];
      break;
    }
    spoken.push(cur);
    order = (order % n) + 1;
    round = Math.floor((i + 1) / n) + 1;
  }

  return result;
}
