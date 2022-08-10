function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) {
    let count = 0;

    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) break;
      count += 1;
    }

    if (count > 0) {
      answer.push(count);
      for (let i = 0; i < count; i++) {
        progresses.shift();
        speeds.shift();
      }
    }
  }

  return answer;
}
