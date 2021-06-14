import math


def splitString(target):
    arr = {}
    for i in range(len(target) - 1):
        temp = target[i:i + 2].lower()

        if not temp.isalpha():
            continue

        if temp in arr:
            arr[temp] += 1
        else:
            arr[temp] = 1
    return arr


def solution(str1, str2):
    INTEGER_MAX = 65536
    str_arr1 = splitString(str1)
    str_arr2 = splitString(str2)

    if not str_arr1 and not str_arr2:
        return INTEGER_MAX

    common = 0
    for target in str_arr1:
        if target in str_arr2:
            common += min(str_arr1[target], str_arr2[target])
    len1 = sum(str_arr1.values())
    len2 = sum(str_arr2.values())

    total = len1 + len2 - common
    return math.floor(INTEGER_MAX * common / total)