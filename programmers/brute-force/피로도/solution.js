function dfs(clear, dungeons, fatigability, visited, store) {
  visited.forEach((visit, index) => {
    if (!visit) {
      const [require, use] = dungeons[index];

      if (fatigability >= require) {
        visited[index] = 1;
        clear.push([require, use]);
        dfs(clear, dungeons, fatigability - use, visited, store);
        clear.pop();
        visited[index] = 0;
      } else {
        store.add(clear.length);
      }
    } else {
      store.add(clear.length);
    }
  });
}

function solution(k, dungeons) {
  let answer = dungeons.length;
  const visited = [...dungeons].fill(0);
  const store = new Set();

  dfs([], dungeons, k, visited, store);

  return Math.max(...store.values());
}
