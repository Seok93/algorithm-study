function solution(numbers) {
  return numbers.map((number) => {
    const binary = ['0', ...number.toString(2)];
    for (let i = binary.length; i >= 0; i--) {
      if (binary[i] === '0') {
        binary[i] = '1';
        if (binary.length > i + 1) binary[i + 1] = '0';
        break;
      }
    }
    return parseInt(binary.join(''), 2);
  });
}
