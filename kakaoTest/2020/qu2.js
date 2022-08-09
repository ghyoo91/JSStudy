function solution(orders, course) {
    const finalResult = [];
    const courseResult = [];
    const courseNum = [];
    let possibleOrder = [];

    for (let i = 0; i < course.length; i++) {
        courseResult[i] = [];
        courseNum[i] = [];
    }

    orders.forEach(order => {
        const sortedOrder = order.split("").sort();
        const len = sortedOrder.length;
        let result = [];
        let idx = 0;

        while(idx < len) {
            const char = sortedOrder[idx];
            const tmps = [char];

            for (let i = 0; i < result.length; i++) {
                tmps.push((result[i] || "") + char);
            }
            result = [...result, ...tmps];
            idx++;
        }
        possibleOrder = [...possibleOrder, ...result];
    });

    for (x in possibleOrder) {
        const val = possibleOrder[x];
        const idx = course.indexOf(val.length);

        if (idx !== -1) {
            const checkPreIdx = courseResult[idx].indexOf(val);

            if (checkPreIdx === -1) {
                courseResult[idx].push(val);
                courseNum[idx].push(1);
            } else {
                courseNum[idx][checkPreIdx]++;
            }
        }
    }

    for (x in courseNum) {
        const max = Math.max(...courseNum[x]);

        if (max > 1) {
            for (let i = 0; i < courseNum[x].length; i++) {
                if (courseNum[x][i] === max) {
                    finalResult.push(courseResult[x][i]);
                }
            }
        }
    }

    return finalResult.sort();
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]));
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]));
console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4]));
//console.log(solution(["ABCD", "AB"], [2,3,4]));
