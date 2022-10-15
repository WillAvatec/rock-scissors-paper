/* Jugar a rock paper scissors contra la computadora
Inicialmente la computadora tiene que tomar un decision
de si empezar (con piedra, papel o tijera).

- Se inicia una ronda;
- La computadora toma una decisión;
    - While Ronda "n" starts;
    -   getComputerChoice;

    -   -Se escoge un valor entre 0 - 9;
    -   -El valor se asigna a una variable;
    
    -   -   Si el numero esta ENTRE 1-3: return rock
    -   -   Si el numero esta ENTRE 4-6 : return paper
    -   -   SI el numero esta ENTRE 7-9 : return scissors
    -   -   Si el numero es 0 se repite el random


    -   printComputerChoice; en la consola */

const rock = "rock";
const scissors = "scissors";
const paper = "paper";

function getComputerChoice(){
    
    let number = (Math.floor( Math.random()*10));
    if (number >= 0 && number <=3) {
        return rock;
    }else if (number >=4 && number <=6){
        return paper;
    }else if (number >=7 && number <=9){
        return scissors;}
    }

 

/*Luego el jugador debe elegir su eleccion usando el parametro
de una función,[function(elección)]. Esta se compara con la decision
de la computadora y se obserba en la siguiente tabla:


*/ 


function playRound() {
    let sign = prompt("What's your sign?");
    let computerSelection = getComputerChoice();
    const playerSelection = sign.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
       console.log("Tie...!");
    }else if (playerSelection == rock && computerSelection == paper){
        console.log("You lose this round.");
    }else if (playerSelection == paper && computerSelection == rock){
        console.log("You won this round!");
    }else if (playerSelection == scissors && computerSelection == rock ){
        console.log("You lose this round.");
    }else if (playerSelection == rock && computerSelection == scissors){
        console.log("You won this round!");
    }else if (playerSelection == scissors && computerSelection == paper){
        console.log("YOu won this round!");
    }else if (playerSelection == paper && computerSelection == scissors){
        console.log("You lose this match.");
    }else {console.log("That's not a real answer.")}

}   

playRound();

/*
    Rock < Paper < Scissors  ||  Scissors < Rock

*/