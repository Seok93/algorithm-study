function solution(order) {
  const main = Array.from({ length: order.length }, (_, i) => i + 1).sort((a, b) => b - a);
  const sub = [];

  let count = 0;
  let now = main[main.length - 1];
  for (const num of order) {
    if (num < now) {
      const prev = sub.pop();
      if (num !== prev) break;
      count++;
      continue;
    }

    while (main.length && main[main.length - 1] !== num) {
      sub.push(main.pop());
    }
    main.pop();
    now = main[main.length - 1];
    count++;
  }

  return count;
}
