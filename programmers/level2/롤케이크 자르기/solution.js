function solution(toppings) {
  let count = 0;

  // 1. 토핑별 개수 정리
  const toppingMap = new Map();
  toppings.forEach((topping) => {
    toppingMap.set(topping, (toppingMap.get(topping) || 0) + 1);
  });

  // 2. 각각의 구간 별로 롤케이크 구분해보기
  const store = new Set();
  while (toppings.length) {
    const t = toppings.pop();
    store.add(t);
    toppingMap.set(t, toppingMap.get(t) - 1);
    if (toppingMap.get(t) === 0) toppingMap.delete(t);
    if (store.size === toppingMap.size) count++;
  }

  return count;
}
