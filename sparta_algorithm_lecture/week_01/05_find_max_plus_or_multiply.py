input = [0, 3, 5, 6, 1, 2, 4]


def find_max_plus_or_multiply(array):
    multiply_sum = 0
    for number in array:
        if number <= 1 or multiply_sum <= 1:
            multiply_sum += number
        else:
            multiply_sum *= number

    return multiply_sum        # 2N + 1(시간 복잡도), N + 2(공간복잡도)


result = find_max_plus_or_multiply(input)
print(result)