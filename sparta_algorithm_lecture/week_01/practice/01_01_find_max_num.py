# 최대값 찾기 풀이 1
# Q. 다음과 같이 숫자로 이루어진 배열이 있을 때, 이 배열 내에서 가장 큰 수를 반환하시오.
input = [3, 5, 6, 1, 2, 4]


def find_max_num(array):
    for num in array:               # array의 길이만큼 아래의 연산 실행: N
        for compare_num in array:   # array의 길이만큼 아래의 연산 실행: N
            if num < compare_num:   # 비교 연산 1번
                break
        else:
            return num              # N*N*1 = N^2 => 시간복잡도 O(N^2)


result = find_max_num(input)
print(result)
