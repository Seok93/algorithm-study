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