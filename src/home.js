// ini module
export function createHomePage() {
    const divContent = document.querySelector('#content');

    // clear #content section
    divContent.replaceChildren();

    divContent.appendChild(createHeaderContent());
    divContent.appendChild(createReview());
    divContent.appendChild(createHour());
    divContent.appendChild(createLocation());

    return;
}

function createHeaderContent() {
    const divHeaderContent = document.createElement('div');
    divHeaderContent.classList.add('header-content');

    const paraHeaderContent = document.createElement('p');
    paraHeaderContent.classList.add('para-header-content');
    paraHeaderContent.textContent = 'Honeydew Breakfast Bar';

    divHeaderContent.appendChild(paraHeaderContent);

    return divHeaderContent;
}

function createReview() {
    const divReview = document.createElement('div');
    divReview.classList.add('review');

    const paraReview = document.createElement('p');
    paraReview.classList.add('para-review');
    paraReview.textContent = 'Honeydew has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.';

    const paraCustomer = document.createElement('div');
    paraCustomer.classList.add('customer');
    paraCustomer.textContent = '- Batman';

    divReview.appendChild(paraReview);
    divReview.appendChild(paraCustomer);

    return divReview;
}

function createHour() {
    const divHour = document.createElement('div');
    divHour.classList.add('hour');

    const h3HeaderHour = document.createElement('h3');
    h3HeaderHour.classList.add('header-hour');
    h3HeaderHour.textContent = 'Hour';
    divHour.appendChild(h3HeaderHour);

    const paraHourSunday = document.createElement('p');
    paraHourSunday.classList.add('para-hour');
    paraHourSunday.textContent = 'Sunday: 8am - 8pm';
    divHour.appendChild(paraHourSunday);

    const paraHourMonday = document.createElement('p');
    paraHourMonday.classList.add('para-hour');
    paraHourMonday.textContent = 'Monday: 6am - 6pm';
    divHour.appendChild(paraHourMonday);

    const paraHourTuesday = document.createElement('p');
    paraHourTuesday.classList.add('para-hour');
    paraHourTuesday.textContent = 'Tuesday: 6am - 6pm';
    divHour.appendChild(paraHourTuesday);

    const paraHourWednesday = document.createElement('p');
    paraHourWednesday.classList.add('para-hour');
    paraHourWednesday.textContent = 'Wednesday: 6am - 6pm';
    divHour.appendChild(paraHourWednesday);

    const paraHourThursday = document.createElement('p');
    paraHourThursday.classList.add('para-hour');
    paraHourThursday.textContent = 'Thursday: 6am - 10pm';
    divHour.appendChild(paraHourThursday);

    const paraHourFriday = document.createElement('p');
    paraHourFriday.classList.add('para-hour');
    paraHourFriday.textContent = 'Friday: 6am - 10pm';
    divHour.appendChild(paraHourFriday);

    const paraHourSaturday = document.createElement('p');
    paraHourSaturday.classList.add('para-hour');
    paraHourSaturday.textContent = 'Saturday: 8am - 10pm';
    divHour.appendChild(paraHourSaturday);

    return divHour;
}

function createLocation(){
    const divLocation = document.createElement('div');
    divLocation.classList.add('location');

    const h3HeaderLocation = document.createElement('h3');
    h3HeaderLocation.classList.add('header-location');
    h3HeaderLocation.textContent = 'Location';
    divLocation.appendChild(h3HeaderLocation);

    const paraLocation = document.createElement('p');
    paraLocation.classList.add('para-location');
    paraLocation.textContent = '123 Forest Drive, Forestville, Maine';
    divLocation.appendChild(paraLocation);

    return divLocation;
}