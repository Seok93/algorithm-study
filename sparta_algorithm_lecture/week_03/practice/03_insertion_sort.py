# 삽입정렬 (오름차순)
# 시간복잡도 O(N^2), 버블과 선택 정렬과는 다른 점은 최선의 경우 O(N)의 시간 복잡도를 가진다.

input = [4, 6, 2, 9, 1]


def insertion_sort(array):
    n = len(array)
    for i in range(1, n):
        idx = i
        for j in reversed(range(i)):
            if array[j] > array[idx]:
                array[idx], array[j] = array[j], array[idx]
                idx = j
            else:
                break

def insertion_sort2(array):
    n = len(array)
    for i in range(1, n):
        for j in range(i):
            if array[i - j - 1] > array[i - j]:
                array[i - j - 1], array[i - j] = array[i - j], array[i - j - 1]
            else:
                break
    return

insertion_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!