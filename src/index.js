import './index.html';
import './style.css';
import { Layer } from './Layer/index.js';
import './Layer/style.css';
import { Drink } from './Drink/index.js';
import './Drink/style.css';

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

/*Vytvořte komponentu Layer, která očekává props v následujícím tvaru.*/

/*Komponenta nechť vrací řetězec obsahující výsledné HTML.
Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.
Ve vašem projektu vytvořte pro vaši komponentu separátní složku s názvem Layer. Tato složka bude v souboru index.js obsahovat JavaScript kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním index.js celého projektu. Vyzkoušejte, že váš projekt funguje.*/

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const infoElm = document.querySelector('.drink__info');

layers.forEach((vrstva) => {
  infoElm.innerHTML += Layer(vrstva);
});

/*<div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #feeeca"
                  ></div>
                  <div class="layer__label">mléčná pěna</div>
                </div>
                <div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #fed7b0"
                  ></div>
                  <div class="layer__label">teplé mléko</div>
                </div>

                <div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: #613916"
                  ></div>
                  <div class="layer__label">espresso</div>
                </div>
                
/*infoElm.innerHTML += Layer({
  color: '#feeeca',
  label: 'mléčná pěna',
});

infoElm.innerHTML += Layer({
  color: '#fed7b0',
  label: 'teplé mléko',
});

infoElm.innerHTML += Layer({
  color: '#613916',
  label: 'espresso',
});
*/

const drinks = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

const drinksList = document.querySelector('drinks-list');
drinksList.appendChild = Drink(drinks);
