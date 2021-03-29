input = "hello my name is sparta"


def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26
    for letter in string:
        if not letter.isalpha():
            continue
        idx = ord(letter) - ord('a')
        alphabet_occurrence_array[idx] += 1
        
    max_occurrence = 0
    max_alpha_idx = 0
    for idx in range(len(alphabet_occurrence_array)):
        occurrence = alphabet_occurrence_array[idx]
        if max_occurrence < occurrence:
            max_alpha_idx = idx
            max_occurrence = occurrence

    return chr(max_alpha_idx + ord('a'))


result = find_max_occurred_alphabet(input)
print(result)