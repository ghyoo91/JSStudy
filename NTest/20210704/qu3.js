function isFull(board) {
    let cnt = 0;

    board.forEach(val => {
        if (val.indexOf(0) === -1) {
            cnt++;
        }
    });

    //console.log(cnt);
    //console.log(board);

    return cnt;
}

function clear(board) {
    const len = board.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (board[i][j] === 2) {
                board[i][j] = 0;
            }
        }
    }
}

function solution(block, board) {
    const len = board.length;
    let answer = 0;

    switch(block) {
        case 0:
            for (let i = 0; i < len - 2; i++) {
                for (let j = 0; j < len; j++) {
                    if (board[i][j] === 0 && board[i + 1][j] === 0 && board[i + 2][j] === 0) {
                        board[i][j] = 2;
                        board[i + 1][j] = 2;
                        board[i + 2][j] = 2;

                        const tmp = isFull(board);

                        answer = (answer < tmp) ? tmp : answer;
                        clear(board);
                    }
                }
            }
            break;
        case 1:
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len - 2; j++) {
                    if (board[i][j] === 0 && board[i][j + 1] === 0 && board[i][j + 2] === 0) {
                        board[i][j] = 2;
                        board[i][j + 1] = 2;
                        board[i][j + 2] = 2;

                        const tmp = isFull(board);

                        answer = (answer < tmp) ? tmp : answer;
                        clear(board);
                    }
                }
            }
            break;
        case 2:
            for (let i = 0; i < len - 1; i++) {
                for (let j = 0; j < len - 1; j++) {
                    if (board[i][j] === 0 && board[i + 1][j] === 0 && board[i + 1][j + 1] === 0) {
                        board[i][j] = 2;
                        board[i + 1][j] = 2;
                        board[i + 1][j + 1] = 2;

                        const tmp = isFull(board);

                        answer = (answer < tmp) ? tmp : answer;
                        clear(board);
                    }
                }
            }
            break;
        case 3:
            for (let i = 0; i < len - 1; i++) {
                for (let j = 0; j < len - 1; j++) {
                    if (board[i + 1][j] === 0 && board[i][j + 1] === 0 && board[i + 1][j + 1] === 0) {
                        board[i + 1][j] = 2;
                        board[i][j + 1] = 2;
                        board[i + 1][j + 1] = 2;

                        const tmp = isFull(board);

                        answer = (answer < tmp) ? tmp : answer;
                        clear(board);
                    }
                }
            }
            break;
        case 4:
            for (let i = 0; i < len - 1; i++) {
                for (let j = 0; j < len - 1; j++) {
                    if (board[i][j] === 0 && board[i][j + 1] === 0 && board[i + 1][j + 1] === 0) {
                        board[i][j] = 2;
                        board[i][j + 1] = 2;
                        board[i + 1][j + 1] = 2;

                        const tmp = isFull(board);

                        answer = (answer < tmp) ? tmp : answer;
                        clear(board);
                    }
                }
            }
            break;
        case 5:
            for (let i = 0; i < len - 1; i++) {
                for (let j = 0; j < len - 1; j++) {
                    if (board[i][j] === 0 && board[i][j + 1] === 0 && board[i + 1][j] === 0) {
                        board[i][j] = 2;
                        board[i][j + 1] = 2;
                        board[i + 1][j] = 2;

                        const tmp = isFull(board);

                        answer = (answer < tmp) ? tmp : answer;
                        clear(board);
                    }
                }
            }
            break;
    }

    return answer;
}

// console.log(solution(3, [[1,0,0,0],[1,0,0,1],[1,1,0,1],[1,1,0,1]]));
// console.log(solution(6, [[0,0,0], [0,0,0], [0,0,0]]));
console.log(solution(0, [[0,0,0,0],[1,1,0,1],[1,1,0,1], [1,1,0,1]]));
