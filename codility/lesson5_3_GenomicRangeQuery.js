//Original Question : https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

function minArr(arr, start, end) {
    let tmp = 100000;

    for(let i=start;i<end+1;i++) {
        if(tmp > arr[i]){
            tmp = arr[i];
        }
    }

    return tmp;
}

function solution(S, P, Q) {
    let factor = {
        A: 1,
        C: 2,
        G: 3,
        T: 4
    };
    let querylen = P.length;
    let factorlen = Object.keys(factor).length+1;
    let s2 = [];  let cnt = [];  let calc = [];
    let result = [];

    cnt = new Array(factorlen).fill(0);
    for(let j=0;j<factorlen;j++) {
        calc[j] = new Array(S.length).fill(0);
    }

    for(let i=0; i<S.length; i++) {
        s2[i] = factor[S[i]];
        cnt[s2[i]]++;
        for(let j=1; j<factorlen; j++) {
            calc[j][i] = cnt[j];
        }
    }

    for(let i=0;i<P.length; i++) {
        let start = P[i]; let end = Q[i];

        if(start === 0){
            for(let j=1; j<factorlen; j++) {
                if(calc[j][end] > 0){
                    result[i] = j;
                    break;
                }
            }
        } else {
            for(let j=1; j<factorlen; j++) {
                if(calc[j][end]-calc[j][start-1] > 0){
                    result[i] = j;
                    break;
                }
            }
        }
    }

    return result;
}

(function() {
    //result = [2,4,1]
    //let S = "CAGCCTA"; let P = [2, 5, 0]; let Q = [4, 5, 6];

    //let S = "TC";  let P = [0, 0, 1];  let Q = [0, 1, 1];
    //let S = "C"; let P = [0]; let Q=[0];

    //result=[1,1,2]
    let S = "AC"; let P = [0,0,1]; let Q = [0,1,1];

    console.log(solution(S, P, Q));
}());
