import { html } from './html.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

const content = document.getElementById('content');
const navBar = document.createElement('nav');
content.appendChild(navBar);
const ulNav = document.createElement('ul');
navBar.appendChild(ulNav);
const liOne = document.createElement('li');
ulNav.appendChild(liOne);
liOne.textContent = 'Home';
const liTwo = document.createElement('li');
ulNav.appendChild(liTwo);
liTwo.textContent = 'Menu';
const liThree = document.createElement('li');
ulNav.appendChild(liThree);
liThree.textContent = 'Contact';


liOne.addEventListener('click', function() {
    console.log('This is a test');
});


liTwo.addEventListener('click', menu());

liThree.addEventListener('click', contact());


