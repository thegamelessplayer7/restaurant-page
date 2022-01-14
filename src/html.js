const html = () => {
    const content = document.getElementById('content');
    const title = document.createElement('h1');
    content.appendChild(title);
    title.textContent = 'Salim Restaurant';
};

export function htmlTwo() {
    console.log('I am called from html.js!');
}

export function quest() {
    console.log('question');
}

export html(); 