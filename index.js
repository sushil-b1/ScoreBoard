let scoreHo = document.getElementById("score-ho")
let scoreGu = document.getElementById("score-gu")
let countHome = 0
let countGuest = 0

function score1Home(){
    countHome += 1
    scoreHo.textContent = countHome
   
}

function score2Home(){
    countHome += 2
    scoreHo.textContent = countHome
}
function score3Home(){
    countHome += 3
    scoreHo.textContent = countHome
}






function score1Guest(){
    
    countGuest += 1
    scoreGu.textContent = countGuest
    

}

function score2Guest(){
    countGuest += 2
    scoreGu.textContent = countGuest
}
function score3Guest(){
    countGuest += 3
    scoreGu.textContent = countGuest
}