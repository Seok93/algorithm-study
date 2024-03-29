### 🔍 문제 링크
[Level2 **영어 끝말잇기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/12981)

### 📘 문제 설명
1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
4. 이전에 등장했던 단어는 사용할 수 없습니다.
5. 한 글자인 단어는 인정되지 않습니다.

다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

tank → kick → know → wheel → land → dream → mother → robot → tank

위 끝말잇기는 다음과 같이 진행됩니다.

- 1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
- 2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
- 3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
- 1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
- (계속 진행)

끝말잇기를 계속 진행해 나가다 보면, 3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.

### 📕 제한사항
- 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
- words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
- 단어의 길이는 2 이상 50 이하입니다.
- 모든 단어는 알파벳 소문자로만 이루어져 있습니다.
- 끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.
- 정답은 [ 번호, 차례 ] 형태로 return 해주세요.
- 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.

### 📙 입출력 예
|n|words|result|
|:---|:---|:---|
|3|["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]|[3,3]|
|5|["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]|[0,0]|
|2|["hello", "one", "even", "never", "now", "world", "draw"]|[1,3]|

### 📒 입출력 예 설명
**입출력 예 #1**  
3명의 사람이 끝말잇기에 참여하고 있습니다.

- 1번 사람 : tank, wheel, mother
- 2번 사람 : kick, land, robot
- 3번 사람 : know, dream, tank

와 같은 순서로 말을 하게 되며, 3번 사람이 자신의 세 번째 차례에 말한 `tank`라는 단어가 1번 사람이 자신의 첫 번째 차례에 말한 `tank`와 같으므로 3번 사람이 자신의 세 번째 차례로 말을 할 때 처음 탈락자가 나오게 됩니다.

**입출력 예 #2**  
5명의 사람이 끝말잇기에 참여하고 있습니다.

- 1번 사람 : hello, recognize, gather
- 2번 사람 : observe, encourage, refer
- 3번 사람 : effect, ensure, reference
- 4번 사람 : take, establish, estimate
- 5번 사람 : either, hang, executive

와 같은 순서로 말을 하게 되며, 이 경우는 주어진 단어로만으로는 탈락자가 발생하지 않습니다. 따라서 [0, 0]을 return하면 됩니다.

**입출력 예 #3**  
2명의 사람이 끝말잇기에 참여하고 있습니다.

- 1번 사람 : hello, even, now, draw
- 2번 사람 : one, never, world

와 같은 순서로 말을 하게 되며, 1번 사람이 자신의 세 번째 차례에 'r'로 시작하는 단어 대신, n으로 시작하는 now를 말했기 때문에 이때 처음 탈락자가 나오게 됩니다.

### 📔 나의 알고리즘 순서
1) 사람들이 말한 순서인 `words` 배열에서 단어를 하나씩 가져온다.
2) 끝말잇기 규칙을 준수하는가 확인한다.  
   2-1) 단어가 이전에 말한 단어에 중복되는가 확인한다.  
   2-2) 이전에 말한 단어의 마지막 스펠링과 현재 말한 단어의 시작 스펠링이 같은가 확인한다.  
   2-3) 단어가 2자리 이상인가 확인한다.  

### ✅ 나의 해답코드
```javascript
function solution(n, words) {
    const result = [0, 0];
    const wordSet = new Set();
    
    words.some((word, idx, origin) => {
        const prev = origin[idx - 1];
        const endChar = prev ? prev[prev.length - 1] : word[0];
        
        if(
            wordSet.has(word)
            || word.length < 2
            || word[0] !== endChar
        ) {
            result[0] = (idx % n) + 1;
            result[1] = Math.floor(idx / n) + 1;
            return true;
        }
        wordSet.add(word);
        return false
    });

    return result;
}
```

### ✨ 깔끔한 해답코드
```javascript
// reduce 메서드를 통해 이전 단어의 마지막 스펠링을 넘겨주며 비교하는 부분이 인상적인 코드
function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "")

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}

```

### 📝고민한점 & 💡배운점
1\) 🤔 문제에서 `한 글자인 단어는 인정되지 않습니다.`라는 조건이 있는데, 제한 사항에서 `단어의 길이는 2이상 50이하입니다.`라고 해서 조건이 있어도 무용지물이 되었다. 이 부분을 수정해서 조건을 활용하도록 만들어야지 않을까...

2\) 💡다른 사람 코드를 참조하던 중, reduce 메서드를 통해 이전 단어의 마지막 스펠링을 넘겨주며, 현재 단어의 첫번째 스펠링과 비교하는 코드가 있었다. **이전 데이터와 현재 데이터를 비교할 때 reduce를 활용할 수 있다는 점을 기억해야겠다.**