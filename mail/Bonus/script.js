const eMail = document.getElementById("email");
const button = document.getElementById('button-addon2');
const main = document.querySelector("main");
const usersList = ['davide@gmail.com', 'lidia@tiscali.it', 'fabio@hotmail.com', 'antonio@gmail.com', 'nicole@alice.it'];

let i = 0;
button.addEventListener('click',

    function() {
        for (i; i < usersList.length; i++) {
            
            if (eMail.value == usersList[i]) {

                const newElement = document.createElement('div');
                newElement.innerHTML = 'Accesso consentito, la tua email è corretta!';
                main.append(newElement);
                newElement.classList.add("bg-light","w-25","mx-auto","p-3","mt-4","rounded","text-center","text-success")
                
                break;
            }
        }
        if (eMail.value != usersList[i]) {

            const newnewElement = document.createElement('div');
            newnewElement.innerHTML = 'Accesso negato, la tua email non è registrata!';
            main.append(newnewElement);
            newnewElement.classList.add("bg-light","w-25","mx-auto","p-3","mt-4","rounded","text-center", "text-danger")
        }
    }
);