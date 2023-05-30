### 🔍 문제 링크
[Level **신규 아이디 추천** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/72410)

### 📘 문제 설명
카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다. 다음은 카카오 아이디의 규칙입니다.

- 아이디의 길이는 3자 이상 15자 이하여야 합니다.
- 아이디는 알파벳 소문자, 숫자, 빼기(`-`), 밑줄(`_`), 마침표(`.`) 문자만 사용할 수 있습니다.
- 단, 마침표(`.`)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
  
"네오"는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.
신규 유저가 입력한 아이디가 `new_id` 라고 한다면,

```
1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
```

예를 들어, new_id 값이 "...!@BaT#*..y.abcdefghijklm" 라면, 위 7단계를 거치고 나면 new_id는 아래와 같이 변경됩니다.

1단계 대문자 'B'와 'T'가 소문자 'b'와 't'로 바뀌었습니다.  
`"...!@BaT#*..y.abcdefghijklm"` → `"...!@bat#*..y.abcdefghijklm"`

2단계 '!', '@', '#', '*' 문자가 제거되었습니다.  
`"...!@bat#*..y.abcdefghijklm"` → `"...bat..y.abcdefghijklm"`

3단계 '...'와 '..' 가 '.'로 바뀌었습니다.  
`"...bat..y.abcdefghijklm"` → `".bat.y.abcdefghijklm"`

4단계 아이디의 처음에 위치한 '.'가 제거되었습니다.  
`".bat.y.abcdefghijklm"` → `"bat.y.abcdefghijklm"`

5단계 아이디가 빈 문자열이 아니므로 변화가 없습니다.  
`"bat.y.abcdefghijklm"` → `"bat.y.abcdefghijklm"`

6단계 아이디의 길이가 16자 이상이므로, 처음 15자를 제외한 나머지 문자들이 제거되었습니다.  
`"bat.y.abcdefghijklm"` → `"bat.y.abcdefghi"`

7단계 아이디의 길이가 2자 이하가 아니므로 변화가 없습니다.  
`"bat.y.abcdefghi"` → `"bat.y.abcdefghi"`

따라서 신규 유저가 입력한 new_id가 "...!@BaT#*..y.abcdefghijklm"일 때, 네오의 프로그램이 추천하는 새로운 아이디는 "bat.y.abcdefghi" 입니다.

**신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.**

### 📕 제한사항
new_id는 길이 1 이상 1,000 이하인 문자열입니다.  
new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.  
new_id에 나타날 수 있는 특수문자는 `-_.~!@#$%^&*()=+[{]}:?,<>/` 로 한정됩니다.

### 📙 입출력 예
|no|new_id|result|
|:---|:---|:---|
|예1|"...!@BaT#*..y.abcdefghijklm"|"bat.y.abcdefghi"|
|예2|"z-+.^."|"z--"|
|예3|"=.="|"aaa"|
|예4|"123_.def"|"123_.def"|
|예5|"abcdefghijklmn.p"|"abcdefghijklmn"|

### 📒 입출력 예 설명
**입출력 예 #1**  
문제의 예시와 같습니다.

**입출력 예 #2**  
7단계를 거치는 동안 new_id가 변화하는 과정은 아래와 같습니다.

1단계 변화 없습니다.  
2단계 `"z-+.^."` → `"z-.."`  
3단계 `"z-.."` → `"z-."`  
4단계 `"z-."` → `"z-"`  
5단계 변화 없습니다.  
6단계 변화 없습니다.  
7단계 `"z-"` → `"z--"`  

**입출력 예 #3**  
7단계를 거치는 동안 new_id가 변화하는 과정은 아래와 같습니다.

1단계 변화 없습니다.  
2단계 `"=.="` → `"."`  
3단계 변화 없습니다.  
4단계 `"."` → `""` (new_id가 빈 문자열이 되었습니다.)  
5단계 `""` → `"a"`  
6단계 변화 없습니다.  
7단계 `"a"` → `"aaa"`

**입출력 예 #4**  
1단계에서 7단계까지 거치는 동안 new_id("123_.def")는 변하지 않습니다. 즉, new_id가 처음부터 카카오의 아이디 규칙에 맞습니다.

**입출력 예 #5**  
1단계 변화 없습니다.  
2단계 변화 없습니다.  
3단계 변화 없습니다.  
4단계 변화 없습니다.  
5단계 변화 없습니다.  
6단계 `"abcdefghijklmn.p"` → `"abcdefghijklmn."` → `"abcdefghijklmn"`  
7단계 변화 없습니다.  

### 📔 나의 알고리즘 순서
※ 문제의 아이디 변환 순서가 있다.

### ✅ 나의 해답코드
```javascript
function solution(new_id) {
  let answer = new_id;
  const regex1 = /[a-z0-9-_.]/;
  const regex2 = /(\.)\1+/g;

  answer = answer.toLowerCase();
  answer = [...answer].filter((c) => regex1.test(c)).join('');
  answer = answer.replace(regex2, '.');
  answer = answer.startsWith('.') ? answer.slice(1) : answer;
  answer = answer.endsWith('.') ? answer.slice(0, -1) : answer;
  answer = answer || 'a';
  answer = answer.length > 15 ? answer.slice(0, 15) : answer;
  answer = answer.endsWith('.') ? answer.slice(0, -1) : answer;
  while (answer.length <= 2) {
    answer += answer[answer.length - 1];
  }

  return answer;
}
```

### ✨ 깔끔한 해답코드
```javascript
// 정규 표현식과 replace를 이용한 깔끔한 풀이
// 5번, 7번 조건은 String.prototype.padEnd 메서드를 이용하는 방법도 있다.
// 5번: new_id.padEnd(1, 'a');
// 7번: new_id.padEnd(3, new_id[new_id.length - 1]);
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); // 7
}
```

### 📝고민한점 & 배운점
**1\) 🤔 4단계 규칙을 정규표현식으로 풀고 싶은데, 어떻게 해야할까??**  
`/^\.|\.$/`를 사용하면 정규표현식으로도 구현이 가능하다.

문제는 아직 정규표현식이 익숙치 않아서 바로 생각나지 않았다. 처음에는 `/^\.$/`규칙을 생각했는데, 이는 시작과 끝이 `.`문자인, 즉 하나의 문자만 있어야하는 케이스가 되어버렸다. `|` 를 사용 해야겠다고 생각했지만, `/[^\.|\.$]/` 규칙을 작성하고 제대로 작동하지 않는다고 포기했다..

이후 정해진 시간 안에 풀어야해서 `String.prototype.startsWith`와 `String.prototype.endsWith` 메서드를 이용하여 앞과 끝을 별도로 비교해서 풀이했다.

다음에는 ``/^\.|\.$/`를 활용해서 풀어야지..

**2\) 💡`String.prototype.padEnd` 메서드를 이용하면 원하는 문자열 길이만큼, 마지막에 원하는 문자를 추가할 수 있다.**  
5번 규칙 `new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.`의 경우, `new_id.padEnd(1, 'a')`로 표현하면 되고, 7번 규칙 `new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.`라면 `new_id.padEnd(3, new_id[new_id.length-1])`로 표현할 수 있다.

**3\) 💡`String.prototype.replace` 메서드는 첫 번째 인자로 정규표현식을 넘겨서 원하는 규칙을 찾아낼 수 있다.**