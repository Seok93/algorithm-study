function solution(land) {
  const COLUMN_LENGTH = 4;

  const sum = land.reduce((acc, cur) => {
    return cur.map((value, curIdx) => {
      const filtered = acc.filter((_, accIdx) => curIdx !== accIdx);
      const max = Math.max(...filtered);
      return value + max;
    });
  }, Array(COLUMN_LENGTH).fill(0));

  return Math.max(...sum);
}
