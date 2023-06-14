function solution(board, moves) {
  let answer = 0;
  const boardMap = [];
  const stack = [];

  for (let i = 0; i < board[0].length; i++) {
    boardMap.push([]);
  }

  board.forEach((row) => {
    row.forEach((model, index) => {
      model !== 0 && boardMap[index].unshift(model);
    });
  });

  for (const move of moves) {
    const model = boardMap[move - 1].pop();
    if (!model) continue;

    const peek = stack[stack.length - 1];
    if (peek === model) {
      stack.pop();
      answer += 2;
    } else {
      stack.push(model);
    }
  }

  return answer;
}
