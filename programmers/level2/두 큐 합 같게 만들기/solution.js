function solution(queue1, queue2) {
  const getTotalValue = (queue) => queue.reduce((sum, v) => sum + v, 0);

  let sum1 = getTotalValue(queue1);
  let sum2 = getTotalValue(queue2);
  if (sum1 === sum2) return 0;

  const total = sum1 + sum2;
  if (total % 2 !== 0) return -1;

  const target = total / 2;
  const round = (queue1.length + queue2.length) * 2;

  let lPointer = 0;
  let rPointer = queue1.length;
  const q = [...queue1, ...queue2];
  for (let i = 0; i < round; i++) {
    if (target === sum1) return i;
    sum1 = sum1 > target ? sum1 - q[lPointer++ % q.length] : sum1 + q[rPointer++ % q.length];
  }
  return -1;
}
