
const refs = {
    body: document.querySelector('body'),
    checkBoxEl: document.querySelector('input'),
    ulMenu: document.querySelector('.js-menu'), 
}

let windowLocalStorage = localStorage.getItem('theme');
console.log(windowLocalStorage);
console.log(localStorage.getItem('theme')); 

const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
}

if(windowLocalStorage === 'light-theme' || windowLocalStorage === 'dark-theme'){
    if(windowLocalStorage === 'light-theme'){
         refs.body.classList.add('light-theme');
        refs.checkBoxEl.checked = false;
         console.log('White theme is first');
    }
    else{
         refs.body.classList.add('dark-theme');
         //refs.checkBoxEl.setAttribute('checked', true);
         refs.checkBoxEl.checked = true;
         console.log('Dark theme is first');
    }
}else{
    localStorage.setItem('theme', 'light-theme');
    console.log('first set up theme');
}


const themeChange = e => {
    if(refs.body.classList.contains("light-theme") === true){
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem('theme', 'dark-theme');
        console.log(localStorage);
        let el = e.target.checked; 
        el = true;
    }
    else{
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', 'light-theme');
        console.log(localStorage); 
        let el = e.target.checked; 
        el = false;
    }
}

refs.checkBoxEl.addEventListener('click', themeChange);
export {refs};