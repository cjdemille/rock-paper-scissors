const rockSelect = document.getElementById('rock');
const paperSelect = document.getElementById('paper');
const scissorsSelect = document.getElementById('scissors');

const resultDiv = document.getElementById('result');

const getComputerChoice = () =>{
    const num = Math.floor(Math.random()* 3);
    let choice;
    if (num === 0){
        choice = 'rock';
    }else if(num ===1){
        choice = 'paper';
    }else if(num ===2){
        choice = 'scissors';
    }
    return choice;
};

const playGame = (playerSelection) => {
    const computerSelection = getComputerChoice();
    let resultText;
    if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            resultText = `It's a tie.`;
        } else if(computerSelection === 'paper'){
            resultText = `Paper covers rock. You lose.`;
        } else if (computerSelection === 'scissors'){
            resultText = 'Rock breaks scissors. You win!';
        }
   

    } else if(playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            resultText = `It's a tie.`;
        } else if(computerSelection === 'scissors'){
            resultText = `Scissors cut paper. You lose.`;
        } else if (computerSelection === 'rock'){
            resultText = 'Paper covers rock. You win!';
        }

    } else if (playerSelection === 'scissors'){

        if (computerSelection === 'scissors'){
            resultText = `It's a tie.`;
        } else if(computerSelection === 'rock'){
            resultText = `Rock breaks scissors. You lose.`;
        } else if (computerSelection === 'paper'){
            resultText = 'Scissors cut paper. You win!';
        }

    } else{
        console.error(`Please enter 'rock', 'paper', or 'scissors.'`);
    }

    let result = document.createElement("p");
    result.innerText = resultText
    resultDiv.append(result);





};

rockSelect.addEventListener('click', function(){
    playGame('rock');
});
paperSelect.addEventListener('click', function(){
    playGame('paper');
});
scissorsSelect.addEventListener('click', function(){
    playGame('scissors');
});

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playGame(playerSelection, computerSelection));

