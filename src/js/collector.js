import foodCard from '../data/cards.hbs';
import menu from '../inbox/menu.json';

const containerMenu = document.querySelector('.js-menu');
containerMenu.insertAdjacentHTML('beforeend', insertMenu(menu));

function insertMenu(menu) {
    return menu.map(foodCard).join("");
};
