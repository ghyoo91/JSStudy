var loc1 = Math.floor(Math.random()*5);
var loc2 = loc1+1;
var loc3 = loc1+2;
var guess;
var hits=0;
var guesses=0;
var isSunk = false;

while(isSunk == false){
    guess = prompt("준비, 조준, 발사! (0에서 6까지 중 추측한 숫자를 입력하세열)");
    if(guess < 0 || guess > 6){
        alert("올바른 번호를 입력하세열");
    }
    else if(guess == "e"){
        guesses = 99999;
        break;
    }
    else{
        guesses++;
        if(guesses == loc1 || guesses == loc2 || guesses == loc3){
            alert("명중~");
            hits++;
            if(hits == 3){
                isSunk = true;
                alert("전함 침몰~");
            }
        }
        else{
            alert("못맞춤여 ㅋ");
        }
    }

}
alert("전함격침을 위해 당신이 발사한 총 횟수 : "+guesses+"번!!!\n"+"따라서 명중률은 다음과 같습니다 : "+(3/guesses)+"랍니다!");
