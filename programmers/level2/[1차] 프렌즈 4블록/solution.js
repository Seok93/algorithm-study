function solution(m, n, board) {
  const BLOCK_LIST = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];

  let nboard = Array.from({ length: board[0].length }, () => Array(board.length).fill(''));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      nboard[j][i] = board[i][j];
    }
  }

  let count = 0;
  while (true) {
    const remove = new Set();
    for (let row = 0; row < nboard.length - 1; row++) {
      for (let col = 0; col < nboard[0].length - 1; col++) {
        const block = nboard[row][col];
        if (block === '-') continue;

        const store = [];
        for (let i = [0]; i < BLOCK_LIST.length; i++) {
          const [mr, mc] = BLOCK_LIST[i];
          const [nr, nc] = [row + mr, col + mc];

          const target = nboard[nr][nc];
          if (block !== target) break;
          store.push([nr, nc]);
        }
        if (store.length === 4) store.forEach((pos) => remove.add(pos.join(':')));
      }
    }

    if (remove.size === 0) break;

    count += remove.size;
    for (const pos of remove) {
      const [row, col] = pos.split(':');
      nboard[row][col] = '-';
    }

    nboard = nboard.map((row) => {
      const MAX_ROW = row.length;
      return row.join('').replaceAll('-', '').padStart(MAX_ROW, '-').split('');
    });
  }

  return count;
}
