function isPrime(n) {
    const sqrtN = Math.sqrt(n);

    for (let i = 2; i <= sqrtN; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return n > 1;
}

function solution(n, k) {
    let answer = 0;

    const p = n.toString(k).split("0");

    p.forEach(val => {
        if (isPrime(val * 1)) {
            answer++;
        }
    });

    return answer;
}

console.log(solution(437674, 3));
// console.log(solution(110011, 10));
