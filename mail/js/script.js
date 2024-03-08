/* -------
   MAIL
------- */
/* 
// Creo un array con la lista delle mial che possono accedere
// Chiedo all'utente di inseire la sua mail
// Scorro la lista
// Per ogni mail
// - Controllo se la mail nella lista è uguale a quella dell'utente
// - Se trovo l'email uguale, l'appunto nella variabile 'mailFound'
// Stampo il risultato nel DOM
// - Se l'email è presente scrivo 'Accesso eseguito'
// - Se l'email è presente scrivo 'Indirizzo mail non riconosciuto'
*/
// Variabili
const mailList = ['gianluca.reneti@gmail.com', 'elisamarino98@gmail.com', 'alessiocal8@gmail.com', 'marinamesino100@libero.it', 'calafiorinino35@outlook.it', 'luisadinatino6@virgilio.it', 'pierfrancesco.lacinotti@gmail.com', 'matino76@hotmail.com', 'forza.ascoli@gmail.com', 'grazieakira@outlook.it',];
const userMail = prompt('Inserisci la mail del tuo account').toLowerCase();
const userMessage = document.querySelector('#mail-access');
let mailFound = false;
let userAccess;
// Funzionalità
for (let i = 0; i < mailList.length; i++) {
    const thisMail = mailList[i];
    if (thisMail === userMail) {
        mailFound = true;
    }
}
if (mailFound === true) {
    userAccess = 'Accesso eseguito';
} else {
    userAccess = 'Indirizzo mail non riconosciuto';
}
// Output
userMessage.innerHTML = userAccess;
console.log('mail utente:', userMail);