import { html } from './html.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

const content = document.getElementById('content');


const navBar = document.createElement('nav');
document.body.insertBefore(navBar, content);
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



liOne.addEventListener('click', homePage);


liTwo.addEventListener('click', menuPage);

liThree.addEventListener('click', contactPage);


function homePage() {
    content.textContent = '';
    html();
}

function menuPage() {
    content.textContent = '';
    menu();
}

function contactPage() {
    content.textContent = '';
    contact();
}