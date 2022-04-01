const $stoneButton = document.querySelector('.button-stone-player-1')
const $paperButton = document.querySelector('.button-paper-player-1')
const $scissorsButton = document.querySelector('.button-scissors-player-1')

const $stoneButton2 = document.querySelector('.button-stone-player-2')
const $paperButton2 = document.querySelector('.button-paper-player-2')
const $scissorsButton2 = document.querySelector('.button-scissors-player-2')

const $fieldPlayer1 = document.querySelector('.field-player-1')
const $fieldPlayer2 = document.querySelector('.field-player-2')


$stoneButton.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img  class="move-img" src="stone.png"/>'
})

$paperButton.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-img" src="paper.png"/>'
})
$scissorsButton.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-img" src="scissors.png"/>'
})

$stoneButton2.addEventListener('click',function(){
    $fieldPlayer2.innerHTML = '<img class="move-img-2" src="stone.png"/>'
})

$paperButton2.addEventListener('click',function(){
    $fieldPlayer2.innerHTML = '<img class="move-img-2" src="paper.png"/>'
})

$scissorsButton2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-img-2" src="scissors.png"/>'
})