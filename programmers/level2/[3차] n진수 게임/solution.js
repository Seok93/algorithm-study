function solution(n, t, m, p) {
  let answer = '';

  let number = 0;
  let numbers = [];
  const needs = t * m + p;
  while (needs > numbers.length) {
    const splited = number.toString(n).split('');
    for (let i = 0; i < splited.length; i++) {
      numbers.push(splited[i]);
    }
    number++;
  }

  for (let i = 0; i < t; i++) {
    const idx = p - 1 + m * i;
    answer += numbers[idx].toUpperCase();
  }

  return answer;
}
