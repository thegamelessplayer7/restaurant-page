const html = () => {
    const content = document.getElementById('content');
    const title = document.createElement('h1');
    content.appendChild(title);
    title.textContent = 'Salim Restaurant';
    
    /*const tagline = document.createElement('h2');
    content.appendChild(tagline);
    tagline.textContent = 'Where healthy food tastes great!';
*/
};

export function htmlTwo() {
    console.log('I am called from html.js!');
}

export function quest() {
    console.log('question maybe again');
}

export default html; 