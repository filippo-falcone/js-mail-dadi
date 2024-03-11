/* -----------------
   GIOCO DEI DADI
----------------- */
/* 
// Creo un numero casuale da 1 a 6 sia per l'utente che per il computer
// Stabilisco il vincitore
// - Se il numero dell'utente è superiore a quello del pc scrivo 'Complimenti hai vinto'
// - Altrimenti se i due numeri sono uguali scrivo 'Pareggio'
// - Altrimenti scrivo 'Mi dispiace hai perso'
// Stampo il risultato nel DOM
*/
// Variabili
const userDice = Math.floor(Math.random() * 6) + 1;
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