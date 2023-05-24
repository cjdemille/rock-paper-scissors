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

const playGame = (playerSelection , computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock'){
        if (computerSelection === 'rock'){
            return `It's a tie.`;
        } else if(computerSelection === 'paper'){
            return `Paper covers rock. You lose.`;
        } else if (computerSelection === 'scissors'){
            return 'Rock breaks scissors. You win!';
        }

    } else if(playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            return `It's a tie.`;
        } else if(computerSelection === 'scissors'){
            return `Scissors cut paper. You lose.`;
        } else if (computerSelection === 'rock'){
            return 'Paper covers rock. You win!';
        }

    } else if (playerSelection === 'scissors'){

        if (computerSelection === 'scisors'){
            return `It's a tie.`;
        } else if(computerSelection === 'rock'){
            return `Rock breaks scissors. You lose.`;
        } else if (computerSelection === 'paper'){
            return 'Scissors cut paper. You win!';
        }

    } else{
        console.error(`Please enter 'rock', 'paper', or 'scissors.'`);
    }
};

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playGame(playerSelection, computerSelection));
const newGame = (playerSelection , computerSelection) => {
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice(); 
        const playerSelection = prompt('Pick rock, paper or scissors');
        console.log(playGame(playerSelection, computerSelection));
    }
}
newGame();
