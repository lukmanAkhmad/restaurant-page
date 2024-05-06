import './style.css';
import { createHomePage } from './home';
import { createMenuPage } from './menu';
import { createContactPage } from './contact';


const page = (function(){
    const btnHome = document.querySelector('#btnHome');
    const btnMenu = document.querySelector('#btnMenu');
    const btnContact = document.querySelector('#btnContact');

    const generateHomePage = () => {
        btnMenu.classList.remove('selected');
        btnContact.classList.remove('selected');
        btnHome.classList.add('selected');
        createHomePage();
    };

    const generateMenuPage = () => {
        btnHome.classList.remove('selected');
        btnContact.classList.remove('selected');
        btnMenu.classList.add('selected');
        createMenuPage();
    }

    const generateContactPage = () => {
        btnMenu.classList.remove('selected');
        btnHome.classList.remove('selected');
        btnContact.classList.add('selected');
        createContactPage();
    }

    generateHomePage();

    btnHome.addEventListener('click', generateHomePage);
    btnMenu.addEventListener('click', generateMenuPage);
    btnContact.addEventListener('click', generateContactPage);
})();