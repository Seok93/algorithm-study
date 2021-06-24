function solution(str) {
    return str
        .split(' ')
        .map(i => parseInt(i))
        .sort((a,b) => a - b)
        .filter((item,idx, arr) => {
            if(idx === 0 || idx === arr.length - 1) return item;
        })
        .join(' ');
}