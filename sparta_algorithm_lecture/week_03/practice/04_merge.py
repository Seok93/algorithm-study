# 두 배열을 병합하면서 정렬하는 방법
array_a = [1, 2, 3, 5]
array_b = [4, 6, 7, 8]


def merge(array1, array2):
    result_array = []
    arr1_len = len(array1)
    arr2_len = len(array2)
    idx1 = 0
    idx2 = 0

    while idx1 < arr1_len and idx2 < arr2_len:
        if array1[idx1] > array2[idx2]:
            result_array.append(array2[idx2])
            idx2 += 1
        else:
            result_array.append(array1[idx1])
            idx1 += 1

    if idx1 == arr1_len:
        while idx2 < arr2_len:
            result_array.append(array2[idx2])
            idx2 += 1
    if idx2 == arr2_len:
        while idx1 < arr1_len:
            result_array.append(array1[idx1])
            idx1 += 1

    return result_array


print(merge(array_a, array_b))  # [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!