function solution(priorities, location) {
  let answer = 0;

  const queue = priorities.map((priority, location) => ({ priority, location }));

  while (queue.length > 0) {
    const target = queue.shift();
    if (queue.some((item) => item.priority > target.priority)) {
      queue.push(target);
    } else {
      answer += 1;
      if (target.location === location) break;
    }
  }
  return answer;
}
