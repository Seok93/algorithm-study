# BFS 구현해보기 (큐를 이용)
# 위의 그래프를 예시로 삼아서 인접 리스트 방식으로 표현했습니다!
graph = {
    1: [2, 3, 4],
    2: [1, 5],
    3: [1, 6, 7],
    4: [1, 8],
    5: [2, 9],
    6: [3, 10],
    7: [3],
    8: [4],
    9: [5],
    10: [6]
}

# 1. 시작 노드를 큐에 넣는다.
# 2. 현재 큐의 노드를 빼서 visited에 추가
# 3. 현재 방문한 노드와 인접한 노드 중에 방문하지 않은 노드를 큐에 추가한다.
def bfs_queue(adj_graph, start_node):
    visited = []
    queue = [start_node]

    while queue:
        # 방문한 노드 저장
        cur_node = queue.pop(0)
        visited.append(cur_node)

        # 인접한 노드 탐색
        conn_node_list = adj_graph[cur_node]

        # 방문 대상 저장
        for node in conn_node_list:
            if node not in visited:
                queue.append(node)

    return visited


print(bfs_queue(graph, 1))  # 1 이 시작노드입니다!
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 이 출력되어야 합니다!