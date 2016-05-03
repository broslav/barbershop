"use strict";

var userBlockOpen = document.querySelector('.user-block__link'),
    userBlockClose = document.querySelector('.modal-close'),
    modalWindow = document.querySelector('.modal'),
    login = modalWindow.querySelector("[name=login]"),
    form = modalWindow.querySelector("form"),
    loginFromLocalStorage = localStorage.getItem('login'),
    password = modalWindow.querySelector("[name=password]");


userBlockOpen.addEventListener("click", function(event){
    event.preventDefault();
    modalWindow.classList.add('modal-show');


    if (loginFromLocalStorage){
        login.value = loginFromLocalStorage;
        password.focus();
    } else{
        login.focus();
    }
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    if(!(login.value && password.value)){
        modalWindow.classList.add('modal-error');
        setTimeout(function(){
            modalWindow.classList.remove('modal-error')
        }, 1000);
    }


});
//    if (login.value.length < 6) {
//        event.preventDefault();
//        alert("Логин не должен состоять менее чем из шести символов");
//    }
//    else if(password.value.length < 8){
//        event.preventDefault();
//        alert("Пароль не должен состоять менее чем из восьми символов");
//        console.log(password.value);
//    } else {
//        localStorage.setItem('login', login.value);
//    }
//});
//console.log(localStorage.getItem('login'));




userBlockClose.addEventListener("click", function(event){
    event.preventDefault();
    modalWindow.classList.remove('modal-show');
});

window.addEventListener('keydown', function(event){
   if(event.keyCode === 27) {
       if(modalWindow.classList.contains('modal-show')){
           modalWindow.classList.remove('modal-show');
       }
   }
});

