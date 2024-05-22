function solution(maps) {
  const answer = [];
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const rMaxLen = maps.length;
  const cMaxLen = maps[0].length;
  const visited = Array.from({ length: rMaxLen }, (_, i) => Array(cMaxLen).fill(0));

  const findLand = (r, c) => {
    let days = parseInt(maps[r][c]);
    visited[r][c] = 1;
    for (let i = 0; i < direction.length; i++) {
      const [dr, dc] = direction[i];
      const [nr, nc] = [r + dr, c + dc];

      if (
        0 <= nr &&
        nr < rMaxLen &&
        0 <= nc &&
        nc < cMaxLen &&
        maps[nr][nc] !== 'X' &&
        !visited[nr][nc]
      ) {
        days += findLand(nr, nc);
      }
    }
    return days;
  };

  for (let row = 0; row < rMaxLen; row++) {
    for (let col = 0; col < cMaxLen; col++) {
      if (visited[row][col] || maps[row][col] === 'X') continue;
      const days = findLand(row, col);
      answer.push(days);
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
