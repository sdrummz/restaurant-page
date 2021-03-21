
import { displayNav } from "./nav";
import { displayHome } from "./home";
import { displayMenu } from "./menu";

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

menu()

export { createNewElement, content }