import { createNewElement, content } from "./index";

const displayNav = () => {

    // nav section
    let navbar = createNewElement('div', ['navbar'], null);
    content.appendChild(navbar);

    // title
    let title = createNewElement('h1', null, 'The Pizza Place');
    navbar.appendChild(title);

    // list of nav items
    let navItems = createNewElement('ul', ['nav-items'], null);
    navbar.appendChild(navItems);

    let navBtns = ['Home', 'Menu', 'Contact'];
    for ( let i = 0; i < navBtns.length; i++) {
        let li = createNewElement('li', ['nav-btn'], `${navBtns[i]}`)
        navItems.appendChild(li);
    }
};

export { displayNav };