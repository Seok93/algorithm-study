## ✨ 문제 풀이 중 어렵게 느낀 부분
### 1. 객체는 순서를 보장하는가? 에 대한 궁금증
[Deep Dive 블로그](https://poiemaweb.com/js-object#11-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0)

배열과는 달리 객체는 프로퍼티를 열거할 때 순서를 보장하지 않는다.

[스택오버플로우 - Does JS guarantee object property order?](https://stackoverflow.com/questions/5525795/does-javascript-guarantee-object-property-order/38218582#38218582)

> The iteration order for objects follows a certain set of rules since ES2015, but it does not (always) follow the insertion order. 

객체의 반복 순서는 ES2015 이후 특정한 규칙 세트를 따르게 되었지만, 항상 삽입한 순서를 따르지는 않는다.

> Simply put, the iteration order is a combination of the insertion order for strings keys, and ascending order for number-like keys

반복 순서는 문자열 키의 삽입 순서와 숫자 유사 키의 오름차순의 조합입니다.

> Using an array or a Map object can be a better way to achieve this. Map shares some similarities with Object and guarantees the keys to be iterated in order of insertion, without exception

**순서를 보장 받는 좋은 방법으로써 배열과 Map 객체를 사용하는 것이 좋다. Map은 Object와 몇가지 유사점을 공유하고, 예외 없이 삽입한 순서와 함께 key의 순서를 보장한다.**


### 2. 객체가 순서를 보장한다면, 객체 내부의 요소를 재배치해 나열하는 방법이 있는가? 에 대한 궁금증
객체는 순서를 보장하지 않으므로, 순서를 보장 받도록 나열하고 싶으면 Map객체나 배열을 사용할 것을 권장한다.

### 3. Object ⇔ Array 상호 변환 방법에 대한 궁금증
[Object를 Array로 변환하는 방법](https://www.sizplay.dev/TIL/object%EB%A5%BC-array%EB%A1%9C-%EB%B3%80%ED%99%98-%EB%B0%A9%EB%B2%95/)   
[배열을 객체로 변환하는 방법](https://choisuhyeok.tistory.com/65)   
[Javascript - object와 array 타입 변환 / 일부 값만 뽑아오기](https://guiyomi.tistory.com/126)

**1\) Object ⇒ Array**
```js
// Object의 내장 함수를 사용하면 Array로 변환할 수 있다.
// Object.keys(), Object.values(), Object.entries() 함수 사용
const bag = {
  small: 'handbag',
  medium: 'backpack',
  large: 'carrier',
};

// keys(), values() 함수는 1차원 배열로 나온다.
const keys = Object.keys(bag);
const values = Object.values(bag);
console.log(keys);      // ['small', 'medium', 'large']
console.log(values);    // ['handbag', 'backpack', 'carrier']

// entries() 함수는 2차원 배열로 나온다.
const keyNvalues = Object.entries(bag);
console.log(keyNvalues); // [['small', 'handbag'], ['medium', 'backpack'], ['large', 'carrier']]
```   

**2\) Array ⇒ Object**
```js
// 1. Object의 내장 함수를 사용하여 Array를 Object로 변환할 수 있다.
// Object.assign(), Object.fromEntries() 함수 사용

// assign() 함수를 통해 1차원 배열을 객체로 변환한다. key로 index가 들어가 유사 배열 객체가 된다.
const arr1 = ['small', 'medium', 'large'];
const obj1 = Object.assign({}, arr1); // { 0: 'small', 1: 'medium', 2: 'large'};

// fromEntries() 함수를 통해 2차원 배열을 객체로 변경한다.
const arr2 = [['small', 'handbag'], ['medium', 'backpack'], ['large', 'carrier']];
const obj2 = Object.fromEntries(arr2); // {small: 'handbag', medium: 'backpack', large: 'carrier'}

// 2. array.reduce()를 사용하는 방법
const array = ['a', 'b', 'c']

array.reduce(function(object, value, index) {
  object[index] = value;
  return object;
}, {}) // {0: 'a', 1: 'b', 2: 'c'}

// 3. spread 연산자를 사용하는 방법ㅂ
const arr = ['a', 'b', 'c'];

const obj = {...arr};

console.log(obj); // {0: 'a', 1: 'b', 2: 'c'}
```

### 4. Map ⇔ Array 상호 변환 방법에 대한 궁금증
[How to convert Map Values to an Array in JavaScript](https://bobbyhadz.com/blog/javascript-convert-map-values-to-array)   
[Convert an Array of Objects to a Map in JavaScript](https://bobbyhadz.com/blog/javascript-convert-array-of-objects-to-map)

**1\) Map ⇒ Array**
```js
// 1.Map.values() 함수와 Array.from() 함수를 사용하는 방법
// Map.values() 함수는 Map 객체에서 삽입된 key 순서에 맞춰 value만 모아서 이터러블 객체를 반환해준다.
// Array.from() 함수는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

const values = Array.from(map.values());

console.log(values); // 👉️ ['John', 30]
console.log(values.length); // 👉️ 2

const keys = Array.from(map.keys()); // 👉️ ['name', 'age']

// 2. spread 연산자를 활용하는 방법
// spread 연산자는 객체, 배열 뿐만 아니라 이터러블 객체들 해체해주는 역할을 한다.
const map = new Map();
map.set('name', 'Tom');
map.set('age', 39);

const values = [...map.values()];

console.log(values); // 👉️ ['Tom', 39]
console.log(values.length); // 👉️ 2

const keys = [...map.keys()]; // 👉️ ['name', 'age']
```

**2\) Array ⇒ Map**
```js
// 1. Array.map() 함수를 사용하는 방법
// map 함수에서 entries의 형태([key, value])로 변경한다.
const arr = [
  {key: 'name', value: 'Tom'},
  {key: 'country', value: 'Chile'},
];

const map1 = new Map(
  arr.map(object => {
    return [object.key, object.value];
  }),
);

console.log(map1); // ️👉️ {'name' => 'Tom', 'country' => 'Chile'}

// 2. Array.forEach() 함수를 사용하는 방법
const arr = [
  {key: 'name', value: 'Tom'},
  {key: 'country', value: 'Chile'},
];

const map2 = new Map();

arr.forEach(object => {
  map2.set(object.key, object.value);
});

console.log(map2); // ️👉️ {'name' => 'Tom', 'country' => 'Chile'}
```

### 5. Map ⇔ Object 상호 변환 방법에 대한 궁금증
[Convert an Object to a Map in JavaScript](https://bobbyhadz.com/blog/javascript-convert-object-to-map)

**1\) Object ⇔ Map**
```js
// 1. Object.entries() 함수를 사용하는 방법
const obj = {
  id: 1,
  name: 'Fred',
};

// ✅ Convert Object to Map
const map1 = new Map(Object.entries(obj));
console.log(map1); // 👉️ {'id' => 1, 'name' => 'Fred'}

// ✅ Convert Map to Object
const objAgain = Object.fromEntries(map1);
console.log(objAgain); // 👉️ {id: 1, name: 'Fred'}
```