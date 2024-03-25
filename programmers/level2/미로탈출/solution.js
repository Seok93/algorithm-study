function solution(maps) {
  const DIRECTION = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const MAX_ROW = maps.length;
  const MAX_COL = maps[0].length;

  const signs = {};
  const visited = [];
  for (let row = 0; row < MAX_ROW; row++) {
    visited.push([]);
    for (let col = 0; col < MAX_COL; col++) {
      const sign = maps[row][col];

      if (sign === 'X') visited[row][col] = 1;
      else visited[row][col] = 0;

      if (sign === 'S' || sign === 'E' || sign === 'L') signs[sign] = [row, col];
    }
  }

  function bfs(start, end, v) {
    const [sr, sc] = start;
    const [er, ec] = end;
    const visited = v.map((r) => [...r]);
    visited[sr][sc] = 1;

    let time = 0;
    const queue = [start];
    while (queue.length) {
      time++;
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [r, c] = queue.shift();

        for (let j = 0; j < DIRECTION.length; j++) {
          const [dr, dc] = DIRECTION[j];
          const [nr, nc] = [r + dr, c + dc];

          if (nr < 0 || nr >= MAX_ROW || nc < 0 || nc >= MAX_COL || visited[nr][nc] === 1) continue;

          if (er === nr && ec === nc) return time;
          visited[nr][nc] = 1;
          queue.push([nr, nc]);
        }
      }
    }
    return -1;
  }

  const START_TO_LEVER = bfs(signs.S, signs.L, visited);
  if (START_TO_LEVER === -1) return -1;

  const LEVER_TO_END = bfs(signs.L, signs.E, visited);
  if (LEVER_TO_END === -1) return -1;

  return START_TO_LEVER + LEVER_TO_END;
}
