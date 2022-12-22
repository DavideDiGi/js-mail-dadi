const askMail = prompt('Inserisci la tua email:');

const usersList = ['davide@gmail.com', 'lidia@tiscali.it', 'fabio@hotmail.com', 'antonio@gmail.com', 'nicole@alice.it'];

console.log(usersList);

let i = 0;

for (i; i < usersList.length; i++) {
    
    if (askMail == usersList[i]) {
        alert('accesso consentito')
        break;
    }
}
if (askMail != usersList[i]) {
    alert('accesso negato, la tua email non è registrata')
}