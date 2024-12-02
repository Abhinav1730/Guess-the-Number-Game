let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const previousguesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.loworhigh')
const result = document.querySelector('.result')

const p = document.createElement('p')

let prevGuess=[]
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateguess(guess)
    })
}
function validateguess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number')
    }else if(guess<0 || guess>100){
        alert('Please Enter a Number in between range 1-100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayguess(guess)
            displaymessage(`Game Over , The Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    if(guess === randomNumber){
        displaymessage(`Your Guess is Right`)
        endGame()
    }else if(guess<randomNumber){
        displaymessage(`Number is too Low`)
    }else if(guess>randomNumber){
        displaymessage(`Number is too High`)
    }else{

    }
}
function displayguess(guess){
    userInput.value = ''
    previousguesses.innerHTML += `${guess}  `
    numGuess++
    lastResult.innerHTML = `${11-numGuess}`
}
function displaymessage(message){
    loworhigh.innerHTML = `<h2>${message}</h2>`
}
function newGame(){
    const newgameButton = document.querySelector('#newGame')
    newgameButton.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 1
        previousguesses.innerHTML = ''
        lastResult.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        result.removeChild(p)
        playGame = true
    })
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    result.appendChild(p)
    playGame = false
    newGame()
}