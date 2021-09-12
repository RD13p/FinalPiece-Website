
const email = document.getElementById("email-input");
const submitNewsletter = document.getElementById("submit-newsletter");

const database = firebase.database();

submitNewsletter.addEventListener('click', (e) =>{
    e.preventDefault();
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    database.ref('/newsletter/' + dateTime).set({
        email: email.value
    });
    email.value = '';
});