# 올바른 괄호

s1 = "(())()"
s2 = "(()))"


def is_correct_parenthesis(string):
    stack = []
    for char in string:
        if char == '(':
            stack.append(char)
            continue
        elif char == ')':
            if not stack:
                return False
            stack.pop()

    return not stack

print(is_correct_parenthesis(s1))  # True 를 반환해야 합니다!
print(is_correct_parenthesis(s2))  # False 를 반환해야 합니다!