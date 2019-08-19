'use strict';

let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item');

// Change oreder
menu.insertBefore(menuItems[2], menuItems[1]);

// Add fifth element
let newMenuItem = document.createElement('li');

newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый элемент';

menu.appendChild(newMenuItem);

// Replace background image
let body = document.querySelector('body');
body.style.backgroundImage = 'url(./img/apple_true.jpg)';

// Change title
let title = document.querySelector('#title');

title.textContent = 'Мы продаем только подлинную технику Apple';

// Remove advertisement
let adv = document.querySelector('.adv');
// adv.parentElement.removeChild(adv);

let advWrap = document.querySelectorAll('.column')[1];
advWrap.removeChild(adv);

// User's feedback
setTimeout(() => {
    let usersFeedback = prompt('Ваше отношкние к технике Apple', '');
    let promptContainer = document.querySelector('#prompt');
    promptContainer.textContent = usersFeedback;
}, 1000);