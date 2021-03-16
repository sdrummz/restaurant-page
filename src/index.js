

function createNewElement(type, classes, text) {
    const element = document.createElement(type);
    if (classes) {
        for (let i = 0; i < classes.length; i++) {
            element.classList.add(classes[i]);
        }
    }
    if (text) {
        element.innerHtml = text;
    }
}

export { createNewElement }