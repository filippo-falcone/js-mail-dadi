/* Gioco dei dadi */
// Chiedo all'utente di scrivere un numero casuale da 1 a 6
const userDice = parseInt(prompt('Inserisci un numero da 1 a 6'))
console.log('dado utente', userDice)
// Creo un numero casuale da 1 a 6 anche per il computer
const comDice = Math.floor(Math.random() * 6) + 1;
console.log('dado pc', comDice);
// Stabilisco il vincitore
// - Se il numero dell'utente è superiore a quello del pc scrivo 'Complimenti hai vinto'
// - Altrimenti se i due numeri sono uguali scrivo 'Pareggio'
// - Altrimenti scrivo 'Mi dispiace hai perso'
let winnerOrLose;
if (userDice > comDice) {
    winnerOrLose = 'Complimenti hai vinto!!!';
} else if (userDice === comDice) {
    winnerOrLose = 'Pareggio';
} else {
    winnerOrLose = 'Mi dispiace hai perso';
}
console.log(winnerOrLose);
// Stampo il risultato nel DOM
const userMessage = document.querySelector('#message');
userMessage.innerHTML = winnerOrLose;