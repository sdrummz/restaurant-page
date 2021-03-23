
import { displayNav } from "./nav";
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";

const content = document.querySelector('.content');

function createNewElement(type, classes, text) {
    const element = document.createElement(type);
    if (classes) {
        for (let i = 0; i < classes.length; i++) {
            element.classList.add(classes[i]);
        }
    }
    if (text) {
        element.innerHTML = text;
    }

    return element;
}

const home = () => {
    displayNav();
    displayHome();
}

const menu = () => {
    displayNav();
    displayMenu();
}

const contact = () => {
    displayNav();
    displayContact();
}

document.addEventListener('click', el => {
    const btnClick = el.target.innerHTML;

    if (btnClick === "Home") {
        content.innerHTML = '';
        home();
    }
    if (btnClick === "Menu") {
        content.innerHTML = '';
        menu();
    }
    if (btnClick === "Contact") {
        content.innerHTML = '';
        contact();
    }
})

home();

export { createNewElement, content }