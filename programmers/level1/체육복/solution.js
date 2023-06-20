function solution(n, lost, reserve) {
  const students = Array(n).fill(1);

  lost.forEach((target) => (students[target - 1] -= 1));
  reserve.forEach((target) => (students[target - 1] += 1));

  students.forEach((cloth, idx) => {
    if (cloth === 0) {
      if (students[idx - 1] >= 2) {
        students[idx - 1] -= 1;
        students[idx] += 1;
      } else if (students[idx + 1] >= 2) {
        students[idx + 1] -= 1;
        students[idx] += 1;
      }
    }
  });

  return students.filter((cloth) => cloth > 0).length;
}
