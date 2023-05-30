function solution(new_id) {
  let answer = new_id;
  const regex1 = /[a-z0-9-_.]/;
  const regex2 = /(\.)\1+/g;

  answer = answer.toLowerCase();
  answer = [...answer].filter((c) => regex1.test(c)).join('');
  answer = answer.replace(regex2, '.');
  answer = answer.startsWith('.') ? answer.slice(1) : answer;
  answer = answer.endsWith('.') ? answer.slice(0, -1) : answer;
  answer = answer || 'a';
  answer = answer.length > 15 ? answer.slice(0, 15) : answer;
  answer = answer.endsWith('.') ? answer.slice(0, -1) : answer;
  while (answer.length <= 2) {
    answer += answer[answer.length - 1];
  }
  return answer;
}
