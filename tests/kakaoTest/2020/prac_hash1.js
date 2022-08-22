function solution(participant, completion) {
    var answer = [];

    participant.sort();
    completion.sort();

    participant.map((value, idx) => {
        if (value !== completion[idx]) {
            answer.push(value);

            return;
        }
    });
    return answer[0];
}

console.log(solution(["a", "m", "m", "s"], ["a", "m" , "s"]));
