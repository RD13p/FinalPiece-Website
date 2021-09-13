var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const email = document.getElementById("email-input");
var submitNewsletter = document.getElementById("submit-newsletter");
var toastLiveExample = document.getElementById('liveToast')

const database = firebase.database();

submitNewsletter.addEventListener('click', (e) =>{
    e.preventDefault();

    if(email.value == "" || (!email.value.match(validate))){
        alert("Ingresa un correo electrónico válido");
    } else {
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    database.ref('/newsletter/' + dateTime).set({
        email: email.value
    });
    alert("Registro exitoso 🧩");
}
    email.value = '';
    
});

