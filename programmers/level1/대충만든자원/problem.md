## ✨ 힙
[Level1 **대충 만든 자판** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/160586) 

### 📘 문제 설명
휴대폰의 자판은 컴퓨터 키보드 자판과는 다르게 하나의 키에 여러 개의 문자가 할당될 수 있습니다. 키 하나에 여러 문자가 할당된 경우, 동일한 키를 연속해서 빠르게 누르면 할당된 순서대로 문자가 바뀝니다.

예를 들어, 1번 키에 "A", "B", "C" 순서대로 문자가 할당되어 있다면 1번 키를 한 번 누르면 "A", 두 번 누르면 "B", 세 번 누르면 "C"가 되는 식입니다.

같은 규칙을 적용해 아무렇게나 만든 휴대폰 자판이 있습니다. 이 휴대폰 자판은 키의 개수가 1개부터 최대 100개까지 있을 수 있으며, 특정 키를 눌렀을 때 입력되는 문자들도 무작위로 배열되어 있습니다. 또, 같은 문자가 자판 전체에 여러 번 할당된 경우도 있고, 키 하나에 같은 문자가 여러 번 할당된 경우도 있습니다. 심지어 아예 할당되지 않은 경우도 있습니다. 따라서 몇몇 문자열은 작성할 수 없을 수도 있습니다.

이 휴대폰 자판을 이용해 특정 문자열을 작성할 때, 키를 최소 몇 번 눌러야 그 문자열을 작성할 수 있는지 알아보고자 합니다.

1번 키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 `keymap`과 입력하려는 문자열들이 담긴 문자열 배열 `targets`가 주어질 때, 각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return 하는 solution 함수를 완성해 주세요.

단, 목표 문자열을 작성할 수 없을 때는 -1을 저장합니다.


### 📕 제한사항
- 1 ≤ `keymap`의 길이 ≤ 100
  - 1 ≤ `keymap`의 원소의 길이 ≤ 100
  - `keymap[i]`는 i + 1번 키를 눌렀을 때 순서대로 바뀌는 문자를 의미합니다.
    - 예를 들어 `keymap[0]` = "ABACD" 인 경우 1번 키를 한 번 누르면 A, 두 번 누르면 B, 세 번 누르면 A 가 됩니다.
  - `keymap`의 원소의 길이는 서로 다를 수 있습니다.
  - `keymap`의 원소는 알파벳 대문자로만 이루어져 있습니다.
- 1 ≤ `targets`의 길이 ≤ 100
  - 1 ≤ `targets`의 원소의 길이 ≤ 100
  - `targets`의 원소는 알파벳 대문자로만 이루어져 있습니다.


### 📙 입출력 예
|keymap|targets|result|
|:---|:---|:---|
|["ABACD", "BCEFD"]|["ABCD","AABB"]|[9, 4]|
|["AA"]|["B"]|[-1]|
|["AGZ", "BSSS"]|["ASA","BGZ"]|[4, 6]|


### 📒 입출력 예 설명
입출력 예 #1

- "ABCD"의 경우,
  - 1번 키 한 번 → A
  - 2번 키 한 번 → B
  - 2번 키 두 번 → C
  - 1번 키 다섯 번 → D
  - 따라서 총합인 9를 첫 번째 인덱스에 저장합니다.
- "AABB"의 경우,
  - 1번 키 한 번 → A
  - 1번 키 한 번 → A
  - 2번 키 한 번 → B
  - 2번 키 한 번 → B
  - 따라서 총합인 4를 두 번째 인덱스에 저장합니다.
  - 결과적으로 [9,4]를 return 합니다.
 
입출력 예 #2 
- "B"의 경우, 'B'가 어디에도 존재하지 않기 때문에 -1을 첫 번째 인덱스에 저장합니다.
- 결과적으로 [-1]을 return 합니다.
  
입출력 예 #3
- "ASA"의 경우,
  - 1번 키 한 번 → A
  - 2번 키 두 번 → S
  - 1번 키 한 번 → A
  - 따라서 총합인 4를 첫 번째 인덱스에 저장합니다.
- "BGZ"의 경우,
  - 2번 키 한 번 → B
  - 1번 키 두 번 → G
  - 1번 키 세 번 → Z
  - 따라서 총합인 6을 두 번째 인덱스에 저장합니다.
  - 결과적으로 [4, 6]을 return 합니다.

### 📔 나의 알고리즘 순서
1) target 문자열의 문자 하나씩 접근한다.
2) keymap을 순환하며 해당 문자를 가지고 있는지 확인한다.  
    2-1) keymap에 문자가 없다면: 바로 종료 후 -1 반환  
    2-2) keymap에 문자가 있다면: 클릭 횟수를 구한 후, 최소 클릭 횟수를 저장  
4) 문자열 완성을 위한 최소 클릭 횟수를 저장하여 반환한다.  


### ✅ 나의 해답코드
```javascript
function solution(keymap, targets) {
    const answer = [];
    targets.forEach(target => {
        let sum = 0;
        for(let i = 0; i < target.length; i++) {
            const char = target[i];
            let min = undefined;
            keymap.forEach(key => {
                if(key.includes(char)) {
                    const count = key.indexOf(char) + 1;
                    min = min || count;
                    min = min > count ? count : min;
                } 
            });
            if(min === undefined) {
                sum = -1;
                break;
            }
            sum += min;
        }
        answer.push(sum);
    });

    return answer;
}
```

### ✨ 깔끔한 해답코드
```javascript
function solution(keymap, targets) {
    return targets.map((target) => {
        let inspection = target.split("").map((char) => {
            let Indexs = keymap.map((x) => (x = x.indexOf(char))).filter((n) => n !== -1);
            return Indexs.length > 0 ? Math.min(...Indexs) + 1 : -1;
        });
        return inspection.includes(-1) ? -1 : inspection.reduce((acc, el) => acc + el, 0);
    });
}
```

### 📝배운점 & 고민한점
1\) 모든 경우의 수를 다 확인해야 된다면, 매 경우의 수마다 최솟값을 비교하기보다 모든 경우의 수의 결과를 구한 다음에 최솟값을 찾는 방법이 있다.

```javascript
// 나의 경우: 매번 최솟값을 비교함
keymap.forEach(key => {
  if(key.includes(char)) {
    const count = key.indexOf(char) + 1;
    min = min || count;
    min = min > count ? count : min;
  } 
});
```

```javascript
// 깔끔한 코드의 경우: 모든 경우의 수의 결과를 저장하고, 결과 내에서 최솟값을 한 번에 찾아온다.
let Indexs = keymap.map((x) => (x = x.indexOf(char))).filter((n) => n !== -1);
return Indexs.length > 0 ? Math.min(...Indexs) + 1 : -1;
```