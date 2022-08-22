function solution(numbers, target) {
    let answer = 0;

    function dfs(node, level) {
        if (level === numbers.length) {
            console.log(`${level} : ${node} -----------${answer}`);
            const sum = node.reduce((sum, a) => {
                return sum + a;
            }, 0);

            if (sum === target) {
                answer++;
            }
        } else {
            node[level] = numbers[level];
            dfs(node, level + 1);

            node[level] = numbers[level] * (-1);
            dfs(node, level + 1);
        }
    }

    dfs([], 0);

    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
