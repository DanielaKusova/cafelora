/* Nápoj jako komponenta*/
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


export const Drink = (props) => {
const drinkTypeElement = document.createElement("div");
drinkTypeElement.className = "drink";
drinkTypeElement.innerHTML = `<div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/${props.id}.png" />
              </div>
              <div class="drink__info">
                <h3>${props.name}</h3>${props.layers})}
              </div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>`;
};

