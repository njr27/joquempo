const $stoneButton = document.querySelector('.button-stone-player-1')
const $paperButton = document.querySelector('.button-paper-player-1')
const $scissorsButton = document.querySelector('.button-scissors-player-1')

const $stoneButton2 = document.querySelector('.button-stone-player-2')
const $paperButton2 = document.querySelector('.button-paper-player-2')
const $scissorsButton2 = document.querySelector('.button-scissors-player-2')

const $fieldPlayer1 = document.querySelector('.field-player-1')
const $fieldPlayer2 = document.querySelector('.field-player-2')

const $winnerTitle = document.querySelector('.winner-title')

const $scoreP1 = document.querySelector('.score-p1')
const $scoreP2 = document.querySelector('.score-p2')

const $buttonReset = document.querySelector('.button-reset')
const $buttonStart = document.querySelector('.button-start')

let scoreCountP1 = 0
let scoreCountP2 = 0

let movePlayer1 = ''
let movePlayer2 = ''
let gameResult = null

let gameStart = false

function verifyGame() {
    if (movePlayer1 == 'stone' && movePlayer2 == 'paper') {              
        gameResult = 2
    } else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors') {
        gameResult = 1
    } else if (movePlayer1 =='paper' && movePlayer2 == 'stone'){
        gameResult = 1
    }else if(movePlayer1 == 'paper' && movePlayer2 == 'scissors'){
        gameResult = 2
    }else if(movePlayer1 == 'scissors' && movePlayer2 == 'stone'){
        gameResult = 2
    }else if(movePlayer1 == 'scissors' && movePlayer2 == 'paper'){
        gameResult = 1
    }else if(movePlayer1 == movePlayer2){
        gameResult = 0
    }
}

function printGameResult(){

    if(gameResult == 0){
        $winnerTitle.innerHTML = '<div class="animation-score-title"> Empatou </div>'
    }else if(gameResult == 1){      
        $winnerTitle.innerHTML = 'Jogadora 1 ganhou'
    } else if(gameResult == 2){
    $winnerTitle.innerHTML = 'Jogadora 2 ganhou'
    }
}

function resetBattlefield(){
    $fieldPlayer1.innerHTML = ''
    $fieldPlayer2.innerHTML = ''
    $winnerTitle.innerHTML = 'Vencedor'
}

function resetMoveVariables(){
    movePlayer1 = ''
    movePlayer2 = ''
}

function resetScoreboard(){
    $scoreP1.innerHTML = '00'
    $scoreP2.innerHTML = '00'
}

function resetScoreVariables(){
    scoreCountP1 = 0
    scoreCountP2 = 0
}

function scorePrint(){
    if(gameResult == 1){
        if(scoreCountP1 < 10){
            $scoreP1.innerHTML = '<div class="animation-score">' +0+scoreCountP1 + '</div>'
        } else{
            $scoreP1.innerHTML = '<div class="animation-score">' +scoreCountP1 + '</div>'
        }
    }else if(gameResult == 2){
        if (scoreCountP2 < 10){
            $scoreP2.innerHTML = '<div class="animation-score">' +0+scoreCountP2 + '</div>'
        } else{
            $scoreP2.innerHTML = '<div class="animation-score">' +scoreCountP2 + '</div>'
        }
    }
}

function scoreCount(){
    if(gameResult == 1 ){        
    scoreCountP1++ 
    } else if(gameResult == 2){
       scoreCountP2++
    }
}

function move(moveName, movePlayer){
  if (gameStart){
    if(movePlayer == 1){
        $fieldPlayer1.innerHTML = '<img  class="move-img" src="'+moveName+'.png"/>'
        movePlayer1 = moveName
   }else if(movePlayer == 2){
        $fieldPlayer2.innerHTML = '<img  class="move-img-2" src="'+moveName+'.png"/>'
        movePlayer2 = moveName
   }
    verifyGame()
    printGameResult()
    if(gameResult != null){
        setTimeout(resetBattlefield, 2000)
        resetMoveVariables()
        scoreCount() 
        scorePrint()
        gameResult = null
    }
  }
}

$stoneButton.addEventListener('click', function () {
    move('stone', 1)
})

$paperButton.addEventListener('click', function () {
    move('paper', 1)
})

$scissorsButton.addEventListener('click', function () {
    move('scissors', 1)
})

$stoneButton2.addEventListener('click', function () {
    move('stone', 2)
})

$paperButton2.addEventListener('click', function () {
    move('paper', 2)
})

$scissorsButton2.addEventListener('click', function () {
    move('scissors', 2)
})

$buttonReset.addEventListener('click', function (){
    resetBattlefield()
    resetMoveVariables()
    resetScoreboard()
    resetScoreVariables()
    gameResult = null
    gameStart = false
    $buttonStart.innerHTML = '► Iniciar'
    $buttonStart.classList.remove('start')
})

$buttonStart.addEventListener('click', function(){
    gameStart = !gameStart
    $buttonStart.classList.toggle('start')

    if(gameStart){
        $buttonStart.innerHTML = '▌▌ Pausar'
    } else{
        $buttonStart.innerHTML = '► Iniciar'
    }
})