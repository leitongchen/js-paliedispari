var inputDetected = false;
do {

    //input dell'utente: PARI o DISPARI
    var userChoice = prompt("Inserisci PARI o DISPARI").trim();
    if (userChoice !== "pari" && userChoice !== "dispari") {
        alert("Devi inserire PARI o DISPARI. Parametri diversi non sono accettati.")
    } else {
        inputDetected = true;
    }


} while (!inputDetected)

inputDetected = false;
do {

    //input dell'utente: numero da 1 a 5 
    var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5").trim());
    if (!promptIsValid(userNumber)) {
        alert("Sono accettati solo numeri da 1 a 5")
    } else {
        inputDetected = true;
    }

} while (!inputDetected)



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

    var randomNum = Math.ceil(Math.random() * 5);

    return randomNum;

}

//funzione che varifica la validità dei dati
function promptIsValid(text) {

    if (Number.isNaN(parseInt(text)) || text > 5 || text < 1 || text === null || text === "" || text === undefined) {

        return false;
    }

    return true;
}
