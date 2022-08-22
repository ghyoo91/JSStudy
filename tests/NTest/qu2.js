/*

h	w	n	board	result
7	9	4	["111100000","000010011","111100011","111110011","111100011","111100010","111100000"]	10
5	5	5	["11111","11111","11111","11111","11111"]	12

바둑판의 세로크기 h, 가로크기 w, n목을 정의하는 숫자 n, 바둑판을 나타내는 배열 board가 주어졌을 때, n목의 개수를 return 하도록 solution 함수를 완성해 주세요.

제한사항
h, w, n은 4이상 1000이하인 자연수입니다.
board의 길이는 h입니다.
board의 원소는 길이가 w인 문자열입니다.
문자열은 0과 1로만 구성됩니다.
1은 돌이 놓인 칸을, 0은 돌이 없는 칸을 나타냅니다.

*/
function solution(h, w, n, board) {
    function garo() {
        let cnt = 0;

        function check(i, j, lev) {
            if (board[i][j] === '1') {
                lev++;

                if (lev === n) {
                    if (j === w-1) {
                        return true;
                    } else if (j-n < 0) {
                        if (board[i][j+1] === '0') {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        if ((board[i][j+1] === '0') && (board[i][j-n-1] === '0')) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                } else {
                    return check(i, j+1, lev);
                }
            } else {
                return false;
            }
        }

        for(let i=0;i<h;i++){
            for(let j=0;j<w-n+1;j++){
                if (board[i][j] === '1'){
                    if (check(i, j+1, 1)) {
                        cnt++;
                    }
                }
            }
        }

        return cnt;
    }

    function sero() {
        let cnt = 0;

        function check(i, j, lev) {
            if (board[i][j] === '1') {
                lev++;

                if (lev === n) {
                    if (i === h-1) {
                        return true;
                    } else if (i-n < 0) {
                        if (board[i+1][j] === '0') {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        if ((board[i+1][j] === '0') && (board[i-n-1][j] === '0')) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                } else {
                    return check(i+1, j, lev);
                }
            } else {
                return false;
            }
        }

        for(let i=0;i<h-n+1;i++){
            for(let j=0;j<w;j++){
                if (board[i][j] === '1'){
                    if (check(i+1, j, 1)) {
                        console.log(i, j);
                        cnt++;
                    }
                }
            }
        }

        return cnt;
    }

    function degak() {
        let cnt = 0;

        function check(i, j, lev) {
            if (board[i][j] === '1') {
                lev++;

                if (lev === n) {
                    if (j === w-1) {
                        return true;
                    } else if (j-n < 0) {
                        if (board[i][j+1] === '0') {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        if ((board[i][j+1] === '0') && (board[i][j-n-1] === '0')) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                } else {
                    return check(i, j+1, lev);
                }
            } else {
                return false;
            }
        }

        for(let i=0;i<h;i++){
            for(let j=0;j<w-n+1;j++){
                if (board[i][j] === '1'){
                    if (check(i, j+1, 1)) {
                        console.log(i, j);
                        cnt++;
                    }
                }
            }
        }

        return cnt;
    }

    return garo()+sero()+degak();
}
console.log(solution(7, 9, 4, ["111100000","000010011","111100011","111110011","111100011","111100010","111100000"]));
