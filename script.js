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

    scissors < rock < paper   |    paper < scissors
*/ 

function addPointPlayer() {

    playerBox.textContent = `${playerValue += 1}`
    console.log(playerValue);
}


function addPointComp() {
    
    computerBox.textContent = `${computerValue += 1}`
    console.log(computerBox);
}

function lose() {
    
    resultado.textContent = "Perdiste esta ronda";
}

function win(){
    
    resultado.textContent = "Ganaste esta ronda!";
}

function playRound(player) {

    let computerSelection = getComputerChoice();
    const playerSelection = player.toLowerCase();
    if (playerValue == 10 ){
        resultado.textContent = "GANASTE LA PARTIDA, PARECE QUE LOGRASTE VENCER A LA MAQUINA.."
    }
    
    if (computerValue == 10){
        resultado.textContent = "Enserio te dejaste ganar por un celular? ¬¬ "
    }
    if (playerSelection == computerSelection) {
        resultado.textContent = "¡Empaaaate!";
    }else if (playerSelection == rock && computerSelection == paper){
        addPointComp();
        lose();
    }else if (playerSelection == paper && computerSelection == rock){
        addPointPlayer();
        win();
    }else if (playerSelection == scissors && computerSelection == rock ){
        addPointComp(),
        lose();
    }else if (playerSelection == rock && computerSelection == scissors){
        addPointPlayer();
        win();
    }else if (playerSelection == scissors && computerSelection == paper){
        addPointPlayer();
        win();
    }else if (playerSelection == paper && computerSelection == scissors){
        addPointComp();
        lose()
    }else {
        resultado.textContent = "Algo no salio bien, me avisas cualquier cosa."
    }

}   

const buttons = document.querySelectorAll("button");
const playerBox = document.querySelector("#player");
let playerValue = parseInt(playerBox.textContent);
const computerBox = document.querySelector("#computer");
let computerValue = parseInt(computerBox.textContent);
const resultado = document.querySelector("#resultado");

buttons.forEach(button => {
    button.addEventListener("click",(e) => playRound(button.textContent));      // with (e)=>button.textContent puedo seleccionar el string del button.
});
