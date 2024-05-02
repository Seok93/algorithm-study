function solution(numbers) {
  const number = numbers.sort((a, b) => (`${a}${b}` > `${b}${a}` ? -1 : 1)).join('');
  return number.startsWith('0') ? '0' : number;
}
