/* -----------------
   GIOCO DEI DADI
----------------- */
/* 
// Chiedo all'utente di scrivere un numero casuale da 1 a 6
// Creo un numero casuale da 1 a 6 anche per il computer
// Stabilisco il vincitore
// - Se il numero dell'utente è superiore a quello del pc scrivo 'Complimenti hai vinto'
// - Altrimenti se i due numeri sono uguali scrivo 'Pareggio'
// - Altrimenti scrivo 'Mi dispiace hai perso'
// Stampo il risultato nel DOM
*/
// Variabili
const userDice = parseInt(prompt('Inserisci un numero da 1 a 6'))
const comDice = Math.floor(Math.random() * 6) + 1;
const userMessage = document.querySelector('#message');
let winnerOrLose;
// Funzionalità
if (userDice > comDice) {
    winnerOrLose = 'Complimenti hai vinto!!!';
} else if (userDice === comDice) {
    winnerOrLose = 'Pareggio';
} else {
    winnerOrLose = 'Mi dispiace hai perso';
}
// Output
userMessage.innerHTML = winnerOrLose;
console.log('dado utente', userDice);
console.log('dado computer', comDice);