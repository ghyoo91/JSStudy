/*
table	result
["XOXO", "OXXO", "XXOX", "XOOO"]	2
["OXXO", "XOXO", "XXOO"]	3
["OXOXO", "OOOOO", "XOXOX"]	1

제한사항
table의 길이는 1 이상 8 이하입니다.
table의 원소는 각 상품의 항목별 보장 내용이 'O', 'X' 형태로 들어있는 문자열입니다.
각 문자열의 길이는 1 이상 8 이하입니다.
문자열은 'O'와 'X'로만 이루어져 있습니다.
'O'는 해당 항목에 대해 보장함을 나타내며, 'X'는 보장하지 않음을 나타냅니다.
모든 문자열의 길이는 같습니다.
모든 항목을 보장받도록 상품을 선택하는 방법이 항상 존재하는 경우만 입력으로 주어집니다.

모든 항목을 보장받으려면 보험을 최소한 몇 개 가입해야 하는지 return 하도록 solution 함수를 완성해주세요.
*/

function cover(arr) {
    const len = arr[0].length;
    let result = [];

    for(let i=0;i<len;i++) {
        result[i] = 0;
    }

    arr.forEach(val => {
        val.split("").map((ele, idx) => {
            if (ele === "O") {
                result[idx] = 1;
            }
        });
    });

    if (result.indexOf(0) != -1) {
        return false;
    } else {
        return true;
    }
}

function pick(lev, arr){
    const result = [];

    if (lev === 1) {
        arr.forEach(val => {
            result.push([val]);
        });
    } else {
        arr.forEach((val, idx) => {
            const rest = arr.slice(idx + 1);
            const restPick = pick(lev - 1, rest);
            const combi = restPick.map((ele) => {
                return [val, ...ele];
            });

            result.push(...combi);
        });
    }

    return result;
}

function solution(table) {
    const len = table[0].length;
    let lev = 1;

    while (lev < len) {
        let result = pick(lev, table);
        let finish = 0;

        result.forEach(val => {
            if(cover(val)) {
                finish = 1;
                return;
            }
        });

        if (finish === 1) {
            break;
        }

        lev++;
    }

    return lev;
}

console.log(solution(["XOXO", "OXXO", "XXOX", "XOOO"]));
//console.log(solution(["OXXO", "XOXO", "XXOO"]));
