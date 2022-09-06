// 다시 풀어볼 것
// 3, 6, 7, 8, 10번 테스트 케이스 실패....
function factorization(number, store) {
  for (let i = 2; i < number; i++) {
    // 나누어지면 인수이다.
    if (number % i === 0) {
      number = number / i;
      store.push(i);
      factorization(number, store);
      return;
    }
  }

  // 나누어지지 않으면 소수 형태의 인수이다.
  if (number > 0) store.push(number);
}

function combination(numbers, frontGroupLength, store) {
  const backGroupLength = numbers.length - frontGroupLength;

  if (backGroupLength >= 0) {
    let frontGroup = numbers.slice(0, frontGroupLength);
    let backGroup = numbers.slice(frontGroupLength);
    console.log(frontGroup, backGroup);

    backGroup = backGroup.length !== 0 ? backGroup : [1];

    let frontNum = 1;
    frontGroup.forEach((number) => {
      frontNum *= number;
    });

    let lastNum = 1;
    backGroup.forEach((number) => {
      lastNum *= number;
    });

    store.add([frontNum, lastNum].sort((a, b) => b - a).map((data) => data + 2));
    combination(numbers, frontGroupLength + 1, store);
  }
}

function solution(brown, yellow) {
  var answer = [];
  const totalCell = brown + yellow;

  // 1. 소인수분해를 진행한다.
  const numbers = [];
  factorization(yellow, numbers);

  // 2. 소인수분해의 인수들을 조합 구하기
  const cases = new Set();
  combination(numbers, 1, cases);

  // 3. 조합 중 가로, 세로 높이에 합당한 경우 찾기
  for (let [width, height] of cases) {
    const tCell = width * height;
    if (totalCell === tCell) {
      return [width, height];
    }
  }
}
