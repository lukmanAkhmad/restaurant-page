// ini module
export function createContactPage(){
    const divContent = document.querySelector('#content');

    // clear #content section
    divContent.replaceChildren();

    divContent.appendChild(createHeaderContent());
    divContent.appendChild(createContactContentOne());
    divContent.appendChild(createContactContentTwo());
    divContent.appendChild(createContactContentThree());

    return;
}

function createHeaderContent(){
    const divContactHeaderContent = document.createElement('div');
    divContactHeaderContent.classList.add('contact-header-content');

    const paraContactHeaderContent = document.createElement('p');
    paraContactHeaderContent.classList.add('para-contact-header-content');
    paraContactHeaderContent.textContent = 'Contact Us';
    divContactHeaderContent.appendChild(paraContactHeaderContent);

    return divContactHeaderContent;
}

function createContactContentOne(){
    const divContactContent = document.createElement('div');
    divContactContent.classList.add('contact-content');

    const h3Person = document.createElement('h3');
    h3Person.classList.add('person');
    h3Person.textContent = 'Mama Bear';
    divContactContent.appendChild(h3Person);

    const paraPosition = document.createElement('p');
    paraPosition.classList.add('position');
    paraPosition.textContent = 'Cheff';
    divContactContent.appendChild(paraPosition);

    const paraPhone = document.createElement('p');
    paraPhone.classList.add('phone');
    paraPhone.textContent = '555-555-5554';
    divContactContent.appendChild(paraPhone);

    const paraEmail = document.createElement('p');
    paraEmail.classList.add('email');
    paraEmail.textContent = 'totallyRealEmail@notFake.com';
    divContactContent.appendChild(paraEmail);

    return divContactContent;
}

function createContactContentTwo(){
    const divContactContent = document.createElement('div');
    divContactContent.classList.add('contact-content');

    const h3Person = document.createElement('h3');
    h3Person.classList.add('person');
    h3Person.textContent = 'Papa Bear';
    divContactContent.appendChild(h3Person);

    const paraPosition = document.createElement('p');
    paraPosition.classList.add('position');
    paraPosition.textContent = 'Manager';
    divContactContent.appendChild(paraPosition);

    const paraPhone = document.createElement('p');
    paraPhone.classList.add('phone');
    paraPhone.textContent = '555-555-5555';
    divContactContent.appendChild(paraPhone);

    const paraEmail = document.createElement('p');
    paraEmail.classList.add('email');
    paraEmail.textContent = 'perfectlyRealEmail@notFake.com';
    divContactContent.appendChild(paraEmail);

    return divContactContent;
}

function createContactContentThree(){
    const divContactContent = document.createElement('div');
    divContactContent.classList.add('contact-content');

    const h3Person = document.createElement('h3');
    h3Person.classList.add('person');
    h3Person.textContent = 'Baby Bear';
    divContactContent.appendChild(h3Person);

    const paraPosition = document.createElement('p');
    paraPosition.classList.add('position');
    paraPosition.textContent = 'Waiter';
    divContactContent.appendChild(paraPosition);

    const paraPhone = document.createElement('p');
    paraPhone.classList.add('phone');
    paraPhone.textContent = '555-555-5556';
    divContactContent.appendChild(paraPhone);

    const paraEmail = document.createElement('p');
    paraEmail.classList.add('email');
    paraEmail.textContent = 'perfectlyRealEmail@notFake.com';
    divContactContent.appendChild(paraEmail);

    return divContactContent;
}