function solution(s) {
  const answer = [];
  const make = (count, str) => (count > 1 ? `${count}${str}` : str);

  for (let compress = 1; compress <= Math.ceil(s.length / 2); compress++) {
    const regex = new RegExp(`\\w{${compress}}`, 'gi');
    const match = s.match(regex);
    const extra = s.slice(match.reduce((len, str) => len + str.length, 0));

    let compressed = '';
    let prev = match[0];
    let count = 0;
    for (let i = 0; i < match.length; i++) {
      const current = match[i];
      if (prev === current) {
        count++;
        continue;
      }
      compressed += make(count, prev);
      prev = current;
      count = 1;
    }

    const result = compressed + make(count, prev) + extra;
    answer.push(result);
  }

  return Math.min(...answer.map((str) => str.length));
}
