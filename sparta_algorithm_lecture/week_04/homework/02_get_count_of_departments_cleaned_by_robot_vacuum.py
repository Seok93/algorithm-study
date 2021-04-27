# 샤오미 로봇 청소기

current_r, current_c, current_d = 7, 4, 0
current_room_map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

# 1. 현재 위치를 청소한다.
    # 0 : 청소 전
    # 1 : 벽
    # 2 : 청소 완료
# 2. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향부터 차례대로 탐색

# 3. direction 0:북, 1: 서, 2: 남, 3: 서
#       북  서  남   동
dr = [ -1,  0,  1,  0]
dc = [  0, -1,  0,  1]

def get_direction_index_when_rotate_to_left(direction):
    return (direction+1) % 4

def get_direction_index_when_go_back(direction):
    return (direction+2) % 4

def get_count_of_departments_cleaned_by_robot_vacuum(row, column, direction, room_map):
    n = len(room_map)
    m = len(room_map[0])

    count = 1
    room_map[row][column] = 2
    queue = [[row, column, direction]]

    while queue:
        # print("수행중")
        # for room in room_map:
        #     print(room)

        row, column, direction = queue.pop(0)
        temp_d = direction

        for i in range(4):
            temp_d = get_direction_index_when_rotate_to_left(temp_d)

            new_r, new_c = row + dr[temp_d], column + dc[temp_d]
            if 0 <= new_r < n and 0 <= new_c < m and room_map[new_r][new_c] == 0:
                count += 1
                room_map[new_r][new_c] = 2
                queue.append([new_r, new_c, temp_d])
                break
            elif i == 3:
                temp_d = get_direction_index_when_go_back(temp_d)
                new_r, new_c = row + dr[temp_d], column + dc[temp_d]
                queue.append([new_r, new_c, direction])

                if room_map[new_r][new_c] == 1:
                    return count
    return count

# 57 가 출력되어야 합니다!
print(get_count_of_departments_cleaned_by_robot_vacuum(current_r, current_c, current_d, current_room_map))