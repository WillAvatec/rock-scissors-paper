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

const rock = "Roca";
const scissors = "Tijeras";
const paper = "Papel";

function getComputerChoice(){
    
    let number = (Math.floor( Math.random()*10));
    if (number >= 0 && number <=3) {
        return rock;
    }else if (number >=4 && number <=6){
        return paper;
    }else if (number >=7 && number <=9){
        return scissors;}
    }

const computerSelection = getComputerChoice();
 

/*Luego el jugador debe elegir su eleccion usando el parametro
de una función,[function(elección)]. Esta se compara con la decision
de la computadora y se obserba en la siguiente tabla:      */

let playerSelection = prompt("Escoge tu arma");


function playRound(playerSelection, computerSelection) {
    
}

/*
    Rock < Paper < Scissors  ||  Scissors < Rock

*/