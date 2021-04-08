function solution(new_id) {
    let answer = new_id;

    answer = answer.toLowerCase().replace(/[^(a-z0-9\-_\.)]/g, "").replace(/\.{2,}/g,"\.");

    if (answer[answer.length - 1] === "\.") {
        answer = answer.slice(0, answer.length - 1);
    }

    if (answer[0] === "\." ) {
        answer = answer.slice(1);
    }

    if (answer.length === 0) {
        answer = "a";
    }

    if (answer.length >= 16) {
        answer = answer.slice(0, 15);

        if (answer[answer.length - 1] === ".") {
            answer = answer.slice(0, 14);
        }
    }

    if (answer.length <= 2) {
        const len = answer.length - 1
        const tt = answer[len];

        for (let i=0 ; len + i < 2; i++) {
            answer = answer + tt;
        }
    }

    return answer;
}

//console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("......y......."));
console.log(solution("abcdefghijklmn.p"));
