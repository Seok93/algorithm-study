# 알파벳 최빈값 찾기
def find_alphabet_occurrence_array(string):
    alphabet_occurrence_array = [0] * 26

    for letter in string:
        if not letter.isalpha():
            continue
        idx = ord(letter) - ord('a')
        alphabet_occurrence_array[idx] += 1

    return alphabet_occurrence_array


print(find_alphabet_occurrence_array("hello my name is sparta"))