# 알파벳 최빈값 찾기 문제풀이2
# Q.  다음과 같은 문자열을 입력받았을 때, 어떤 알파벳이 가장 많이 포함되어 있는지 반환하시오
input = "hello my name is sparta"

# 공간복잡도 분석
# alphabet_occurrence_array 개수 + letter 개수 + idx 개수 + max_occurrence 개수 + max_alpha_idx 개수 +  idx 개수 + occurrence 개수
# 26 + 1 + 1 + 1+ 1 + 1 + 1 = 32개
def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26
    for letter in string:                   # string의 길이만큼 아래 연산 실행: N (유동적이므로)
        if not letter.isalpha():            # 비교 연산 1번
            continue
        idx = ord(letter) - ord('a')        # 대입 연산 1번
        alphabet_occurrence_array[idx] += 1 # 대입 연산 1번
        
    max_occurrence = 0     # 대입 연산 1번
    max_alpha_idx = 0      # 대입 연산 1번
    for idx in range(len(alphabet_occurrence_array)):   # alphabet_occurrence_array의 길이만큼 아래 연산 실행: 26(상수)
        occurrence = alphabet_occurrence_array[idx]     # 대입 연산 1번
        if max_occurrence < occurrence:                 # 비교 연산 1번
            max_alpha_idx = idx                         # 대입 연산 1번
            max_occurrence = occurrence                 # 대입 연산 1번

    return chr(max_alpha_idx + ord('a'))    # N*3 + 2 + 26*4 = 3N+106


result = find_max_occurred_alphabet(input)
print(result)