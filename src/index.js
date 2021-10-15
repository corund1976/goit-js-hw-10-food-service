import menu from './menu.json';
import Handlebars, { logger } from 'handlebars';

// Рендер разметки с помощью шаблонизатора Handlebars
const ulMenuNode = document.querySelector('.js-menu');

const renderMenu = menu.map(menuItem => {
  const source =
    "<li class='menu__item'>" +
    "<article class='card'>" +
      
    "<img src={{image}} alt={{name}} class='card__image'/>" +
          
    "<div class='card__content'>" +
    "<h2 class='card__name'>{{name}}</h2>" +
    "<p class='card__price'>" +
    "<i class='material-icons'> monetization_on </i>" +
    "{{price}}" +
    "</p>" +

    "<p class='card__descr'>" +
    "{{description}}" +
    "</p>" +

    "<ul class='tag-list'>{{#ingredients}}<li class='tag-list__item'>{{ingredients}}</li>{{/ingredients}}</ul>" +
    "</div>" +

    "<button class='card__button button'>" +
    "<i class='material-icons button__icon'> shopping_cart </i>" +
    "В корзину" +
    "</button>" +
          
    "</article>" +
    "</li>";
  
  const template = Handlebars.compile(source);

  const renderMenuItem = template(menuItem);

  ulMenuNode.insertAdjacentHTML('beforeend', renderMenuItem);
});
    
// Смена темы с Светлая на Темная, и наоборот
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSavedLocalStorage = localStorage.getItem("ui-theme");

const themeSwitchToggleNode = document.querySelector('#theme-switch-toggle');
themeSwitchToggleNode.addEventListener('change', onChange);

if (themeSavedLocalStorage === 'dark') {
    themeSwitchToggleNode.checked = true;
    document.body.classList.add(Theme.DARK);
} else {
    document.body.classList.add(Theme.LIGHT);
}

function onChange() {
    if (themeSwitchToggleNode.checked) {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem("ui-theme", "dark");
    } else {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem("ui-theme", "light");
    }
}