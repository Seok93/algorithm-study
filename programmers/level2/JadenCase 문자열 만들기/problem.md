### 문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한 사항
- s는 길이 1 이상인 문자열입니다.
- s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
- 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )

### 입출력 예
|s|return|
|:----|:----|
|"3people unFollowed me"|"3people Unfollowed Me"|
|"for the last week"|"For The Last Week"|

### 개인적인 문제 해설
단순 구현 문제라고 생각했고, 문자열의 분해/변형/결합에 대한 이해를 물어보는 문제라고 생각했습니다.
```
1. 문자열을 전부 소문자로 치환
2. 공백문자를 기준으로 새로운 문자열의 시작이 대문자가 되어야하므로, 공백문자를 만난 직후 나온 문자를 대문자로 치환
   - flag를 이용해 문자 치환 여부 결정
   - True: 대문자 치환
   - False: 소문자 그대로 두기
3. 최종 결과 문자열 반환
```
위와 같은 순서로 만들면 될거라 생각했습니다.

### 알고리즘 순서
```
1. 문자열을 전부 소문자로 치환
2. 공백문자를 기준으로 새로운 문자열의 시작이 대문자가 되어야하므로, 공백문자를 만난 직후 나온 문자를 대문자로 치환
   - flag를 이용해 문자 치환 여부 결정
   - True: 대문자 치환
   - False: 소문자 그대로 두기
3. 최종 결과 문자열 반환
```

### 나의 해답코드
```python
def solution(s):
    trans_flag = True
    s = list(s.lower())
    
    for i, char in enumerate(s):
        if char == ' ':
            trans_flag = True
            continue
    
        if trans_flag:
            if char.isalpha():
                s[i] = s[i].upper()
            trans_flag = False
        
    return ''.join(s)
```

### 다른 사람 해답 코드
```python
def solution(s):
    return ' '.join(word.capitalize() for word in s.split(" "))
```
flag를 둘 필요 없이, String의 method를 잘 이용하면 한 번에 가공이 가능했다...  추가적으로 isalpha()로 검증하지 않아도 영문일 때만 변경해준다.

### 풀이중 배운점
1\) split(" ")로 문자열을 분해하면, " "은 다 구분자의 역할을 하기 때문에 " "가 여러개 연속적으로 있어도 구분자로 생략 된다고 생각했다.
   실제로는 " " 하나만 구분자로 사용하고 이후의 중복 구분자는 독립 문자열로 구분하였다.

```
ex) 
origin: "Hello   my  Friend! Love you".split(" ")
result: ["Hello", "", "", "my", "", "Friend!", "Love", "you"]
```
        
2\) python의 문자열은 immutable type이라 직접적으로 수정할 수 없다. 
 
```python
ex)
s = "Hello world!"
temp[0] = "h"
print(temp)

# TypeError: 'str' object does not support item assignment
```
변경이 필요하다면 새로운 문자열을 만들어 대입하거나 list(string)을 통해 배열로 분해한 후, 요소를 치환한하고 join을 통해 다시 문자열을 만드는 방법을 사용해야 한다.
```python
s = "Hello world!"
str_arr = list(s)
str_arr[0] = "h"
''.join(str_arr)    # "hello world!"
```

3\) string의 메소드를 사용해볼 수 있었고, python에는 문자 또한 문자열로 취급하기 때문에 메소드를 가져다 사용할 수 있다.
```python
s = "Hello  World"

# 알파벳인지 확인
print(s[0].isalpha)     # True
# 전체 대문자
print(s.upper())        # "HELLO  WORLD"
# 전체 소문자
print(s.lower())        # "hello  world"
# 시작문자만 대문자
print(s.capitalize())   # "Hello  world"
# 문자열 분리
print(s.split(" "))     # ["Hello", "", "world"]
# 문자열 결합
print(''.join(s))       # "Hello  wolrd"
```