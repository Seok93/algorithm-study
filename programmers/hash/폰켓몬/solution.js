function solution(nums) {
  let answer = 0;
  const max = Math.floor(nums.length / 2);
  const map = new Map();

  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  return (answer = map.size > max ? max : map.size);
}
