var inputDetected = false;
do {
    //utente inserisce valore
    var userPrompt = prompt("Inserisci una parola").toLowerCase().trim();

    // Verifica che non ha inserito numeri o spazi vuoti 
    if (promptNotValid(userPrompt)) {
        alert("Non hai inserito un valore valido.")
    } else {
        inputDetected = true;
    }

} while (!inputDetected);

// OUTPUT
if (isPalindrome(removeSpaces(userPrompt))) {
    console.log("La parola/frase che hai inserito: " + userPrompt + " è palindroma.");

} else {
    console.log("La parola/frase che hai inserito: " + userPrompt + " non è palindroma.");

}

//console.log(removeSpaces(userPrompt));

//Funzione che rimuove gli spazi dall'input dell'utente 
function removeSpaces(text) {

    var stringToArray = []
    for (var i = 0; i < text.length; i++) {

        stringToArray.push(text[i]);
    }

    var noSpacesText = []
    for (var j = 0; j < stringToArray.length; j++) {

        if (stringToArray[j] !== " ") {
            noSpacesText.push(stringToArray[j]);
        }
    }    

    var finalString = noSpacesText.join("");

    return finalString;
}


//Funzione che verifica se le parole sono palindrome
function isPalindrome(text) {

    var revertedText = "";
    for (i = text.length - 1; i >= 0; i--) {

        revertedText += text[i];
    }

    console.log("La tua parola letta da destra a sinistra: " + revertedText);

    return revertedText === text;
}


//funzione che varifica la validità del testo inserito
function promptNotValid(text) {

    if (Number.isNaN(parseInt(text)) && text !== "" && text !== null && text !== undefined) {

        return false;
    }

    return true;
}


//funzione che capovolge la parola
/* function reverseText(text) {

    if (typeof text !== "string") {

        return ""
    }

    return text.split("").reverse().join("");

} */

/* function removeSpaces(text) {


    text = text.replace(/\s+/g, '');

} */

/* function isPalindrome(text) {
    // var palindrome = false;
    if (removeSpaces(userPrompt) === removeSpaces(text)) {

        return true;
    }
    return ""
} */

/*
var textReverse = reverseText(userPrompt);

var palindrome = false;

if (removeSpaces(userPrompt) === removeSpaces(textReverse)) {

    palindrome = true;

} else {

    palindrome = false;

}

console.log(textReverse)

*/







