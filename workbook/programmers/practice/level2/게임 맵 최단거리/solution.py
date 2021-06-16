def solution(maps):
    d = [[0, -1], [0, 1], [-1, 0], [1, 0]]  # 상하좌우 방향
    q = [(0, 0)]  # 다음 위치
    row_len = len(maps)  # 행의 길이(y좌표 최대 길이)
    col_len = len(maps[0])  # 열의 길이(x좌표 최대 길이)
    visited = [[-1 for _ in range(col_len)] for _ in range(row_len)]  # 방문기록
    visited[0][0] = 1

    while q:
        x, y = q.pop(0)

        for i in range(len(d)):
            next_x = x + d[i][0]  # 열 이동
            next_y = y + d[i][1]  # 행 이동

            if -1 < next_x < col_len and -1 < next_y < row_len:
                if maps[next_y][next_x] == 1 and visited[next_y][next_x] == -1:
                    visited[next_y][next_x] = visited[y][x] + 1
                    q.append((next_x, next_y))

    return visited[-1][-1]