function solution(n, computers) {
  let answer = 0;

  const findConnectedComputer = (start) => {
    const next = [start];
    while (next.length) {
      const size = next.length;
      for (let i = 0; i < size; i++) {
        const [start, end] = next.shift();
        computers[start][end] = 0;
        computers[end][start] = 0;

        for (let j = 0; j < n; j++) {
          if (computers[end][j] === 1) {
            next.push([end, j]);
          }
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        findConnectedComputer([i, j]);
        answer += 1;
      }
    }
  }

  return answer;
}
