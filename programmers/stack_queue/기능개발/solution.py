# ===================== 솔루션 영역 =====================
def solution(progresses, speeds):
    answer = []

    # queue에 작업 주입
    jobs = [{"progress": progress, "speed": speed} for progress, speed in zip(progresses, speeds)]

    # 작업시작
    while jobs:
        # 하루 작업량 반영
        for job in jobs:
            job["progress"] += job["speed"]

        # 작업 완성 확인
        count = 0
        for job in jobs:
            if job["progress"] < 100:
                break
            count += 1

        for _ in range(count):
            jobs.pop(0)

        # 하루 작업량 반영
        if count > 0:
            answer.append(count)

    return answer

# ===================== 테스트 영역 =====================
# 테스트 케이스 1
result = solution([93, 30, 55], [1, 30, 5])
if result == [2, 1]:
    print("성공")
else:
    print("실패")

# 테스트 케이스 2
result = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])
if result == [1, 3, 2]:
    print("성공")
else:
    print("실패")