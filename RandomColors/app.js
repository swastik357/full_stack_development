const button = document.querySelector('button');
const h1 = document.querySelector('h1');
h1.style.fontFamily = 'fantasy, sans-serif';
h1.style.fontSize = '30px';

myFunction('button');
myFunction('h1');

button.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    h1.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;

})

function myFunction(elementId) {
    document.querySelector(elementId).style.position = 'fixed';
    document.querySelector(elementId).style.left = '50%';
    document.querySelector(elementId).style.top = '50%';
    document.querySelector(elementId).style.transform = 'translateX(-50%)';

}

