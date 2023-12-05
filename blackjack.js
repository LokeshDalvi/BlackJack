var pCards = document.getElementById("pCards");
var pTotal = document.getElementById("pTotal");
var cTotal = document.getElementById("cTotal");
var startBtn = document.getElementById("startBtn");
var btn = document.getElementById("btn");

var draw = document.getElementById("draw")
var stay = document.getElementById("stay")

var result = document.getElementById("result");

var gameFlag = true

var storage = []
var playerSum = 0

var computerStorage = []
var computerSum = 0

var player = `Lokesh`
var stake = 1000

// ===========Random Number================

function randomNum() {

    var num = Math.floor(Math.random()*13+1)

    if(num == 1 ){  // 1 == A == 11
        return 11
    }
    else if(num > 10){ // num > 10 == 11 == 12 == 13
        return 10
    }
    else{ // for every other number other than more that 10 or 1 return num
        return num
    }

}



// ============== Start Game =================

function start() {
    startBtn.style.display = `none`
    btn.style.display = `block`

    storage = []
    playerSum=0
    
    var playerCardOne = randomNum()
    var playerCardTwo = randomNum()

    var computerCardOne = randomNum()
    var computerCardTwo = randomNum()


    storage.push(playerCardOne)
    storage.push(playerCardTwo)

    computerStorage.push(computerCardOne)
    computerStorage.push(computerCardTwo)


    // 
    playerSum = playerCardOne + playerCardTwo //----> Easy way

    // Not so easy way
    // for(var i =0; i<storage.length; i++){
    //     playerSum += storage[i]
    // }
    
    computerSum = computerCardOne + computerCardTwo
    // for(var j = 0; j<computerStorage.length; j++){
    //     computerSum += computerStorage[j]
    // }

    print()
    // pCards.innerHTML += storage  
    // pTotal.innerHTML += playerSum

}

// =============Printing Function ====================
function print() {
    pCards.innerHTML = `Player Cards: `
    for(var i = 0; i<storage.length; i++){
        pCards.innerHTML +=  `${storage[i]} ` 
    }

    pTotal.innerHTML = `Player Total: ${playerSum}`

    cTotal.innerHTML = `Computer Total: ${computerSum}`


    if (playerSum == 21 && computerSum < 21){
        result.innerHTML = ` Congrats ${player} You Won ${stake *2}`
        // alert('You Won')
        result.style.color = `green`
    }
    else if(playerSum > 21 || computerSum == 21){
        result.innerHTML = `Sorry ${player} You loss ${stake}`
        // alert('You Lost')
        result.style.color = `red`
    }
    else(
        result.innerHTML = ` Do you want new card Click on DRAW`
    )
}

// ==========NAYA Patta============
function newCard() {

    if(playerSum < 21 && gameFlag == true){
    
        var playerCardThree = randomNum()

        storage.push(playerCardThree)

        playerSum += playerCardThree  

        print()
    }
    if(playerSum == 21){
        
    }
    
} 
//  ======================Computer New Card
function computerNewCard() {

    while(computerSum < 17){
        var computerCardThree = randomNum()
        computerStorage.push(computerCardThree)

        computerSum += computerCardThree
        cTotal.innerHTML = `Computer Total: ${computerSum}`
        
        console.log(computerStorage);
    }

    if((playerSum > computerSum && playerSum <= 21)||(playerSum < computerSum && computerSum > 21))
    {
        alert('Player Won')
        result.innerHTML = ` Congrats ${player} You Won ${stake *2}` 

    }
    else if((computerSum > playerSum && computerSum <=21)||(computerSum < playerSum && playerSum >21)){
        alert('Computer Won')
        result.innerHTML = `Computer Won . ${player} You loss ${stake}`
    }
    else{
        alert(`It's a Tie`)
        result.innerHTML = `It's a Tie`
    }

    gameFlag = false


    // print()
}