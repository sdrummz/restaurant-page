import { createNewElement, content } from "./index";

const displayMenu = () => {

    const mainContainer = createNewElement('div', ['main-container'], null);
    content.appendChild(mainContainer);

    const mainContent = createNewElement('div', ['main-content'], null);
    mainContainer.appendChild(mainContent);

    // Menu content

    const title = createNewElement('h1', null, 'Menu');
    mainContent.appendChild(title);

    const items = createNewElement('div', ['items'], null);
    mainContent.appendChild(items);

    const itemCreator = (img, title, text) => {
        const item = createNewElement('div', ['item'], null);

        const picture = createNewElement('img', null, null);
        picture.src = img;
        item.appendChild(picture)

        const name = createNewElement('p', null, title);
        item.appendChild(name);

        const description = createNewElement('p', ['info'], text);
        item.appendChild(description);

        return item;
    }

    const menuList = [
        {title: 'Cheese', image: './images/cheese.png', text: `Our classic cheese pizza <br />
        Gluten free option available`},
        {title: 'Margherita', image: './images/margherita.png', text: `Authentic margherita style pizza <br />
        Tomatoes, mozzeralla, basil`},
        {title: 'Deep Dish', image: './images/deepdish.png', text: `Chicago Style <br />
        Thick fluffy crust, tons of cheese`},
        {title: 'Pepperoni', image: './images/pepperoni.png', text: `Our classic cheese with pepperoni...`},
        {title: 'Meat Lovers', image: './images/meatlovers.png', text: `Topped with pepperoni, sausage, bacon`},
        {title: 'Hawaiian', image: './images/Hawaiian.png', text: `Classic Hawaiian pizza <br />
        topped with ham and pineapple`},
        {title: 'Buffalo Chicken', image: './images/buffchick.png', text: `Grilled chicken and hot buffalo sauce <br />
        Ranch optional`},
        {title: 'BBQ Chicken', image: './images/bbqchicken.png', text: `BBQ sauce and grilled chicken`},
    ];

    for (let i = 0; i < menuList.length; i++) {
        let newItem = itemCreator(menuList[i].image, menuList[i].title, menuList[i].text)
        items.appendChild(newItem);
    };
        
};




export { displayMenu };