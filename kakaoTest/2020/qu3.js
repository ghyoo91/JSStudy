function solution(info, query) {
    let candi = [];
    let queryT = [];
    let answer = [];

    info.map((element, idx) => {
        let cnt = 0;
        candi[idx] = element.split(" ").map(element => {
            cnt++;
            if (cnt%5 === 0) {
                return element;
            } else {
                return element.slice(0, 1);
            }
        });
    });

    query.map((element, idx) => {
        let cnt = 0;
        queryT[idx] = element.split(" ").map(element => {
            cnt++;
            if (cnt%8 === 0) {
                return element;
            } else {
                return element.slice(0, 1);
            }
        });
    });

    for(let i=0;i<queryT.length;i++) {
        for(let j=0;j<5;j++) {
            if (queryT[i][j] === "a") {
                queryT[i].splice(j, 1);
            }
        }
    }

    queryT.map((value, idx) => {
        let tmp = candi.slice();

        for(let i=0;i<tmp.length;i++) {
            for(let j=0;j<5;j++) {
                if (j === 4) {
                    if (value[4] * 1 > tmp[i][4] * 1) {

                        tmp.splice(i, 1);
                        i--;
                        break;
                    }
                } else {
                    if ((value[j] !== "-") && (value[j] !== tmp[i][j])) {
                        tmp.splice(i, 1);
                        i--;
                        break;
                    }
                }
            }
        }

        answer[idx] = tmp.length;
    });

    return answer;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));
