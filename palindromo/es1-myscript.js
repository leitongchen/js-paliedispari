//Creo una funzione che verifica se le parole sono palindrome
function reverseText(text) {

    if (typeof text !== "string") {

        return ""
    }

    return text.split("").reverse().join("");

}

function removeSpaces(text) {

    text = text.replace(/\s+/g, '');

}


function isPalindrome(text) {


}


var userPrompt = prompt("Inserisci una parola").toLowerCase(); 



var textReverse = reverseText(userPrompt);

var palindrome = false; 

if (removeSpaces(userPrompt) === removeSpaces(textReverse)) {

    palindrome = true; 

} else {

    palindrome = false; 

}

console.log(textReverse)

if (palindrome) {
    console.log("La parola/frase che hai inserito: " + userPrompt + " è palindroma.");

} else {
    console.log("La parola/frase che hai inserito: " + userPrompt + " non è palindroma.");

} 







//funzione che varifica la validità del testo inserito
function promptIsValid(text) {


}
