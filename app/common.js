"use strict";

var userBlockOpen = document.querySelector('.user-block__link'),
    userBlockClose = document.querySelector('.modal-close'),
    modalWindow = document.querySelector('.modal'),
    containerBlock = document.querySelector('.container');



userBlockOpen.addEventListener("click", function(event){
    event.preventDefault();
    modalWindow.classList.add('modal-show');


});

userBlockClose.addEventListener("click", function(event){
    event.preventDefault();
    modalWindow.classList.remove('modal-show');


});
//
//containerBlock.addEventListener("click", function(event){
//    event.preventDefault();
//    modalWindow.classList.remove('modal-show');
//});



