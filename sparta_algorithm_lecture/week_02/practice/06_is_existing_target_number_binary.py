# 이진탐색 예제
# Q. 1에서 16까지 오름차순으로 정렬되어 있는 배열이 있다. 이 배열 내에 14가 존재한다면 True, 존재하지 않는다면 False 를 반환하시오.

finding_target = 14
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


def is_existing_target_number_binary(target, array):
    start_idx = 0
    end_idx = len(array) - 1

    while start_idx <= end_idx:
        mid_idx = (start_idx + end_idx) // 2

        if target > array[mid_idx]:
            start_idx = mid_idx + 1
        elif target < array[mid_idx]:
            end_idx = mid_idx - 1
        else:
            return True

    return False


result = is_existing_target_number_binary(finding_target, finding_numbers)
print(result)
