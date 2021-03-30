# 반복되지 않는 문자중 제일 먼저 나오는 문자 찾기
# Q. 다음과 같이 영어로 되어 있는 문자열이 있을 때, 이 문자열에서 반복되지 않는 첫번째 문자를 반환하시오. 만약 그런 문자가 없다면 _ 를 반환하시오.
input = "abacabade"


def find_not_repeating_character(string):
    alphabet_occurrence_array = [0] * 26

    for letter in string:
        if not letter.isalpha():
            continue
        idx = ord(letter) - ord('a')
        alphabet_occurrence_array[idx] += 1

    not_repeating_character_array = []
    for idx in range(len(not_repeating_character_array)):
        alphabet_occurrence = not_repeating_character_array[idx]
        if alphabet_occurrence == 1:
            not_repeating_character_array.append(chr(idx+ord('a')))

    for letter in string:
        if letter in not_repeating_character_array:
            return letter

    return "_"


result = find_not_repeating_character(input)
print(result)