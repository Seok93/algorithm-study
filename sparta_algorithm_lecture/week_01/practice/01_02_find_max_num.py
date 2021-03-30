# 최대값 찾기 풀이 2
# Q. 다음과 같이 숫자로 이루어진 배열이 있을 때, 이 배열 내에서 가장 큰 수를 반환하시오.
input = [3, 5, 6, 1, 2, 4]


def find_max_num(array):
    max_num = array[0]      # 대입 연산 1번
    for num in array:       # array의 개수 만큼 아래 연산이 실행: N
        if num > max_num:   # 비교 연산 1번
            max_num = num   # 대입 연산 1번

    return max_num          # 2N+1 => 시간복잡도 O(N)


result = find_max_num(input)
print(result)
