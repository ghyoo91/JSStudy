function solution(k, rates) {
    const len = rates.length;
    const dollar = new Array(len);
    const money = new Array(len);

    money[0] = k;

    for (let i = 0; i < len; i++) {
        if (rates[i] <= rates[i + 1]) {
            if (money[i] >= rates[i]) {
                dollar[i] = 1;
                money[i] = money[i] - rates[i];
            }
        } else {
            if (dollar[i]) {
                dollar[i] = 0;
                money[i] = money[i] + rates[i];
            }
        }
        dollar[i + 1] = dollar[i];
        money[i + 1] = money[i];
    }


    return money[len - 1];
}

console.log(solution(1000, [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100]));
console.log(solution(1500, [1500, 1400, 1300, 1200]));
