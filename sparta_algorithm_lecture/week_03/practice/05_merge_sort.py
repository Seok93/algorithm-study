# 병합정렬 (오름차순)
# 재귀함수를 이용하여 대상 배열을 최대한 쪼개고, 다시 병합하면서 정렬함
# 시간복잡도 O(N・logN)
array = [5, 3, 2, 1, 6, 8, 7, 4]

# merge_sort는 반절씩 쪼개서 비교하기 때문에 O(N・ logN)의 시간 복잡도를 가진다.
def merge_sort(array):
    arr_len = len(array)

    if arr_len <= 1:
        return array

    mid = arr_len // 2
    left_array = merge_sort(array[:mid])
    right_array = merge_sort(array[mid:])

    #  합쳐지는 결과 보기
    # print(array)
    # print("left_array", left_array)
    # print("right_array", right_array)

    return merge(left_array, right_array)

# merge는 O(N)의 시간복잡도를 가짐
def merge(array1, array2):
    result = []
    array1_index = 0
    array2_index = 0
    while array1_index < len(array1) and array2_index < len(array2):
        if array1[array1_index] < array2[array2_index]:
            result.append(array1[array1_index])
            array1_index += 1
        else:
            result.append(array2[array2_index])
            array2_index += 1

    if array1_index == len(array1):
        while array2_index < len(array2):
            result.append(array2[array2_index])
            array2_index += 1

    if array2_index == len(array2):
        while array1_index < len(array1):
            result.append(array1[array1_index])
            array1_index += 1

    return result


print(merge_sort(array))  # [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!