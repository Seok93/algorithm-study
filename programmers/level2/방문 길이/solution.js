function solution(dirs) {
  // 상하좌우 이동 좌표
  const DIRECTION = Object.freeze({ U: [1, 0], D: [-1, 0], L: [0, -1], R: [0, 1] });

  // 역방향 반환 함수
  const findReverse = (direction) => {
    switch (direction) {
      case 'U':
        return 'D';
      case 'D':
        return 'U';
      case 'R':
        return 'L';
      case 'L':
        return 'R';
    }
  };

  // 방향별 방문 여부 확인
  const visited = Array.from({ length: 11 }, () =>
    Array.from({ length: 11 }, () => ({ L: 0, R: 0, U: 0, D: 0 }))
  );

  let count = 0;
  let cur = [5, 5];
  [...dirs].forEach((command) => {
    const [cr, cc] = cur;
    const [mr, mc] = DIRECTION[command];
    const [nr, nc] = [cr + mr, cc + mc];
    const reverse = findReverse(command);

    // 범위를 벗어나는가 확인
    if (0 > nr || nr >= 11 || 0 > nc || nc >= 11) return;

    // 이전에 방문했는가 확인
    if (visited[nr][nc][command] === 0) {
      visited[nr][nc][command] = 1;
      visited[cr][cc][reverse] = 1;
      count++;
    }
    cur = [nr, nc];
  });

  return count;
}
