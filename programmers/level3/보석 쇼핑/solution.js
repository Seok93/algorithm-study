function solution(gems) {
  const gemSet = new Set(gems);
  const gemMap = new Map();

  let result = [1, gems.length];
  gems.forEach((gem, idx) => {
    gemMap.delete(gem);
    gemMap.set(gem, idx);
    if (gemMap.size === gemSet.size) {
      const candidate = [gemMap.values().next().value + 1, idx + 1];
      result = result[1] - result[0] > candidate[1] - candidate[0] ? candidate : result;
    }
  });
  return result;
}
