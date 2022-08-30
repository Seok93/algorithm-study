function solution(array, commands) {
  const answer = [];

  commands.forEach((command) => {
    const [start, end, idx] = command;
    const newAry = array.slice(start - 1, end).sort((a, b) => a - b);
    answer.push(newAry[idx - 1]);
  });

  return answer;
}
