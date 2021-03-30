# 알파벳 최빈값 찾기 문제풀이1
# Q.  다음과 같은 문자열을 입력받았을 때, 어떤 알파벳이 가장 많이 포함되어 있는지 반환하시오
input = "hello my name is sparta"

# 공간복잡도 분석
# alphabet_array 개수 + max_occurrence 개수 + max_alphabet 개수 + alphabet 개수 + occurrence 개수 +  char 개수
# 26 + 1 + 1 + 1+ 1 + 1 = 31개
def find_max_occurred_alphabet(string):
    alphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    max_occurrence = 0
    max_alphabet = alphabet_array[0]

    for alphabet in alphabet_array:     # alphabet_array의 길이만큼 아래의 연산 실행: 26(상수)
        occurrence = 0                  # 대입 연산 1번
        for char in string:             # string의 길이만큼 아래 연산 실행: N (유동적이므로)
            if char == alphabet:        # 비교 연산 1번
                occurrence += 1         # 대입 연산 1번

        if occurrence > max_occurrence: # 비교 연산 1번
            max_occurrence = occurrence # 대입 연산 1번
            max_alphabet = alphabet     # 대입 연산 1번

    return max_alphabet                 # 26 * (1 + N*(1+1) + 3) = 52N + 104


result = find_max_occurred_alphabet(input)
print(result)