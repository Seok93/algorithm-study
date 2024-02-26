function solution(expression) {
  // 1. 숫자와 기호를 각각 분리하기
  const regex = /[0-9]+|[\+\-\*]/gi;
  const str = expression.match(regex);

  // 2. 연산자 우선순위 경우의 수 만들기
  const cases = [];
  const findAllCase = (alter, selected) => {
    if (alter.length === 0) {
      cases.push(selected);
      return;
    }

    for (let i = 0; i < alter.length; i++) {
      const [operator] = alter.splice(i, 1);
      findAllCase(alter, [...selected, operator]);
      alter.splice(i, 0, operator);
    }
  };
  findAllCase(['+', '-', '*'], []);

  // 3. 우선순위 따라 순차적으로 계산한 뒤, 절대값으로 변경하기
  const calculate = (priority) => {
    const temp = [...str];
    priority.forEach((operator) => {
      let next = temp.indexOf(operator);
      while (next !== -1) {
        const [v1, _, v2] = temp.splice(next - 1, 3).map(Number);

        let result = 0;
        if (operator === '+') result = v1 + v2;
        else if (operator === '-') result = v1 - v2;
        else result = v1 * v2;

        temp.splice(next - 1, 0, result);
        next = temp.indexOf(operator);
      }
    });
    return Math.abs(temp[0]);
  };
  const result = cases.map((priority) => calculate(priority));

  // 4. 가장 큰 값을 반환하기
  return Math.max(...result);
}
