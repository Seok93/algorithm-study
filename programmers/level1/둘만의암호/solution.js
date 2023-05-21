function solution(s, skip, index) {
  const A_ASCII = 97;
  const Z_ASCII = 122;

  const skipCode = [...skip].map((c) => c.charCodeAt(0));

  return [...s]
    .map((char) => {
      const result = [];
      let cnt = 0;
      let code = char.charCodeAt(0);

      while (index > cnt) {
        if (++code > Z_ASCII) code = A_ASCII;
        if (!skipCode.includes(code)) {
          result.push(code);
          cnt++;
        }
      }
      return String.fromCharCode(code);
    })
    .join('');
}
