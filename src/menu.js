export const menu = () => {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    content.appendChild(container);

    const title = document.createElement('h1');
    content.appendChild(title);
    title.textContent = 'Salim\'s Menu';

    const titleTwo = document.createElement('h2');
    content.appendChild(titleTwo);
    titleTwo.textContent = 'Vegan Menu';

    const bacCheese = document.createElement('h3');
    content.appendChild(bacCheese);
    bacCheese.textContent = 'Bacon Cheeseburger Pizza Fries';

    const bacCheesePara = document.createElement('p');
    content.appendChild(bacCheesePara);
    bacCheesePara.textContent = 'Fries topped with pizza sauce, mozz cheese, burger crumble, onions, bacon, cheeze whiz & ketchup.';

    const hawaaPizz = document.createElement('h3');
    content.appendChild(hawaaPizz);
    hawaaPizz.textContent = 'Hawaiian Pizza';

    const hawaaPizzPara = document.createElement('p');
    content.appendChild(hawaaPizzPara);
    hawaaPizzPara.textContent = 'Made with grilled pineapple & grilled turkey ham.';

    const buffChick = document.createElement('h3');
    content.appendChild(buffChick);
    buffChick.textContent = 'Buffalo Chicken Pizza';

    const buffChickPara = document.createElement('p');
    content.appendChild(buffChickPara);
    buffChickPara.textContent = 'Made with chicken, sauteed carrots & celery, buffalo sauce, & house-made ranch.';

    const hickorySmoke = document.createElement('h3');
    content.appendChild(hickorySmoke);
    hickorySmoke.textContent = 'Hickory Smoked BBQ Chicken Pizza';

    const hickorySmokePara = document.createElement('p');
    content.appendChild(hickorySmokePara);
    hickorySmokePara.textContent = 'Made with BBQ sauce, chicken, mushrooms & caramelized onions.';
}