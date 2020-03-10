let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoad_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const zzuser="User".fontsize(3).sup();
const zzucom="Computer".fontsize(3).sup();

function getComputerChoice(){
    const choices =['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];  
    // Pass randomly 'r' or 'p' or 's'...
}
var valuu;
function covertToWord(letter){
    if(letter==="r"){
        valuu= "Rock";
    }else if(letter==="p"){
        valuu="Paper";
    } else
        valuu= "Scissor";
    return valuu;
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${userChoice}${zzuser} beats ${computerChoice}${zzucom}. You won this time`;
}


function loss(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${userChoice}${zzuser} beats ${computerChoice}${zzucom}. You loss this time`;
}

function draw(userChoice,computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`No one win this time. Draw`;
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    console.log("User choise=>"+userChoice);
    console.log("Computer choice =>"+computerChoice);
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sr":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sp":
            loss(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissor_div.addEventListener('click',function(){
        game("s");
    })
}

main();