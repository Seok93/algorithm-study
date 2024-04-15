function solution(files) {
  return files
    .map((file, idx) => {
      const regex = /^([a-zA-Z-. ]+)(\d+)(.*)/i;
      const [origin, head, number, tail] = file.match(regex);
      return { origin, head: head.toLowerCase(), number: Number(number), idx };
    })
    .sort((a, b) => {
      const { head: aHead, number: aNumber, idx: aIdx } = a;
      const { head: bHead, number: bNumber, idx: bIdx } = b;
      if (aHead !== bHead) return aHead > bHead ? 1 : -1;
      if (aNumber !== bNumber) return aNumber - bNumber;
      return aIdx - bIdx;
    })
    .map((f) => f.origin);
}
