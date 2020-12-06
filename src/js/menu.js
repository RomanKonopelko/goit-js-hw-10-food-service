import menuTemplate from '../templates/menu-template.hbs';
import menu from '../menu.json';
const menuList = document.querySelector('.js-menu');
const menuMarkup = menuTemplate(menu);
menuList.insertAdjacentHTML('afterbegin', menuMarkup);
console.log(menuMarkup);
console.log(menu);
