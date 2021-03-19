import { createNewElement, content } from "./index";

// Module to display page
const displayHome = () => {

    const mainContainer = createNewElement('div', ['main-container'], null);
    content.appendChild(mainContainer);

    const mainContent = createNewElement('div', ['main-content'], null);
    mainContainer.appendChild(mainContent);

    const text1 = createNewElement('h2', null, 'World Famous Pizza')
    const text2 = createNewElement('h2', null, 'Hand crafted by the Man, the Myth, the Legend...');
    mainContent.appendChild(text1);
    mainContent.appendChild(text2);

    const img = document.createElement('img');
    img.src = 'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/31/2019/09/25145931/Png.png'
    mainContent.appendChild(img);

    const text3 = createNewElement('h1', null, 'Dr. Pizza');
    mainContent.appendChild(text3);
}

export { displayHome };