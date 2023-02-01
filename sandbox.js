'use strict'
let play = document.getElementById('last');
let displayResult = document.querySelector('.result')
let player1 = document.getElementById("home-btn");
let player2 = document.getElementById("guest-btn")
let homeCount = 0;
let guestCount = 0;


function randomPts() {
    let random = Math.ceil(Math.random() * 10);
    player1.innerText = random
    let random2 = Math.ceil(Math.random() * 10);
    player2.innerText = random2


    if (random > random2) {
         displayResult.innerText = 'PLAYER 1 WINS🎖️'
         

    }else if (random == random2) {
        displayResult.innerText = 'DRAW'
    } 
    else {
        displayResult.innerText = 'PLAYER 2 WINS🥇'
    }
}
play.addEventListener('click', randomPts)

