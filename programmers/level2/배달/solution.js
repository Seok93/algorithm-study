function solution(N, road, K) {
  const graph = Array.from({ length: N }, () => Array(N).fill(Infinity));
  road.forEach((node) => {
    let [start, end, weight] = node;
    start -= 1;
    end -= 1;

    if (graph[start][end] > weight) graph[start][end] = weight;
    if (graph[end][start] > weight) graph[end][start] = weight;
  });

  const visited = Array(N).fill(false);
  const minDist = Array(N).fill(Infinity);
  visited[0] = true;
  minDist[0] = 0;

  const queue = [0];
  while (queue.length) {
    const current = queue.pop();
    visited[current] = true;

    // 연결된 경로 최단거리 갱신
    graph[current].forEach((weight, next) => {
      if (weight === Infinity) return;
      if (minDist[next] > minDist[current] + weight) {
        minDist[next] = minDist[current] + weight;
      }
    });

    // 방문하지 않는 마을중 제일 최단거리 마을 취득
    const sortedMinDist = minDist
      .map((dist, idx) => [idx, dist])
      .sort((a, b) => a[1] - b[1])
      .map((d) => d[0]);

    for (const node of sortedMinDist) {
      if (!visited[node]) {
        queue.push(node);
        break;
      }
    }
  }

  return minDist.filter((dist) => dist <= K).length;
}
