// ini module
export function createContactPage() {
    const divContent = document.querySelector('#content');

    // clear #content section
    divContent.replaceChildren();

    divContent.appendChild(createHeaderContent());

    content.forEach((item) => {

        const divContactContent = document.createElement('div');
        divContactContent.classList.add('contact-content');

        const h3Person = document.createElement('h3');
        h3Person.classList.add('person');
        h3Person.textContent = item.name;
        divContactContent.appendChild(h3Person);

        const paraPosition = document.createElement('p');
        paraPosition.classList.add('position');
        paraPosition.textContent = item.position;
        divContactContent.appendChild(paraPosition);

        const paraPhone = document.createElement('p');
        paraPhone.classList.add('phone');
        paraPhone.textContent = item.phone;
        divContactContent.appendChild(paraPhone);

        const paraEmail = document.createElement('p');
        paraEmail.classList.add('email');
        paraEmail.textContent = item.email;
        divContactContent.appendChild(paraEmail);

        divContent.appendChild(divContactContent);
    });

    return;
}

function createHeaderContent() {
    const divContactHeaderContent = document.createElement('div');
    divContactHeaderContent.classList.add('contact-header-content');

    const paraContactHeaderContent = document.createElement('p');
    paraContactHeaderContent.classList.add('para-contact-header-content');
    paraContactHeaderContent.textContent = 'Contact Us';
    divContactHeaderContent.appendChild(paraContactHeaderContent);

    return divContactHeaderContent;
}

class Contact {
    constructor(name, position, phone, email) {
        this.name = name;
        this.position = position;
        this.phone = phone;
        this.email = email;
    }
}

let content = [
    new Contact('Mama Bear', 'Cheff', '555-555-5554', 'totallyRealEmail@notFake.com'),
    new Contact('Papa Bear', 'Manager', '555-555-5555', 'perfectlyRealEmail@notFake.com'),
    new Contact('Baby Bear', 'Waiter', '555-555-5556', 'perfectlyRealEmail@notFake.com'),
];