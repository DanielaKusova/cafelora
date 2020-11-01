import './index.html';
import './style.css';

console.log('funguju!');

const navigation = document.querySelector('nav');

const navigace = document.getElementById('nav-btn');
navigace.addEventListener('click', () => {
  navigation.classList.toggle('nav-closed');
});
console.log('jedu!');

const navigaceElm = document.querySelectorAll('.nav-button');

navigaceElm.forEach((polozka) => {
  polozka.addEventListener('click', () => {
    navigation.classList.add('nav-closed');
  });
});

/*const objednat = document.querySelector('.order-btn');
objednat.addEventListener('click', () => {
  document
    .querySelector('.drink__cup')
    .classList.toggle('drink__cup--selected');
  objednat.textContent = 'Zrušit';
});
*/
const objednat = document.querySelector('.order-btn');
const drink = document.querySelector('.drink__cup');

let ordered = 'false';

const drinkCup = () => {
  drink.classList.toggle('drink__cup--selected');
  objednat.textContent = 'Zrušit';
  ordered = !ordered;
  if (ordered === true) {
    objednat.textContent = 'Zrušit';
  } else {
    objednat.textContent = 'Objednat';
  }
};
objednat.addEventListener('click', drinkCup);
