function solution(v) {
    var answer = [
        []
    ];
    var xs = [];
    var ys = [];

    for(var i = 0; i < 3; i++) {
        var x = v[i][0];
        var y = v[i][1];

        xs.push(x);
        ys.push(y);
    }

    if (xs[0] === xs[1]) {
        answer[0][0] = xs[2];
    } else {
        answer[0][0] = (xs[0] === xs[2]) ? xs[1] : xs[0];
    }

    if (ys[0] === ys[1]) {
        answer[0][1] = ys[2];
    } else {
        answer[0][1] = (ys[0] === ys[2]) ? ys[1] : ys[0];
    }

    return answer[0];
}

console.log(solution([[1, 4], [3, 4], [3, 10]]));
console.log(solution([[1, 1], [2, 2], [1, 2]]));
