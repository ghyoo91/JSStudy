function solution(string) {
    const result = [];
    const len = string.length;
    let iter = 0;

    //result.push(string[iter]);

    while (iter < len) {
        const resultLen = result.length;

        for (let i = 0; i < resultLen; i++) {
            result.push(`${result[i] + string[iter]}`);
        }

        iter++;
    }
    return result;
}

console.log(solution("ABCD"));
