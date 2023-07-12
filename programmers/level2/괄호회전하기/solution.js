function solution(s) {
  let answer = 0;
  let copy = [...s];

  for (let i = 0; i < s.length; i++) {
    const regex = /\[\]|\(\)|\{\}/;
    const stack = [];
    for (const char of copy) {
      stack.push(char);
      if (regex.test(stack.slice(-2).join(''))) {
        stack.splice(-2);
      }
    }
    if (stack.length === 0) answer++;
    copy.push(copy.shift());
  }

  return answer;
}
