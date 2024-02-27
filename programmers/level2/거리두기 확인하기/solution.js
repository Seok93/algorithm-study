function solution(places) {
  const DIRECTION = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const isValidPosition = (place, pos, dist, visited) => {
    let queue = [pos];
    while (dist < 2 && queue.length > 0) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [tr, tc] = queue.pop();
        for (let j = 0; j < DIRECTION.length; j++) {
          const [dr, dc] = DIRECTION[j];
          const [nr, nc] = [tr + dr, tc + dc];

          if (
            nr < 0 ||
            nr > 4 ||
            nc < 0 ||
            nc > 4 ||
            visited[nr][nc] === 1 ||
            place[nr][nc] === 'X'
          )
            continue;

          if (place[nr][nc] === 'P') return false;
          visited[nr][nc] = 1;
          queue.unshift([nr, nc]);
        }
      }
      dist += 1;
    }
    return true;
  };

  return places.map((place, index) => {
    for (let row = 0; row < place.length; row++) {
      for (let col = 0; col < place[row].length; col++) {
        const target = place[row][col];

        if (target !== 'P') continue;

        const pos = [row, col];
        const visited = place.map((line) => line.split('').map(() => 0));
        visited[row][col] = 1;

        const result = isValidPosition(place, pos, 0, visited);
        if (result === false) return 0;
      }
    }
    return 1;
  });
}
