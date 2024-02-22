function solution(p) {
  const isCollect = (p) => {
    let count = 0;
    for (let target of p) {
      target === '(' ? count++ : count--;
      if (count < 0) return false;
    }
    return true;
  };

  const reverse = (str) => {
    return [...str.slice(1, str.length - 1)].map((c) => (c === '(' ? ')' : '(')).join('');
  };

  const check = (p) => {
    if (p.length <= 0) return '';

    let [lc, rc] = [0, 0];
    for (const c of p) {
      c === '(' ? lc++ : rc++;
      if (lc === rc) break;
    }

    const balance = lc + rc;
    const [u, v] = [p.slice(0, balance), p.slice(balance)];

    if (isCollect(u)) return u + check(v);
    else return '(' + check(v) + ')' + reverse(u);
  };

  return check(p);
}
