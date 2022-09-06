function dfs(root, exception, graph, nodeCount) {
  let count = 0;
  const queue = [root];
  const visited = Array(nodeCount).fill(0);
  visited[root] = 1;

  while (queue.length) {
    const cur = queue.pop();
    graph[cur].map((next) => {
      if (next !== exception && !visited[next]) {
        visited[next] = 1;
        queue.push(next);
      }
    });
    count++;
  }

  return count;
}

function solution(n, wires) {
  let answer = n;
  const visited = Array(9).fill(0);

  const graph = [];
  wires.forEach((wire) => {
    const [pos1, pos2] = wire;
    if (!graph[pos1]) graph[pos1] = [];
    if (!graph[pos2]) graph[pos2] = [];
    graph[pos1].push(pos2);
    graph[pos2].push(pos1);
  });

  wires.forEach((wire, index) => {
    const [pos1, pos2] = wire;
    const diff = Math.abs(dfs(pos1, pos2, graph, n) - dfs(pos2, pos1, graph, n));
    answer = answer > diff ? diff : answer;
  });

  return answer;
}
