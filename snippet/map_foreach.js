const util = require("util");

const forEachAsyncTime = async () => {
    const a = [[1,2,3,4,5],[11,12,13,14,15],[21,22,23,24,25],[31,32,33,34,35],[41,42,43,44,45]];
    const b = [];

    for (let i= 0; i< 5; i++) {
        b[i] = {
            id: `b${i}`,
            arr: [],
        };
        for (let j=0;j<5;j++) {
            b[i].arr.push({
                val: i,
                label: `Hee!! ${j}`,
            });
        }
    }

    for (const i of b) {
        let cnt = 0;
        for (const j of i.arr) {
            j.id = cnt++;
        }
    }

    /* await Promise.all(a.map(async val => {
        await Promise.all(val.map(async (val2, idx) => {
            val2 = `${val2} / ${idx}`;
            setTimeout(() => {
                val2 = val2 + idx;
                // console.log(val2);
            }, 1000);
        }));
        // console.log(aa);
        // console.log(`${val} is complete`);
    })); */


    console.log(util.inspect(b, {showHidden: false, depth: null, colors: true}));
};

forEachAsyncTime();

const forEachReturnUndefined = function() {
    var a = [1,2,3,4,5];

    var b = a.forEach( function(v, i){
        console.log(v);
        return v+1;
    });

    var c = a.map( function(v, i){
        console.log(v);
        return v+1;
    });

    console.log("b : "+b);
    console.log("c : "+c);

};

/* reduce기본 형태 : add(0,1)에서 계속해서 함수 중첩되는 형태
function add(acc, value) {
  return acc + value;
}
[1, 2, 3, 4, 5].reduce(add, 0);
*/

//reduce로 map과 filter구현
//filter -> 배열을 돌면서 각 원소에 대해 callback처리하고 결과값 참인애들만 리턴
function myfilter(arr, predicate) {
    return arr.reduce(function (xs, x) {
        if (predicate(x))
            xs.push(x);
        return xs;
    }, []);
}

//map -> 배열을 돌면서 각 원소에 대해 callback처리하고 결과값의 참, 거짓 여부에 상관없이 리턴
function mymap(arr, f) {
    return arr.reduce(function (xs, x) {
        xs.push(f(x));
        return xs;
    }, []);
}
