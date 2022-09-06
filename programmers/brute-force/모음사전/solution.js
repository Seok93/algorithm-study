function dfs(prev, dic) {
  const alphaList = ['A', 'E', 'I', 'O', 'U'];
  if (prev.length < 5) {
    alphaList.forEach((alpha) => {
      const current = prev + alpha;
      dic.push(current);
      dfs(current, dic);
    });
  }
}

function solution(word) {
  var answer = 0;
  const dic = [];

  dfs('', dic);

  return dic.indexOf(word) + 1;
}
