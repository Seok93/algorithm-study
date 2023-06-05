### 🔍 문제 링크
[Level **1차 다트 게임** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/17682)

### 📘 문제 설명


### 📕 제한사항


### 📙 입출력 예


### 📒 입출력 예 설명


### 📔 나의 알고리즘 순서


### ✅ 나의 해답코드
```javascript
function solution(dartResult) {
  const results = [];
  dartResult.match(/\d+\D+/g).forEach((command, index) => {
    const [, score, options] = command.match(/(\d+)(\D+)/);

    let result = 0;
    [...options].forEach((option) => {
      switch (option) {
        case 'S':
          result += Math.pow(Number(score), 1);
          break;
        case 'D':
          result += Math.pow(Number(score), 2);
          break;
        case 'T':
          result += Math.pow(Number(score), 3);
          break;
        case '*':
          if (index > 0) results[index - 1] *= 2;
          result = result * 2;
          break;
        case '#':
          result *= -1;
          break;
        default:
          throw new Error('Option Error');
      }
    });
    results.push(result);
  });

  return results.reduce((acc, value) => acc + value, 0);
}
```

### ✨ 깔끔한 해답코드
```javascript

```


### 📝고민한점 & 💡배운점
** 1\) 💡 **


** 2\) 🤔 **