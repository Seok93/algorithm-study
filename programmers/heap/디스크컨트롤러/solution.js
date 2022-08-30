function solution(jobs) {
  const heap = [];

  let curTime = 0;
  let prevTime = -1;
  let finishedCnt = 0;
  let totalWorkTime = 0;

  while (jobs.length > finishedCnt) {
    // 현재 시간에 요청된 작업이 있는가?
    jobs.forEach(([requestTime, workTime]) => {
      if (requestTime > prevTime && requestTime <= curTime) {
        heap.push({ requestTime, workTime });
      }
    });

    // 요청된 작업이 있다면, 최소 작업량을 가진 작업 먼저 실행
    if (heap.length > 0) {
      heap.sort((a, b) => a.workTime - b.workTime);

      const target = heap.shift();
      const waitTime = curTime - target.requestTime;
      const workTime = target.workTime;

      prevTime = curTime;
      curTime += workTime;
      totalWorkTime += waitTime + workTime;
      finishedCnt++;
    } else {
      curTime += 1;
    }
  }

  return Math.floor(totalWorkTime / jobs.length);
}
