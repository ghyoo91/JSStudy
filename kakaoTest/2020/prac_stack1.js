function solution(bridge_length, weight, truck_weights) {
    const bri = [];
    const bri_time = [];
    let answer = 0;

    function cntArr(arr) {
        let cnt = 0;

        arr.forEach(val => {
            if (val > -1 && val < bridge_length) {
                cnt++;
            }
        })

        return cnt;
    }

    function insertOrNot() {
        const sum = bri.reduce((sum, a) => {
            return sum + a;
        }, 0);
        const cnt = cntArr(bri_time);

        if ((sum + truck_weights[0] <= weight) && (cnt < bridge_length)) {
            return true;
        } else {
            return false;
        }
    }

    function insertNew() {
        const val = truck_weights.shift();

        bri.push(val);
        bri_time.push(1);
    }

    while(true) {
        answer++;

        if (bri.length === 0) {
            insertNew();
        } else {
            for (let i=0; i<bri_time.length; i++) {
                if (bri_time[i] === bridge_length) {
                    bri_time[i] = -1;
                    bri.shift();
                } else {
                    if (bri_time[i] !== -1) {
                        bri_time[i]++;
                    }
                }
            }

            if (insertOrNot()) {
                insertNew();
            }
        }
        console.log(answer);
        console.log(bri);
        console.log(bri_time);

        if ((truck_weights.length === 0) && (bri.length === 0)) {
            break;
        }
    }

    return answer;
}

//console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
//console.log(solution(100, 100, [10]));
console.log(solution(2, 10, [7, 4, 5, 6]));
//console.log(solution(4, 2, [1,1,1,1]));
//console.log(solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1]));
