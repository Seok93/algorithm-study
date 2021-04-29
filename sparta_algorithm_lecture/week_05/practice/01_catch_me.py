from collections import deque

c = 11
b = 2
MAX_LOCATION = 200000
# 코니는 1초 후에 1만큼, 매초마다 이전 이동거리 +1만큼 이동
# 브라운은 -1, +1, *2 를 하나 선택해서 움직일 수 있다.
    # 브라운의 위치는 위의 케이스에 따라 변화 무쌍하다.
    # 3가지의 선택지가 있으므로 매초마다 3의 n승 만큼의 경우수가 나온다.
    # 브라운의 모든 이동 케이스에 대하여 테스트를 진행해야함을 알 수 있다. 즉 BFS 방식으로 실행해야한다.
    # ※ 너무 경우의 수가 많고, 쉽게 일반화가 지어지지 않을 것 같은 문제를 봤다면, 모든 경우의 수를 나열해야는구나 BFS를 써야하는구나를 캐치 해야한다.
# 브라운이 코니를 잡거나, 코니가 범위를 벗어나면 끝

def catch_me(cony_loc, brown_loc):
    queue = deque()
    queue.append([cony_loc, brown_loc, 0, 0])

    while queue:
        cony_loc, brown_loc, incre_loc, timer = queue.popleft()
        if cony_loc > MAX_LOCATION:
            continue
        elif cony_loc == brown_loc:
            break

        # cony 위치 변경
        incre_loc += 1
        cony_loc += incre_loc

        # 케이스 증가
        timer += 1

        # 브라운 위치 케이스별 실행
        new_brown_loc = brown_loc - 1
        if new_brown_loc >= 0:
            queue.append([cony_loc, new_brown_loc, incre_loc, timer])

        new_brown_loc = brown_loc + 1
        if new_brown_loc <= MAX_LOCATION:
            queue.append([cony_loc, new_brown_loc, incre_loc, timer])

        new_brown_loc = brown_loc * 2
        if new_brown_loc <= MAX_LOCATION:
            queue.append([cony_loc, new_brown_loc, incre_loc, timer])

    return timer


print(catch_me(c, b))  # 5가 나와야 합니다!