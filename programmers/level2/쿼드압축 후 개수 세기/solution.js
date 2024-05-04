function solution(arr) {
  const answer = [0, 0];
  const quadCompact = (row, col, len) => {
    const value = arr[row][col];

    if (len === 1) return (answer[value] += 1);

    const numbers = [];
    for (let i = row; i < row + len; i++) {
      for (let j = col; j < col + len; j++) {
        numbers.push(arr[i][j]);
      }
    }

    if (numbers.every((v) => v === value)) return (answer[value] += 1);

    const half = len / 2;
    quadCompact(row, col, half);
    quadCompact(row, col + half, half);
    quadCompact(row + half, col, half);
    quadCompact(row + half, col + half, half);
  };
  quadCompact(0, 0, arr.length);

  return answer;
}
