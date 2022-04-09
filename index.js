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


let $scoreCountP1 = 0
let $scoreCountP2 = 0

let $movePlayer1 = ''
let $movePlayer2 = ''
let $gameResult = null

function verifyGame() {
    if ($movePlayer1 == 'stone' && $movePlayer2 == 'paper') {              
        $gameResult = 2
    } else if ($movePlayer1 == 'stone' && $movePlayer2 == 'scissors') {
        $gameResult = 1
    } else if ($movePlayer1 =='paper' && $movePlayer2 == 'stone'){
        $gameResult = 1
    }else if($movePlayer1 == 'paper' && $movePlayer2 == 'scissors'){
        $gameResult = 2
    }else if($movePlayer1 == 'scissors' && $movePlayer2 == 'stone'){
        $gameResult = 2
    }else if($movePlayer1 == 'scissors' && $movePlayer2 == 'paper'){
        $gameResult = 1
    }else if($movePlayer1 == $movePlayer2){
        $gameResult = 0
    }
}


function printGameResult(){

    if($gameResult == 0){
        $winnerTitle.innerHTML = '<div class="animation-score-title"> Empatou </div>'
    }else if($gameResult == 1){      
        $winnerTitle.innerHTML = 'Jogadora 1 ganhou'
    } else if($gameResult == 2){
    $winnerTitle.innerHTML = 'Jogadora 2 ganhou'
    }
}

function scoreCount(){
    if($gameResult == 1 ){        
    $scoreCountP1++
    $scoreP1.innerHTML = '<div class="animation-score">' + $scoreCountP1 + '</div>'
        
    } else if($gameResult == 2){
       $scoreCountP2++
       $scoreP2.innerHTML = '<div class="animation-score">' + $scoreCountP2 + '</div>'
    }

}


$stoneButton.addEventListener('click', function () {
    $fieldPlayer1.innerHTML = '<img  class="move-img" src="stone.png"/>'
    $movePlayer1 = 'stone'
    verifyGame()
    printGameResult();
    scoreCount()
    
})

$paperButton.addEventListener('click', function () {
    $fieldPlayer1.innerHTML = '<img class="move-img" src="paper.png"/>'
    $movePlayer1 = 'paper'
    verifyGame()
    printGameResult()

scoreCount()})
$scissorsButton.addEventListener('click', function () {
    $fieldPlayer1.innerHTML = '<img class="move-img" src="scissors.png"/>'
    $movePlayer1 = 'scissors'
    verifyGame()
    printGameResult()

scoreCount()})

$stoneButton2.addEventListener('click', function () {
    $fieldPlayer2.innerHTML = '<img class="move-img-2" src="stone.png"/>'
    $movePlayer2 = 'stone'
    verifyGame()
    printGameResult()

scoreCount()})

$paperButton2.addEventListener('click', function () {
    $fieldPlayer2.innerHTML = '<img class="move-img-2" src="paper.png"/>'
    $movePlayer2 = 'paper'
    verifyGame()
    printGameResult()
    scoreCount()
})

$scissorsButton2.addEventListener('click', function () {
    $fieldPlayer2.innerHTML = '<img class="move-img-2" src="scissors.png"/>'
    $movePlayer2 = 'scissors'
    verifyGame()
    printGameResult()

scoreCount()})