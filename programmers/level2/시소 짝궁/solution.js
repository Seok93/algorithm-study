function solution(weights) {
  let answer = 0;

  const wMap = new Map();
  weights.forEach((w) => wMap.set(w, (wMap.get(w) || 0) + 1));

  const wSet = [...wMap.keys()];
  wSet.sort();

  const ratios = [1, 4 / 3, 3 / 2, 2];
  wSet.forEach((weight) => {
    for (const ratio of ratios) {
      const target = weight * ratio;
      if (!Number.isInteger(target)) continue;

      const count1 = wMap.get(weight);
      const count2 = wMap.get(target);
      if (weight === target) {
        answer += (count1 * (count1 - 1)) / 2;
      } else {
        if (count2) answer += count1 * count2;
      }
    }
  });

  return answer;
}
