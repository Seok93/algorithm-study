function solution(babbling) {
  let answer = 0;
  const BABY_LANGUAGE = ['aya', 'ye', 'woo', 'ma'];
  const MAX_LEN = Math.max(...BABY_LANGUAGE.map((elem) => elem.length));

  babbling.forEach((word) => {
    const queue = [];
    let lastWord = '';
    for (const c of word) {
      queue.push(c);
      if (queue.length > MAX_LEN) break;
      if (queue.join('') !== lastWord && BABY_LANGUAGE.includes(queue.join(''))) {
        lastWord = queue.slice().join('');
        queue.splice(0, queue.length);
      }
    }
    if (queue.length === 0) answer++;
  });

  return answer;
}
