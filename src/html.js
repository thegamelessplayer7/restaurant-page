export const html = () => {
    const content = document.getElementById('content');
    const title = document.createElement('h1');
    content.appendChild(title);
    title.textContent = 'Salim Restaurant';
    
    const tagline = document.createElement('h2');
    content.appendChild(tagline);
    tagline.textContent = 'Where healthy food tastes great!';

    const mainPhoto = document.createElement('img');
    content.appendChild(mainPhoto);
    mainPhoto.src = 'halal-chicken-beef-bowl-28-copy.jpg';
    mainPhoto.style.height = '500px';
    mainPhoto.style.width = '500px';

    const para1 = document.createElement('p');
    content.appendChild(para1);
    para1.textContent = 'At Salim Restaurant, we cook only the best and healthiest of foods. Come, try our vegan cheeseburger pizza fries, or our vegan hickory smoked BBQ chicken pizza!'

    const para2 = document.createElement('p');
    content.appendChild(para2);
    para2.textContent = 'We even have pretzel burgers and vegan crab cake melt!';

};

export function htmlTwo() {
    console.log('I am called from html.js!');
}

export function quest() {
    console.log('question maybe, we will see');
}

