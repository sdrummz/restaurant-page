
import { displayNav } from "./nav";
import { displayHome } from "./home";

const content = document.querySelector('.content');

function createNewElement(type, classes, text) {
    const element = document.createElement(type);
    if (classes) {
        for (let i = 0; i < classes.length; i++) {
            element.classList.add(classes[i]);
        }
    }
    if (text) {
        element.textContent = text;
    }

    return element;
}

displayNav();
displayHome();

export { createNewElement, content }