function solution(prices) {
  const answer = Array(prices.length).fill(0);

  const stack = [];
  prices.forEach((curPrice, curTime) => {
    while (stack.length) {
      const [prevPrice, prevTime] = stack[stack.length - 1];
      if (prevPrice <= curPrice) break;
      answer[prevTime] = curTime - prevTime;
      stack.pop();
    }
    stack.push([curPrice, curTime]);
  });

  const totalTime = prices.length - 1;
  while (stack.length) {
    const [_, time] = stack.pop();
    answer[time] = totalTime - time;
  }

  return answer;
}
