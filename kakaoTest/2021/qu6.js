function solution(board, skill) {
    let answer = 0;

    skill.forEach(val => {
        if (val[0] === 1) {
            for (let i = val[1]; i <= val[3]; i++) {
                for (let j = val[2]; j <= val[4]; j++) {
                    board[i][j] = board[i][j] - val[5];
                }
            }
        } else {
            for (let i = val[1]; i <= val[3]; i++) {
                for (let j = val[2]; j <= val[4]; j++) {
                    board[i][j] = board[i][j] + val[5];
                }
            }
        }
    });

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] > 0) {
                answer++;
            }
        }
    }

    return answer;
}

console.log(solution([[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]], [[1,0,0,3,4,4],[1,2,0,2,3,2],[2,1,0,3,1,2],[1,0,1,3,3,1]]));
console.log(solution([[1,2,3],[4,5,6],[7,8,9]], [[1,1,1,2,2,4],[1,0,0,1,1,2],[2,2,0,2,0,100]]));
