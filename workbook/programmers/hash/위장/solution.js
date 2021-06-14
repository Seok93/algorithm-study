function solution(clothes) {
    let answer = 1;
    let categories = new Map();

    for(let [name, type] of clothes) {
        if(categories.has(type)) {
            categories.set(type, categories.get(type)+1);
        }else {
            categories.set(type, 1);
        }
    }

    for(let value of categories.values()) {
        answer *= value + 1;
    }
    answer -= 1

    return answer;
}