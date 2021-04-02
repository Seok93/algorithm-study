# ===================== 솔루션 영역 =====================
def solution(priorities, location):
    # 처음 위치 순서 등록하기
    jobs = [{"order": order, "priority": priority} for order, priority in enumerate(priorities)]

    # 출력 순서
    count = 0
    while jobs:
        target = jobs.pop(0)
        for job in jobs:
            if target["priority"] < job["priority"]:
                jobs.append(target)
                break
        else:
            count += 1
            if target["order"] == location:
                return count

# ===================== 테스트 영역 =====================
# 테스트 케이스 1
result = solution([2, 1, 3, 2], 2)
if result == 1:
    print("성공")
else:
    print("실패")

# 테스트 케이스 2
result = solution([1, 1, 9, 1, 1, 1], 0)
if result == 5:
    print("성공")
else:
    print("실패")
