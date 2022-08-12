function solution(s) {
  let answer = false;
  let queueCount = 0;

  // 1. 문자열의 길이가 짝수인가 확인
  if (s.length % 2 === 0) {
    for (let letter of s) {
      // 2. 괄호의 형태에 따라 enqueue, dequeue
      letter === '(' ? queueCount++ : queueCount--;

      // 3. 만약 음수가 나오면 ')'가 먼저 나오는 경우이니 false 출력
      if (queueCount < 0) break;
    }

    // 4. queue의 길이가 0인 경우 괄호가 짝을 이뤘음을 알 수 있음
    if (queueCount === 0) {
      answer = true;
    }
  }

  return answer;
}
