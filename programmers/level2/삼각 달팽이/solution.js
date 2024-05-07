function solution(n) {
  const DIRECTION_OPTION = Object.freeze({ DOWN: 0, FLAT: 1, UP: 2 });

  const result = Array.from({ length: n }, (_, idx) => {
    return { store: Array(idx + 1).fill(0), left: 0, right: idx };
  });

  let direction = DIRECTION_OPTION.DOWN;
  let maxMove = n;
  let move = 0;
  let index = -1;
  let num = 1;
  while (maxMove > 0) {
    if (direction === DIRECTION_OPTION.DOWN) {
      index++;
      const target = result[index];
      target.store[target.left++] = num;
    } else if (direction === DIRECTION_OPTION.FLAT) {
      const target = result[index];
      target.store[target.left++] = num;
    } else {
      index--;
      const target = result[index];
      target.store[target.right--] = num;
    }
    num++;
    move++;

    if (maxMove === move) {
      direction = (direction + 1) % Object.keys(DIRECTION_OPTION).length;
      maxMove--;
      move = 0;
    }
  }

  return result.map((row) => row.store).flat();
}
