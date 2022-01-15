export const contact = () => {
    const content = document.getElementById('content');
    
    const title = document.createElement('h1');
    content.appendChild(title);
    title.textContent = 'Contact Us';

    const address = document.createElement('p');
    content.appendChild(address);
    address.textContent = '500 Woodward Ave \n Detroit, MI 48224'
}