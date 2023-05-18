function solution(keymap, targets) {
  const answer = [];
  targets.forEach((target) => {
    let sum = 0;

    // 1. 문자열의 문자 하나 하나에 접근
    for (let i = 0; i < target.length; i++) {
      const char = target[i];
      let min = undefined;

      // 2. keymap을 순환하며 해당 문자를 가지고 있는지 확인
      keymap.forEach((key) => {
        if (key.includes(char)) {
          const count = key.indexOf(char) + 1;
          min = min || count;
          min = min > count ? count : min;
        }
      });

      // 2-1) keymap에 문자가 없다면: 바로 종료 후 -1 반환
      if (min === undefined) {
        sum = -1;
        break;
      }
      // 2-2) keymap에 문자가 있다면: 클릭 횟수를 구한 후, 최소 클릭 횟수를 저장
      sum += min;
    }

    // 3) 문자열 완성을 위한 최소 클릭 횟수를 저장하여 반환한다.
    answer.push(sum);
  });

  return answer;
}
