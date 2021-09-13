var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const email = document.getElementById("email-input");
var submitNewsletter = document.getElementById("submit-newsletter");
const database = firebase.database();

submitNewsletter.addEventListener('click', (e) =>{
    e.preventDefault();

    if(email.value.match(validate)){
        let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    database.ref('/newsletter/' + dateTime).set({
        email: email.value
    });
    alert("Registro exitoso 🧩");
    } else {
   alert("Ingresa un correo elctrónico válido");
   email.focus();
}
    email.value = '';
    
});

