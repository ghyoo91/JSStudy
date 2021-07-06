function solution(money, cost) {
    const len = cost.length;
    let answer = 0;

    for (let i = 0; i< len; i++) {
        let tmpCost = cost[i];

        if (tmpCost > money) {
            continue;
        } else {
            for (let j = i + 1; j < len; j++) {
                tmpCost += cost[j];

                if (tmpCost > money) {
                    const tmp = j - i;

                    answer = (tmp > answer) ? tmp : answer;
                    break;
                }
            }
        }
    }

    return answer;
}

console.log(solution(420, [0, 900, 0, 200, 150, 0, 30, 50]));
console.log(solution(100, [245, 317, 151, 192]));
