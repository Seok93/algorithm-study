from collections import deque

balanced_parentheses_string = "()))((()"

# 균형잡힌 괄호 문자열 -> 올바른 괄호 문자열
# 올바른 괄호 문자열? 어떻게 알았지?

def is_correct_parentheses(string): # 올바른 괄호 문자열인지 확인
    stack = []
    for s in string:
        if s == '(':
            stack.append(s)
        elif stack:
            stack.pop()
    return len(stack) == 0

def reverse_parentheses(string):
    reversed_string = ""
    for char in string:
        if char == "(":
            reversed_string += ")"
        else:
            reversed_string += "("
    return reversed_string

def separate_to_u_v(string):
    queue = deque(string)
    left, right = 0, 0
    u, v = "", ""
    while queue:
        char = queue.popleft()
        u += char
        if char == "(":
            left += 1
        else:
            right += 1

        if left == right:
            break
    v = "".join(list(queue))
    return u, v


# 1. 입력이 빈 문자열인 경우, 빈 문자열 반환
def change_to_correct_parentheses(string):
    if string == "":
        return ""

    # 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u,v 로 분리
    # 단 u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며,
    # v는 빈 문자열이 될 수 있다.
    # "균형잡힌 괄호 문자열"는 ( ) 개수가 같아야한다.
    u, v =separate_to_u_v(string)

    # 3. 문자열 u가 "올바른 괄호 문자열"이라면 문자열 v에 대해 1단계부터 다시 수행
    # 3-1. 수행한 결과 문자열을 u에 이어붙인 뒤 반환
    if is_correct_parentheses(u):
        return u + change_to_correct_parentheses(v)

    # 4. 문자열 u가 올바른 괄호 문자열이 아니라면, 아래의 과정을 수행
    # 4-1. 빈 문자열에 첫 번째 문자로 (를 붙인다.
    # 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어붙인다.
    # 4-3. )를 붙인다.
    # 4-4. u의 첫 번째 문자와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙인다.
    else:
        return "(" + change_to_correct_parentheses(v) + ")" + reverse_parentheses(u[1:-1])



def get_correct_parentheses(balanced_parentheses_string):
    if is_correct_parentheses(balanced_parentheses_string):
        return balanced_parentheses_string
    else:
        return change_to_correct_parentheses(balanced_parentheses_string)



print(get_correct_parentheses(balanced_parentheses_string))  # "()(())()"가 반환 되어야 합니다!