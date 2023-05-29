function solution(ingredient) {
  const BUGER_RECIPE = '1231';
  const stack = [];
  let count = 0;

  for (let i of ingredient) {
    stack.push(i);
    if (stack.slice(-4).join('') == BUGER_RECIPE) {
      stack.splice(-4);
      count++;
    }
  }
  return count;
}
