const KEYBORD_HAND = Object.freeze({
  1: 'L',
  3: 'R',
  4: 'L',
  6: 'R',
  7: 'L',
  9: 'R',
});
const KEYBORD_POS = Object.freeze({
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  '*': [3, 0],
  0: [3, 1],
  '#': [3, 2],
});

function solution(numbers, hand) {
  let result = '';
  let left = KEYBORD_POS['*'];
  let right = KEYBORD_POS['#'];

  function getDistance(start, end) {
    const [sr, sc] = start;
    const [er, ec] = end;
    return Math.abs(sr - er) + Math.abs(sc - ec);
  }

  function moveHand(target, usedHand = hand) {
    if (usedHand === 'right') {
      right = target;
      result += 'R';
    } else {
      left = target;
      result += 'L';
    }
  }

  numbers.forEach((number) => {
    const target = KEYBORD_POS[number];
    switch (KEYBORD_HAND[number]) {
      case 'L':
        moveHand(target, 'left');
        break;
      case 'R':
        moveHand(target, 'right');
        break;
      default:
        const lDist = getDistance(left, target);
        const rDist = getDistance(right, target);

        if (lDist > rDist) {
          moveHand(target, 'right');
        } else if (lDist < rDist) {
          moveHand(target, 'left');
        } else {
          moveHand(target);
        }
    }
  });

  return result;
}
