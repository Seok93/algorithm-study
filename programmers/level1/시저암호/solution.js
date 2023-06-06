function solution(s, n) {
  const UPPER_A_ASCII = 65;
  const LOWER_A_ASCII = 97;
  const ALPABAT_COUNT = 26;

  return [...s]
    .map((c) => {
      const UPPER_REGEX = /[A-Z]/;
      const LOWER_REGEX = /[a-z]/;

      let code = c.charCodeAt();
      if (UPPER_REGEX.test(c)) {
        code = ((code + n - UPPER_A_ASCII) % ALPABAT_COUNT) + UPPER_A_ASCII;
      } else if (LOWER_REGEX.test(c)) {
        code = ((code + n - LOWER_A_ASCII) % ALPABAT_COUNT) + LOWER_A_ASCII;
      }
      return String.fromCharCode(code);
    })
    .join('');
}
