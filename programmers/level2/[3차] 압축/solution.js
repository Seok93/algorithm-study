// 풀이 1. 단어를 하나씩 꺼내서 확인하는 경우
function solution(msg) {
  const answer = [];
  const dictionary = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const msgList = msg.split('');

  let word = '';
  let prevIndex = -1;
  while (msgList.length) {
    word += msgList.shift();
    const index = dictionary.indexOf(word);
    const hasWord = index > -1;

    if (!hasWord) {
      dictionary.push(word);
      answer.push(prevIndex);
      msgList.unshift(word[word.length - 1]);
      word = '';
    }
    prevIndex = index;
  }
  answer.push(prevIndex);
  return answer;
}

// 풀이 2. 투포인터처럼 외부 포인터를 움직이면서 확인하는 경우
function solution(msg) {
  const answer = [];
  const dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  let [start, end] = [0, 0];
  let prevIndex = -1;
  while (true) {
    // 탐색 중인 메세지가 끝에 도달했으면 종료
    if (end >= msg.length) {
      answer.push(prevIndex + 1);
      break;
    }

    const target = msg.slice(start, end + 1);
    const index = dictionary.indexOf(target);
    const hasWord = index > -1;

    // 사전에 등록되지 않았다면, 색인 등록후 마지막 문자부터 다시 검사
    if (!hasWord) {
      dictionary.push(target);
      answer.push(prevIndex + 1);
      prevIndex = -1;
      start = end;
      continue;
    }
    // 사전에 등록되어 있다면, 저장후 다시 검사
    prevIndex = index;
    end++;
  }
  return answer;
}
