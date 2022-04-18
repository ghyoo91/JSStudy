function solution(fees, records) {
    const car = [];
    const time = [];
    const timeSorted = [];
    const isLeft = [];
    const lastTime = 23 * 60 + 59;
    const answer = [];
    let car2 = [];

    records.forEach(val => {
        const splited = val.split(" ");
        const timetmp = splited[0].split(":");
        const minute = timetmp[0] * 60 + timetmp[1] * 1;
        const name = splited[1];
        const idx = car.indexOf(name);

        if (idx !== -1) {
            if (isLeft[idx]) { // out 케이스
                time[idx][0] = time[idx][0] + minute - time[idx][1];
                time[idx][1] = 0;
                isLeft[idx] = false;
            } else { //in 케이스
                if (!time[idx]) {
                    time[idx] = [0, 0];
                }
                time[idx][1] = minute;
                isLeft[idx] = true;
            }
        } else {
            // 차가 없으면 반드시 in임
            car.push(name);
            time.push([0, minute]);
            isLeft.push(true);
        }
    });

    for (let i = 0; i< isLeft.length; i++) {
        if (isLeft[i] === true) {
            time[i][0] = time[i][0] + lastTime - time[i][1];
        }
    }

    car2 = car.slice();
    car2.sort((a, b) => (a * 1 - b * 1));

    for (let i = 0; i < car.length; i++) {
        const idx = car2.indexOf(car[i]);

        timeSorted[idx] = time[i][0];
    }

    for (let i = 0; i < timeSorted.length; i++) {
        if (timeSorted[i] <= fees[0]) {
            answer[i] = fees[1];
        } else {
            answer[i] = fees[1] + (Math.ceil((timeSorted[i] - fees[0]) / fees[2]) * fees[3]);
        }
    }

    return answer;
}

// console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]));
console.log(solution([120, 0, 60, 591], ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]));
// console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
