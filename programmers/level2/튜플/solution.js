function solution(s) {
  let answer = [];

  const sArray = s
    .slice(2, -2)
    .split('},{')
    .map((e) => e.split(',').map((e) => Number(e)))
    .sort((a, b) => a.length - b.length);

  sArray.forEach((e) => {
    const copy = [...answer].sort();
    const target = e.sort();
    for (let i = 0; i < target.length; i++) {
      if (copy[i] !== target[i]) {
        answer.push(target[i]);
        break;
      }
    }
  });

  return answer;
}
