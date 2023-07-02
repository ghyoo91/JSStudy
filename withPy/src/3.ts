function time_solution(string: Array<string>):void {
    const start = Date.now();

    console.log(solution(string));

    const end = Date.now();

    console.log(`${end - start} ms`);
}

function solution(strings: Array<string>):Array<string> {
    const letters = [];
    const numbers = [];

    for (let str of strings) {
        if (isNaN(Number(str.split(" ")[1]))) {
            letters.push(str);
        } else {
            numbers.push(str);
        }
    }

    letters.sort((a, b) => {

        return b.split(" ") - a;
    });

    //numbers sort

    return letters.concat(numbers);
}

time_solution(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]);

export default solution;
