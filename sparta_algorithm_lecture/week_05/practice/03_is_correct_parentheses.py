from collections import deque

balanced_parentheses_string = "()))((()"


# 괄호를 뒤집는 함수
def reverse_parentheses(string):
    reversed_string = ""
    for letter in string:
        if letter == "(":
            reversed_string += ")"
        elif letter == ")":
            reversed_string += "("
    return reversed_string


# 균형잡힌 괄호 문자열 확인하는 함수
def is_balanced_parentheses(string):
    letter_hash = {"(": 0, ")": 0}
    for letter in string:
        if letter in letter_hash.keys():
            letter_hash[letter] += 1
    return letter_hash["("] == letter_hash[")"]


# 올바른 괄호 문자열 확인하는 함수
def is_collect_parentheses(string):
    stack = []
    for letter in string:
        if letter == "(":
            stack.append(letter)
        else:
            if not stack:
                return False
            else:
                stack.pop()
    if not stack:
        return True
    else:
        return False


def get_correct_parentheses(balanced_parentheses_string):
    # 올바른 괄호 문자열인가 확인
    if is_collect_parentheses(balanced_parentheses_string):
        return balanced_parentheses_string
    
    # 균형잡힌 괄호 문자열인가 확인
    u, v = "", ""
    for idx in range(len(balanced_parentheses_string)):
        u += balanced_parentheses_string[idx]
        if is_balanced_parentheses(u):
            v = balanced_parentheses_string[idx+1:]
            break

    if is_collect_parentheses(u):
        return u + get_correct_parentheses(v)
    else:
        return "(" + get_correct_parentheses(v) + ")" + reverse_parentheses(u[1:-1])


print(get_correct_parentheses(balanced_parentheses_string))  # "()(())()"가 반환 되어야 합니다!