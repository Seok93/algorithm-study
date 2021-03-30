# 배열에서 특정 요소 찾기 문제
# Q. 다음과 같은 숫자로 이루어진 배열이 있을 때, 이 배열 내에 특정 숫자가 존재한다면 True, 존재하지 않다면 False 를 반환하시오.
input = [3, 5, 6, 1, 2, 4]


def is_number_exist(number, array):
    for element in array:
        if number == element:
            return True

    return False


result = is_number_exist(3, input)
print(result)