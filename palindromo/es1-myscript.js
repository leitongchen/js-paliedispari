//Creo una funzione che verifica se le parole sono palindrome
function palindromeControl(text) {

    var isPalindrome = false; 

    if (typeof text !== "string") {

        return ""
    }

    var textReverse = text.split("").reverse().join("");

    if (text === textReverse) {
        return isPalindrome = true; 
    }
    
}


//funzione che varifica la validità del testo inserito
function promptIsValid(text) {


}




var userPrompt = prompt("Inserisci una parola").toLowerCase(); 

console.log(userPrompt.split("").reverse().join(""));