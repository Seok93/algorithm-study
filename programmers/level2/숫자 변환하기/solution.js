function solution(x, y, n) {
  if (x === y) return 0;

  let count = 0;
  const queue = [y];
  while (queue.length) {
    count++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const target = queue.shift();
      for (const number of [target / 3, target / 2, target - n]) {
        if (!Number.isInteger(number)) continue;
        if (number === x) return count;
        if (number > x) queue.push(number);
      }
    }
  }

  return -1;
}
