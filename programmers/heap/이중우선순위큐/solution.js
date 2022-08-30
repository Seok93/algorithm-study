function solution(operations) {
  var answer = [0, 0];
  const heap = [];

  operations.forEach((operation) => {
    const [command, data] = operation.split(' ');
    switch (command) {
      case 'I':
        heap.push(parseInt(data, 10));
        heap.sort((a, b) => b - a);
        break;
      case 'D':
        data === '1' ? heap.shift() : heap.pop();
        break;
      default:
        throw new Error('command is not exist');
    }
  });

  return [heap.shift() || 0, heap.pop() || 0];
}
