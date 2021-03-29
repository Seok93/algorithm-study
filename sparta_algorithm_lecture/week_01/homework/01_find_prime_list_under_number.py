input = 20


def find_prime_list_under_number(number):
    prime_array = []
    # 대상 숫자 출력
    for number in range(2, number+1):               # N: number만큼 반복
        # 소수 판단
        for division_number in range(2, number):    # N: number만큼 반복
            remainder = number % division_number
            if remainder == 0:
                break
        else:
            prime_array.append(number)

    return prime_array                              # O(N^2) 시간복잡도.. 비효율적


result = find_prime_list_under_number(input)
print(result)