let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const lizard_div = document.getElementById('lizard');
const spock_div = document.getElementById('spock');

function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    if (letter === "scissors") return "Scissors";
    if (letter === "lizard") return "Lizard";
    return "Spock";
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "You".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)} ${(smallUserWord)} beats ${convertToWord(compChoice)} ${(smallCompWord)}. You Win! `;
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "You".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)} ${(smallUserWord)} loses to ${convertToWord(compChoice)} ${(smallCompWord)}. You Lost! `;
}

function draw(userChoice, compChoice) {
    const smallUserWord = "You".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)} ${(smallUserWord)} equals ${convertToWord(compChoice)} ${(smallCompWord)}. It's a Draw! `;
}


function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "rocklizard":
        case "paperrock":
        case "paperspock":
        case "scissorspaper":
        case "scissorslizard":
        case "lizardpaper":
        case "lizardspock":
        case "spockscissors":
        case "spockrock":
            win(userChoice, compChoice);
            break;

        case "rockpaper":
        case "rockspock":
        case "paperscissors":
        case "paperlizard":
        case "scissorsrock":
        case "scissorsspock":
        case "lizardscissors":
        case "lizardrock":
        case "spocklizard":
        case "spockpaper":
            lose(userChoice, compChoice);
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    })
    paper_div.addEventListener('click', function() {
        game('paper');
    })
    scissors_div.addEventListener('click', function() {
        game('scissors');
    })
    lizard_div.addEventListener('click', function() {
        game('lizard');
    })
    spock_div.addEventListener('click', function() {
        game('spock');
    })
}

main();