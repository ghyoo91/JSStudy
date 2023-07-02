function time_solution(string: string):void {
    const start = Date.now();

    console.log(solution(string));

    const end = Date.now();

    console.log(`${end - start} ms`);
}

function solution(string: string):boolean {
    let str : string[] = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/^[0-9a-zA-Z]$/)) {
            str.push(string[i].toLowerCase());
        }
    }

    for (let i = 0; str.length > 1; i++) {
        if (str.pop() != str.shift()) {
            return false;
        }
    }

    return true;
}

time_solution("A man, a plan, a canal: Panama");
time_solution("race a car");

export default solution;
