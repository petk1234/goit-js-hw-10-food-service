const Handlebars = require("handlebars");
import foods from './menu.json';
import './styles.css';
//import {refs} from './theme-switcher.js';
import * as switcher from './theme-switcher.js'
let source = "<li class=menu__item><article class=card><img src={{image}} alt={{name}} class=card__image><div class=card__content><h2>{{name}}</h2><p class=card__price><i class=material-icons>monetization_on</i>100 кредитов</p><p class=card__descr>{{description}}</p><ul class=tag-list>{{#ingredients}}<li class=tag-list__item>{{this}}</li>{{/ingredients}}</ul></div><button class=card__button button><i class=material-icons button__icon>shopping_cart</i>В корзину</button></article></li>";
let template = Handlebars.compile(source);
//let result = template(foods[0]);

 foods.forEach( food => {
     let result = template(food);
     //console.log(result);
     switcher.refs.ulMenu.insertAdjacentHTML("beforeend", result);
 });

//console.log(result);
//refs.body.insertAdjacentHTML("beforeend", result);
//refs.body.appendChild(result);
// const refs = {
//     body: document.querySelector('body'),
//     checkBoxEl: document.querySelector('input'), 
// }
// let windowLocalStorage = localStorage.getItem('theme');
// console.log(windowLocalStorage);
// console.log(localStorage.getItem('theme')); 

// const Theme = {
//     LIGHT: "light-theme",
//     DARK: "dark-theme",
// }

// if(windowLocalStorage === 'light-theme' || windowLocalStorage === 'dark-theme'){
//     if(windowLocalStorage === 'light-theme'){
//          refs.body.classList.add('light-theme');
//         refs.checkBoxEl.checked = false;
//          console.log('White theme is first');
//     }
//     else{
//          refs.body.classList.add('dark-theme');
//          //refs.checkBoxEl.setAttribute('checked', true);
//          refs.checkBoxEl.checked = true;
//          console.log('Dark theme is first');
//     }
// }else{
//     localStorage.setItem('theme', 'light-theme');
//     console.log('first set up theme');
// }


// const themeChange = e => {
//     if(refs.body.classList.contains("light-theme") === true){
//         refs.body.classList.remove(Theme.LIGHT);
//         refs.body.classList.add(Theme.DARK);
//         localStorage.setItem('theme', 'dark-theme');
//         console.log(localStorage);
//         let el = e.target.checked; 
//         el = true;
//     }
//     else{
//         refs.body.classList.remove(Theme.DARK);
//         refs.body.classList.add(Theme.LIGHT);
//         localStorage.setItem('theme', 'light-theme');
//         console.log(localStorage); 
//         let el = e.target.checked; 
//         el = false;
//     }
// }

// refs.checkBoxEl.addEventListener('click', themeChange);

// const refs = {
//     body: document.querySelector('body'),
//     switcher: document.querySelector('input'),
// }
// const themeInStorage = localStorage.getItem('theme');

// if(themeInStorage){
//     if(themeInStorage === 'light-theme'){
//         refs.body.classList.add('light-theme');
//         refs.switcher.checked = false;
//     }
//     if(themeInStorage === 'dark-theme'){
//         refs.body.classList.add('dark-theme');
//         refs.switcher.checked = true;
//     }
// } else{
//     refs.body.classList.add('light-theme');
// }

// refs.switcher.addEventListener('change', handleControllerChange);

// function handleControllerChange(event) {
//     const controllerStatus = event.target.checked;
//     if (controllerStatus){
//         refs.body.classList.remove('light-theme');
//         refs.body.classList.add('dark-theme');
//         localStorage.setItem('theme', 'dark-theme');
//     } else{
//         refs.body.classList.remove('dark-theme');
//         refs.body.classList.add('light-theme');
//         localStorage.setItem('theme', 'light-theme');
//     }
// }