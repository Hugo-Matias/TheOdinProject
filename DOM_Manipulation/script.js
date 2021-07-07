const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is something!';

const pRed = document.createElement('p');
pRed.style.color = 'red';
pRed.textContent = 'Hey I\'m red!'

const subTitle = document.createElement('h3');
subTitle.style.cssText = "color: #2AF";
subTitle.textContent = "I'm a blue h3!"

const card = document.createElement('div');
card.style.cssText = "border: 1px solid black; border-radius: 4px; background-color: #bF0;";
const cardTitle = document.createElement('h1');
cardTitle.textContent = "I'm in a div";
const cardPara = document.createElement('p');
cardPara.textContent = "ME TOO!"
card.appendChild(cardTitle);
card.appendChild(cardPara);

container.appendChild(content);
container.appendChild(pRed);
container.appendChild(subTitle);
container.appendChild(card);

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World');

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('Hello World');
});

function alertButton () {
  alert('Hello World');
};

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', alertButton);

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function(e) {
  console.log(e);
  // console.log(e.target);
  e.target.style.background = 'blue';
});

const buttonsGroup = document.querySelector('#buttonsGroup');
const buttons = buttonsGroup.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(btn.id);
  });
});