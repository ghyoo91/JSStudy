function solution(board, r, c) {
    let card = [[], [], [], []];
    let answer = 0;

    for(let i=0;i<4;i++) {
        for(let j=0;j<4;j++){
            if (board[i][j] !== 0) {
                card[board[i][j]].push([i, j]);
            }
        }
    }

    console.log(card);

    return answer;
}

console.log(solution([[3,0,0,2],[0,0,1,0],[0,1,0,0],[2,0,0,3]], 0, 1));
