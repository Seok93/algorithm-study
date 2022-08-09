function solution(arr) {
  var answer = [];

  arr.forEach((elem) => {
    if (answer[answer.length - 1] !== elem) answer.push(elem);
  });

  return answer;
}
