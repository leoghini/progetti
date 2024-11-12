document.getElementById('change-message-button').addEventListener('click', function() {
    const welcomeMessage = document.getElementById ('welcome-message');
    if (welcomeMessage.innerText == "Benvenut* nel nostro progetto!") {
        welcomeMessage.innerText = "Hai cambiato il messaggio!" ;
    } else {
        welcomeMessage.innerText = "Benvenut* nel nostro progetto!";
    }
}) ;