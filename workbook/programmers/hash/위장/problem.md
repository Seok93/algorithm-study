## 해쉬
프로그래머스 코딩테스트 연습 [Level2 **위장** 문제](https://programmers.co.kr/learn/courses/30/lessons/42578) 

### 문제 설명
스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

|종류|이름|
|:---|:---|
|얼굴|동그란 안경, 검정 선글라스|
|상의|파란색 티셔츠|
|하의|청바지|
|겉옷|긴 코트|

스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

### 제한사항
- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
- 스파이는 하루에 최소 한 개의 의상은 입습니다.

### 입출력 예
|clothes|return|
|:---|:---|
|[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]	|5|
|[["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]|3|

### 입출력 예 설명
예제 #1   
headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.
```
1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses
```
예제 #2   
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.
```
1. crow_mask
2. blue_sunglasses
3. smoky_makeup
```
### 개인적인 문제 해설 순서
> 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

조합 문제임으로 모든 경우의 수를 구하기 위해 선택사항의 개수를 모두 곱해서 구해야한다고 생각했다.

> 제한사항) 스파이는 하루에 최소 한 개의 의상은 입습니다.

의상을 카테고리별로 구분하고, 각 카테고리별 개수를 구하여 옷의 조합할 수 있는 모든 케이스를 구한 후, 아무것도 입지 않는 케이스를 빼줘야 한다고 생각했다.

### 알고리즘 순서
1\) 옷을 카테고리별로 분류한다. (제한사항에 같은 이름을 가진 의상은 존재하지 않습니다.가 명시 되어 있으므로  개수를 바로 더해준다.)   
2\) 카테고리별 옷 가짓수들을 모두 곱해 모든 조합을 구하고, 아무것도 입지 않는 케이스를 하나 빼준다. 

### 해답코드
```python
def solution(clothes):
    closet = {}

    for cloth, cloth_type in clothes:
        if cloth_type not in closet:
            closet[cloth_type] = 1
        else:
            closet[cloth_type] += 1

    case = 1;
    for num in closet.values():a
        case *= num + 1;

    return case - 1;
```
```js
function solution(clothes) {
    let answer = 1;
    let categories = new Map();

    for(let [name, type] of clothes) {
        if(categories.has(type)) {
            categories.set(type, categories.get(type)+1);
        }else {
            categories.set(type, 1);
        }
    }

    for(let value of categories.values()) {
        answer *= value + 1;
    }
    answer -= 1

    return answer;
}
```