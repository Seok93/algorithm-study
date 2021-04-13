# 재귀함수를 이용하지 않고 회문 검사 구현하기

input = "abcba"


def is_palindrome(string):
    n = len(string)
    for i in range(n):
        if string[i] != string[n - 1 - i]:
            return False
    return True


print(is_palindrome(input))