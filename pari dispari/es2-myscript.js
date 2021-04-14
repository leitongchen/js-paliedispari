//input dell'utente: PARI o DISPARI
var userChoice = prompt("Inserisci PARI o DISPARI"); 

//input dell'utente: numero da 1 a 5 
var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5")); 


//numero dell'AI
var aiNumber = randomNumGen();

//sommare i due numeri 

var sumNumbers = userNumber + aiNumber; 


//stabilire se pari o dispari 
var pari = sumNumbers % 2 === 0; 


//stabilire il vincitore 
//var risultato da stabilire con un IF 
var risultato
if (pari) {
    risultato = "pari";
} else {
    risultato = "dispari"
}


//OUTPUT
var output 
if (userChoice === risultato) {
    output = "HAI VINTO!!!"
} else {
    output = "MI SPIACE HAI PERSO... :'("

}

console.log("Hai scelto " + userChoice.toUpperCase());
console.log("Il tuo numero è " + userNumber + ". Il numero generato automaticamente è " + aiNumber + ".");
console.log("La somma dei due numeri è " + sumNumbers + ".");
console.log("Il risultato della partita è " + risultato + ".");
console.log(output)




//console.log(randomNumGen())

//Funzione che genera numeri random
function randomNumGen() {

    var randomNum = Math.ceil(Math.random()*5);

    return randomNum;

}