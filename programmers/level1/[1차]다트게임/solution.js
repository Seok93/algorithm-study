function solution(dartResult) {
  const results = [];
  dartResult.match(/\d+\D+/g).forEach((command, index) => {
    const [, score, options] = command.match(/(\d+)(\D+)/);

    let result = 0;
    [...options].forEach((option) => {
      switch (option) {
        case 'S':
          result += Math.pow(Number(score), 1);
          break;
        case 'D':
          result += Math.pow(Number(score), 2);
          break;
        case 'T':
          result += Math.pow(Number(score), 3);
          break;
        case '*':
          if (index > 0) results[index - 1] *= 2;
          result = result * 2;
          break;
        case '#':
          result *= -1;
          break;
        default:
          throw new Error('Option Error');
      }
    });
    results.push(result);
  });

  return results.reduce((acc, value) => acc + value, 0);
}
