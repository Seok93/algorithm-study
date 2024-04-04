function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];
  numbers.forEach((number, idx) => {
    const node = [number, idx];
    while (stack.length) {
      const [pNum, pIdx] = stack.pop();
      if (number <= pNum) {
        stack.push([pNum, pIdx]);
        break;
      }
      answer[pIdx] = number;
    }
    stack.push(node);
  });

  return answer;
}
