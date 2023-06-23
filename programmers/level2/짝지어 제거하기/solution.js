function solution(s) {
  let result = -1;
  const stack = [];

  [...s].forEach((c) => {
    if (stack[stack.length - 1] === c) stack.pop();
    else stack.push(c);
  });

  return stack.length === 0 ? 1 : 0;
}
