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
