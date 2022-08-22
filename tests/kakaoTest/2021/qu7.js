function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return n > 1;
}

function solution(n, k) {
    let answer = -1;

    const p = n.toString().split("0");

    console.log(p);


    return answer;
}

// console.log(solution(437674, 3));
console.log(solution(110011, 10));
