function solution(id_list, report, k) {
    const len = id_list.length;
    const arr = new Array(len);
    const ban = [];
    const answer = [];

    for (let i = 0; i < len; i++) {
        arr[i] = new Array(len);
        answer[i] = 0;
    }

    report.forEach(val => {
        let fir = id_list.indexOf(val.split(" ")[0]);
        let sec = id_list.indexOf(val.split(" ")[1]);

        if (!arr[fir][sec]) {
            arr[fir][sec] = 1;
        }
    });

    for (let i = 0; i < len; i++) {
        let cnt = 0;

        for (let j = 0; j < len; j++) {
            if (arr[j][i] === 1) {
                cnt++;
            }
        }

        if (cnt >= k) {
            ban.push(i);
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < ban.length; j++) {
            if (arr[i][ban[j]] === 1) {
                answer[i]++;
            }
        }
    }

    return answer;
}

// console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2));
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
