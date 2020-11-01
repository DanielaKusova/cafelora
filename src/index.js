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
