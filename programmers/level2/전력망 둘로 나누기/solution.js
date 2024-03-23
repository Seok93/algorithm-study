function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  wires.forEach((wire) => {
    const [start, end] = wire;
    graph[start].push(end);
    graph[end].push(start);
  });

  const dfs = (target, exclude) => {
    const result = [];
    const visited = Array(n).fill(0);
    const stack = [target];
    while (stack.length) {
      const target = stack.pop();
      visited[target] = 1;
      result.push(target);

      const nextList = graph[target];
      nextList.forEach((next) => {
        if (!visited[next] && exclude !== next) {
          stack.push(next);
        }
      });
    }
    return result.length;
  };

  let minDiff = Infinity;
  wires.forEach((wire) => {
    const [n1, n2] = wire;
    const result1 = dfs(n1, n2);
    const result2 = dfs(n2, n1);

    const diff = Math.abs(result1 - result2);
    if (minDiff > diff) minDiff = diff;
  });

  return minDiff;
}
