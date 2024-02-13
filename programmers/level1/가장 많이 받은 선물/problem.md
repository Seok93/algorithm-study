### 🔍 문제 링크
[Level1 **가장 많이 받은 선물** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/258712?language=javascript)

### 📘 문제 설명
선물을 직접 전하기 힘들 때 카카오톡 선물하기 기능을 이용해 축하 선물을 보낼 수 있습니다. 당신의 친구들이 이번 달까지 선물을 주고받은 기록을 바탕으로 다음 달에 누가 선물을 많이 받을지 예측하려고 합니다.

- 두 사람이 선물을 주고받은 기록이 있다면, 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다.
  - 예를 들어 `A`가 `B`에게 선물을 5번 줬고, `B`가 `A`에게 선물을 3번 줬다면 다음 달엔 `A`가 `B`에게 선물을 하나 받습니다.
- 두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면, 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.
  - 선물 지수는 이번 달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값입니다.
  - 예를 들어 `A`가 친구들에게 준 선물이 3개고 받은 선물이 10개라면 `A`의 선물 지수는 -7입니다. `B`가 친구들에게 준 선물이 3개고 받은 선물이 2개라면 `B`의 선물 지수는 1입니다. 만약 `A`와 `B`가 선물을 주고받은 적이 없거나 정확히 같은 수로 선물을 주고받았다면, 다음 달엔 B가 `A`에게 선물을 하나 받습니다.
  - **만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.**

위에서 설명한 규칙대로 다음 달에 선물을 주고받을 때, 당신은 선물을 가장 많이 받을 친구가 받을 선물의 수를 알고 싶습니다.

친구들의 이름을 담은 1차원 문자열 배열 `friends` 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열 `gifts`가 매개변수로 주어집니다. 이때, 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return 하도록 solution 함수를 완성해 주세요.

### 📕 제한사항
- 2 ≤ `friends`의 길이 = 친구들의 수 ≤ 50
  - `friends`의 원소는 친구의 이름을 의미하는 알파벳 소문자로 이루어진 길이가 10 이하인 문자열입니다.
  - 이름이 같은 친구는 없습니다.
- 1 ≤ `gifts`의 길이 ≤ 10,000
  - `gifts`의 원소는 `"A B"`형태의 문자열입니다. `A`는 선물을 준 친구의 이름을 `B`는 선물을 받은 친구의 이름을 의미하며 공백 하나로 구분됩니다.
  - `A`와 `B`는 `friends`의 원소이며 `A`와 `B`가 같은 이름인 경우는 존재하지 않습니다.

### 📙 입출력 예
|friends|gifts|result|
|:---|:---|:---|
|["muzi", "ryan", "frodo", "neo"]|["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]|2|
|["joy", "brad", "alessandro", "conan", "david"]|["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]|4|
|["a", "b", "c"]|["a b", "b a", "c a", "a c", "a c", "c a"]|0|

### 📒 입출력 예 설명

**입출력 예 #1**

주고받은 선물과 선물 지수를 표로 나타내면 다음과 같습니다.

|↓준 사람 \ 받은 사람→|muzi|ryan|frodo|neo|
|:---|:---|:---|:---|:---|
|muzi|-|0|2|0|
|ryan|3|-|0|0|
|frodo|1|1|-|0|
|neo|1|0|0|-|

|이름|준 선물|받은 선물|선물 지수|
|:---|:---|:---|:---|
|muzi|2|5|-3|
|ryan|3|1|2|
|frodo|2|2|0|
|neo|1|0|1|

`muzi`는 선물을 더 많이 줬던 `frodo`에게서 선물을 하나 받습니다.
`ryan`은 선물을 더 많이 줬던 `muzi`에게서 선물을 하나 받고, 선물을 주고받지 않았던 `neo`보다 선물 지수가 커 선물을 하나 받습니다.
`frodo`는 선물을 더 많이 줬던 `ryan`에게 선물을 하나 받습니다.
`neo`는 선물을 더 많이 줬던 `muzi`에게서 선물을 하나 받고, 선물을 주고받지 않았던 `frodo`보다 선물 지수가 커 선물을 하나 받습니다.

다음달에 가장 선물을 많이 받는 사람은 `ryan`과 `neo`이고 2개의 선물을 받습니다. 따라서 2를 return 해야 합니다.

**입출력 예 #2**

주고받은 선물과 선물 지수를 표로 나타내면 다음과 같습니다.

|↓준 사람 \ 받은 사람→|joy|brad|alessandro|conan|david|
|:---|:---|:---|:---|:---|:---|
|joy|-|0|0|0|0|
|brad|0|-|0|0|0|
|alessandro|1|1|-|1|1|
|conan|0|0|0|-|0|
|david|0|0|1|0|-|

|이름|준 선물|받은 선물|선물 지수|
|:---|:---|:---|:---|
|joy|0|1|-1|
|brad|0|1|-1|
|alessandro|4|1|3|
|conan|0|1|-1|
|david|1|1|0|

`alessandro`가 선물을 더 많이 줬던 `joy`, `brad`, `conan`에게서 선물을 3개 받습니다. 선물을 하나씩 주고받은 `david`보다 선물 지수가 커 선물을 하나 받습니다.
`david`는 선물을 주고받지 않았던 `joy`, `brad`, `conan`보다 선물 지수가 커 다음 달에 선물을 3개 받습니다.
`joy`, `brad`, `conan`은 선물을 받지 못합니다.

다음달에 가장 선물을 많이 받는 사람은 `alessandro`이고 4개의 선물을 받습니다. 따라서 4를 return 해야 합니다.

**입출력 예 #3**

`a`와 `b`, `a`와 `c`, `b`와 `c` 사이에 서로 선물을 주고받은 수도 같고 세 사람의 선물 지수도 0으로 같아 다음 달엔 아무도 선물을 받지 못합니다. 따라서 0을 return 해야 합니다.

### 📔 나의 알고리즘 순서
1) 이번달 선물 내역을 정리하여 누가 누구에게 선물 했는지 정리한다.  
2) 선물 공식을 이용하여 다음달에 누가 누구에게 선물 해야는지 정리한다.  
  2-1) 서로 주고 받은 기록이 있다면, 선물을 더 많이 준 사람이 받음  
  2-2) 기록이 없거나, 주고 받은 횟수가 같다면 선물지수가 더 큰 사람이 받음 (※ 선물지수: 선물한 수 - 선물 받은 수)  
  2-3) 선물지수마저 같다면 서로 주고 받지 않음  
