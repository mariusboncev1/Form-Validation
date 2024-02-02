let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let username = id('username'), 
    email = id('email'), 
    password = id('password'),
    form = id('form'),
    errorMsg = classes('error'),
    successIcon = classes('succes-icon'),
    failureIcon = classes('failure-icon');

    form.addEventListener("submit", (e) => {
        e.preventDefault();


        engine(username, 0, "Ia șî scrie, nu te rușina!");
        engine(email, 1, "Dă-ni datele tăli amu");
        engine(password, 2, "Parola S'il vous plaît!");
    })

let engine = (id, serial, message) => {
    if(id.value === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    }
    else {
        errorMsg[serial].innerHTML = '';
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}