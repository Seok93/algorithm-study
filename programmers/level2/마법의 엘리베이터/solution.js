function solution(storey) {
  let count = 0;
  while (storey > 0) {
    const value = storey % 10;
    storey = (storey - value) / 10;

    if (value < 5) {
      count += value;
    } else if (value > 5) {
      storey += 1;
      count += 10 - value;
    } else {
      const next = storey % 10;
      if (next >= 5) {
        storey += 1;
        count += 10 - value;
      } else {
        count += value;
      }
    }
  }
  return count;
}