3) 제일 선물을 많이 받은 사람의 선물 받은 양을 반환한다.  

### ✅ 나의 해답코드
```javascript
function solution(friends, gifts) {  
    const users = {}
    friends.forEach(id => {
       users[id] = {gifter: {}, take: 0, give: 0, next: 0}
    });
    
    gifts.forEach(log => {
        const [giverId, takerId] = log.split(' ');
        const giver = users[giverId];
        const taker = users[takerId];
        
        taker.gifter[giverId] = (taker.gifter[giverId] || 0) + 1;
        giver.give += 1;
        taker.take += 1;
    });
    
    for(let i = 0; i < friends.length; i++) {
        for(let j = i+1 ; j < friends.length; j++) {
            const [tid, fid] = [friends[i], friends[j]];
            const target = users[tid];
            const friend = users[fid];
            
            const take = target.gifter[fid] || 0;
            const give = friend.gifter[tid] || 0;
            
            if(take > give) {
                friend.next += 1;
            }else if (take < give) {
                target.next += 1;
            }else {
                const tGiftRate = target.give - target.take;
                const fGiftRate = friend.give - friend.take;
                if(tGiftRate > fGiftRate) {
                    target.next += 1;
                }else if (tGiftRate < fGiftRate) {
                    friend.next += 1;
                }
            }
        }
    }
    
    return Math.max(...Object.values(users).map(user => user.next));
}
```

### 📝고민한점 & 💡배운점
1\) 🤔 처음에는 아래와 같이 이중 반복문을 통해 각 사람별로 선물 공식을 계산하도록 만들었다. 문제는 `A` 사람이 `B`사람에 대해 처리하는 경우와 `B`사람이 `A`에 대해 처리하는 경우가 결국 같은 처리를 진행하므로 중복 처리가 진행된다. 때문에 결과를 반환할 때 선물 받은 횟수를 반으로 줄이는 작업을 추가적으로 진행해야 했다.

```js
friends.forEach(tid => {
    const target = users[tid];
    friends.forEach(fid => {
        if(tid === fid) return;

        const friend = users[fid];
        const take = target.gifter[fid] || 0;
        const give = friend.gifter[tid] || 0;
      
        if(take > give) {
            friend.next += 1;
        }else if (take < give) {
            target.next += 1;
        }else {
            const tGiftRate = target.give - target.take;
            const fGiftRate = friend.give - friend.take;
            if(tGiftRate > fGiftRate) {
                target.next += 1;
            }else if (tGiftRate < fGiftRate) {
                friend.next += 1;
            }
        }
    });
});
    
return Math.max(...Object.values(users).map(user => user.next)) / 2;
```

하지만 같은 처리를 2번씩 진행하는 것은 비효율적이기 때문에 이를 제거하는 방법이 뭐가 있을지 고민하게 되었다. 

2\) 💡2번의 문제를 고민하던 중 흡사 별찍기 문제와 유사하다는 생각이 들었다. 아래의 도표를 살펴보면 무슨 의미인지 이해할 수 있으리라 생각한다.

||muzi|ryan|frodo|neo|
|:---|:---|:---|:---|:---|
|muzi|-|O|O|O|
|ryan|-|-|O|O|
|frodo|-|-|-|O|
|neo|-|-|-|-|

이처럼 이미 연산이 끝난 대상을 제외하고 남은 사람들끼리 지속적으로 비교하면 중복 연산을 제거할 수 있다. 이를 바탕으로 코드를 수정한 결과가 아래의 코드이다.

```js
for(let i = 0; i < friends.length; i++) {
    for(let j = i+1 ; j < friends.length; j++) {
        const [tid, fid] = [friends[i], friends[j]];
        const target = users[tid];
        const friend = users[fid];

        const take = target.gifter[fid] || 0;
        const give = friend.gifter[tid] || 0;

        if(take > give) {
            friend.next += 1;
        }else if (take < give) {
            target.next += 1;
        }else {
            const tGiftRate = target.give - target.take;
            const fGiftRate = friend.give - friend.take;
            if(tGiftRate > fGiftRate) {
                target.next += 1;
            }else if (tGiftRate < fGiftRate) {
                friend.next += 1;
            }
        }
    }
}
```

테스트 결과 시간이 단축되었음을 확인할 수 있었다.