function solution(priorities, location) {
  let answer = 0;

  const queue = priorities.map((priority, location) => ({ priority, location }));

  while (queue.length > 0) {
    const target = queue.shift();
    const hasHighPriority = queue.some((item) => item.priority > target.priority);

    if (hasHighPriority) {
      queue.push(target);
    } else {
      answer += 1;
      if (target.location === location) break;
    }
  }
  return answer;
}
