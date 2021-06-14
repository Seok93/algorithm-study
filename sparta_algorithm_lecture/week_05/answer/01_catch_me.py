from collections import deque

c = 11
b = 2

# 시간은 1초씩 증가
# 위치는 코니도 브라운도 값이 자유자재로 바뀐다.
# 규칙적으로 증가하는걸 저장하기 위한 자료구조는 배열
# 자유자재로 변화하는 값을 저장하기 위한 자료구조는 dictionary
# 각 시간마다 위치를 저장하고 싶다
# 배열 안에 딕셔너리를 넣는 방식으로 구현해봄
# 브라운과 코니의 위치를 구하러 가보겠습니다.

def catch_me(cony_loc, brown_loc):
    time = 0
    queue = deque()
    queue.append((brown_loc, 0))
    visited = [{} for _ in range(200001)]

    while cony_loc <= 200000:
        cony_loc += time # 시간만큼 + 1, +2, +3, +4

        if time in visited[cony_loc]:
            return time

        for i in range(0, len(queue)):
            current_position, current_time = queue.popleft()

            new_time = current_time + 1

            new_position = current_position - 1
            if new_position >=0 and new_time not in visited[new_position]:
                visited[new_position][new_time] = True
                queue.append((new_position, new_time))

            new_position = current_position + 1
            if new_position < 200001 and new_time not in visited[new_position]:
                visited[new_position][new_time] = True
                queue.append((new_position, new_time))

            new_position = current_position * 2
            if new_position < 200001 and new_time not in visited[new_position]:
                visited[new_position][new_time] = True
                queue.append((new_position, new_time))

        time += 1


print(catch_me(c, b))  # 5가 나와야 합니다!