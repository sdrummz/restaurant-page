import { createNewElement, content } from "./index";

const displayContact = () => {

    const mainContainer = createNewElement('div', ['main-container'], null);
    content.appendChild(mainContainer);

    const mainContent = createNewElement('div', ['main-content'], null);
    mainContainer.appendChild(mainContent);

    // Contact Us 

    const contactUS = createNewElement('h1', null, 'Contact Us');
    const phone = createNewElement('h3', null, 'Phone: 123-456-7891');
    const address = createNewElement('h3', null, 'Address: 23 Pizza St, Pizzaville MA')
    mainContent.appendChild(contactUS);
    mainContent.appendChild(phone);
    mainContent.appendChild(address);

    // Contact Form elements

    const contactForm = createNewElement('div', ['contact-form'], null);
    mainContent.appendChild(contactForm);

    const formH1 = createNewElement('h1', null, 'Contact Form');
    contactForm.appendChild(formH1);

    const form = createNewElement('form', null, null);
    contactForm.appendChild(form);

    const row1 = createNewElement('div', ['row'], null);
    const row2 = createNewElement('div', ['row'], null);
    const row3 = createNewElement('div', ['row'], null);
    const row4 = createNewElement('div', ['row'], null);

    const input501 = createNewElement('div', ['input50'], null);
    const input502 = createNewElement('div', ['input50'], null);
    const input503 = createNewElement('div', ['input50'], null);
    const input504 = createNewElement('div', ['input50'], null);

    const input101 = createNewElement('div', ['input100'], null);
    const input102 = createNewElement('div', ['input100'], null);


    const firstName = createNewElement('input', null, null);
    firstName.type = 'text';
    firstName.placeholder = 'First Name'
    
    const lastName = createNewElement('input', null, null);
    lastName.type = 'text';
    lastName.placeholder = 'Last Name';

    const email = createNewElement('input', null, null);
    email.type = 'email';
    email.placeholder = 'Email';

    const subject = createNewElement('input', null, null);
    subject.type = 'text';
    subject.placeholder = 'Subject';

    const textArea = createNewElement('textarea', null, null);
    textArea.placeholder = 'Message';

    const send = createNewElement('input', null, null);
    send.type = 'submit';
    send.value = 'Send';

    // Form structure

    form.appendChild(row1);
    row1.appendChild(input501);
    input501.appendChild(firstName);
    row1.appendChild(input502)
    input502.appendChild(lastName);

    form.appendChild(row2);
    row2.appendChild(input503);
    input503.appendChild(email);
    row2.appendChild(input504);
    input504.appendChild(subject);

    form.appendChild(row3);
    row3.appendChild(input101);
    input101.appendChild(textArea);

    form.appendChild(row4);
    row4.appendChild(input102);
    input102.appendChild(send);
}





export { displayContact };