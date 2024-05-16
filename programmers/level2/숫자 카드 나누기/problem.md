### 🔍 문제 링크
[Level2 **숫자 카드 나누기** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/135807)

### 📘 문제 설명
철수와 영희는 선생님으로부터 숫자가 하나씩 적힌 카드들을 절반씩 나눠서 가진 후, 다음 두 조건 중 하나를 만족하는 가장 큰 양의 정수 a의 값을 구하려고 합니다.

1. 철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
2. 영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a

예를 들어, 카드들에 10, 5, 20, 17이 적혀 있는 경우에 대해 생각해 봅시다. 만약, 철수가 [10, 17]이 적힌 카드를 갖고, 영희가 [5, 20]이 적힌 카드를 갖는다면 두 조건 중 하나를 만족하는 양의 정수 a는 존재하지 않습니다. 하지만, 철수가 [10, 20]이 적힌 카드를 갖고, 영희가 [5, 17]이 적힌 카드를 갖는다면, 철수가 가진 카드들의 숫자는 모두 10으로 나눌 수 있고, 영희가 가진 카드들의 숫자는 모두 10으로 나눌 수 없습니다. 따라서 철수와 영희는 각각 [10, 20]이 적힌 카드, [5, 17]이 적힌 카드로 나눠 가졌다면 조건에 해당하는 양의 정수 a는 10이 됩니다.

철수가 가진 카드에 적힌 숫자들을 나타내는 정수 배열 `arrayA`와 영희가 가진 카드에 적힌 숫자들을 나타내는 정수 배열 `arrayB`가 주어졌을 때, 주어진 조건을 만족하는 가장 큰 양의 정수 a를 return하도록 solution 함수를 완성해 주세요. 만약, 조건을 만족하는 a가 없다면, 0을 return 해 주세요.

### 📕 제한사항
- 1 ≤ `arrayA`의 길이 = `arrayB`의 길이 ≤ 500,000
- 1 ≤ `arrayA`의 원소, `arrayB`의 원소 ≤ 100,000,000
- `arrayA`와 `arrayB`에는 중복된 원소가 있을 수 있습니다.


### 📙 입출력 예
|arrayA|arrayB|result|
|:---|:---|:---|
|[10, 17]|[5, 20]|0|
|[10, 20]|[5, 17]|10|
|[14, 35, 119]|[18, 30, 102]|7|


### 📒 입출력 예 설명
**입출력 예 #1**  
문제 예시와 같습니다.

**입출력 예 #2**  
문제 예시와 같습니다.

**입출력 예 #3**  
철수가 가진 카드에 적힌 숫자들은 모두 3으로 나눌 수 없고, 영희가 가진 카드에 적힌 숫자는 모두 3으로 나눌 수 있습니다. 따라서 3은 조건에 해당하는 양의 정수입니다. 하지만, 철수가 가진 카드들에 적힌 숫자들은 모두 7로 나눌 수 있고, 영희가 가진 카드들에 적힌 숫자는 모두 7로 나눌 수 없습니다. 따라서 최대값인 7을 return 합니다.

### 📔 나의 알고리즘 순서
1. 유클리드 호제법을 이용하여 arrayA와 arrayB의 최대 공약수를 찾는다.
2. 각각의 최대 공약수가 서로를 나눌 수 있는지 확인한다.
3. 문제 설명의 조건을 충족하는 숫자 중 최대값을 반환한다.

### ✅ 나의 해답코드
```javascript
function solution(arrayA, arrayB) {
  let max = 0;

  const gcd = (a, b) => {
    const r = a % b;
    if (r === 0) return b;
    return gcd(b, r);
  };

  const findGcdInArray = (array) => {
    let arrayGcd = array[0];
    for (let i = 1; i < array.length; i++) {
      arrayGcd = gcd(array[i], arrayGcd);
    }
    return arrayGcd;
  };

  const isDivisiable = (array, num) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % num === 0) return true;
    }
    return false;
  };

  let gcdA = findGcdInArray(arrayA);
  let gcdB = findGcdInArray(arrayB);
  if (!isDivisiable(arrayA, gcdB)) max = Math.max(...[max, gcdB]);
  if (!isDivisiable(arrayB, gcdA)) max = Math.max(...[max, gcdA]);

  return max;
}
```

### 🤔고민한점 & 💡배운점
1\) 🤔 문제를 읽고 각각의 배열에 모여있는 숫자들을 모두 나눌 수 있는 숫자는 공통 인수를 찾으면 된다고 생각했다. 문제는 1차 풀이 당시에 유클리드 호제법을 생각하지 못하고, 각각의 숫자를 직접 나눠 인수를 구하고, 공통 인수를 추려내는 과정을 거쳤다.

그래서 아래와 같이 소수를 찾는 함수(`isPrime`)와 메모이제이션, 그리고 인수를 찾기 위한 함수(`findCommonFactor`)를 정의하고 찾도록 만들었다. 

```js
function solution(arrayA, arrayB) {
  let max = 0;

  const primes = [];
  const isPrime = (num) => {
    if (primes.includes(num)) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    primes.push(num);
    return true;
  };

  const findCommonFactor = (array) => {
    let commonFactor = null;
    array.forEach((num) => {
      const factor = new Map();
      while (num > 1) {
        if (isPrime(num)) {
          factor.set(num, (factor.get(num) || 0) + 1);
          break;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            num /= i;
            factor.set(i, (factor.get(i) || 0) + 1);
            break;
          }
        }
      }

      if (commonFactor === null) return (commonFactor = factor);
      [...commonFactor.keys()].forEach((num) => {
        const cNum = commonFactor.get(num);
        const fNum = factor.get(num);
        if (!fNum) commonFactor.delete(num);
        if (fNum < cNum) commonFactor.set(num, fNum);
      });
    });
    const result = [...commonFactor.entries()].reduce(
      (result, value) => result * value[0] * value[1],
      1
    );
    return result === 1 ? 0 : result;
  };

  const isDivisiable = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % num === 0) return true;
    }
    return false;
  };

  const aFactor = findCommonFactor(arrayA);
  const bFactor = findCommonFactor(arrayB);
  if (!isDivisiable(arrayB, aFactor) && max < aFactor) max = aFactor;
  if (!isDivisiable(arrayA, bFactor) && max < bFactor) max = bFactor;

  return max;
}
```

위와 같이 풀이 했을 때, 시간초과가 발생했다. 아무래도 인수를 찾는 함수에서 순차적으로 숫자를 증가시키면서 인수를 찾는 로직이 방해가 되었던 것 같다. 이후에 개선 방안을 생각하던 중 최대 공약수를 위해 유클리드를 사용하면 한결 수월해진다는 것을 깨달았고, 유클리드 호제법으로 수정하여 문제를 해결했다.

### 🔍참고 내용
1. [Khan Academy ](https://ko.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm)