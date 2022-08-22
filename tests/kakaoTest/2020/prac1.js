function solution(new_id) {
    let answer = new_id.toLowerCase();

    // 1, 2, 3
    answer = answer.toLowerCase().replace(/[^a-z0-9\-_\.]/g, "").replace(/\.{2,}/g, "\.");
    console.log(`3 : ${answer}`);

    // 4
    if (answer[0] === ".") {
        answer = answer.slice(1);
    }

    // 4
    if (answer[answer.length - 1] === ".") {
        answer = answer.slice(0, answer.length - 1);
    }
    console.log(`4 : ${answer}`);
    // 5
    if (answer.length === 0) {
        answer = "a";
    }
    console.log(`5 : ${answer}`);

    // 6
    if (answer.length >= 16) {
        answer = answer.slice(0, 15);

        if (answer[answer.length - 1] === ".") {
            answer = answer.slice(0, answer.length - 1);
        }
    }
    console.log(`6 : ${answer}`);

    // 7
    if (answer.length === 1) {
        answer = `${answer[0]}${answer[0]}${answer[0]}`;
    } else if (answer.length === 2) {
        answer = `${answer}${answer[1]}`;
    }

    return answer;
}

console.log(solution("-_.~!@#$%^&*()=+[{]}:?,<>/._-"));
