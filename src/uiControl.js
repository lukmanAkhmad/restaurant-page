import { beverages, sides, mainDishes } from "./restaurant-menu";
import { contact } from "./contact";

function screenController() {
    const divContent = document.querySelector("#content");
    const btnHome = document.querySelector("#btn-home");
    const btnMenu = document.querySelector("#btn-menu");
    const btnContact = document.querySelector("#btn-contact");

    btnHome.addEventListener("click", renderHome);
    btnMenu.addEventListener("click", renderMenu);
    btnContact.addEventListener("click", renderContact);

    function renderHome() {
        divContent.textContent = "";

        const heading = document.createElement("div");
        heading.classList.add("div-heading");
        heading.textContent = "Beary's Breakfast Bar";

        const reviewSection = document.createElement("div");
        reviewSection.classList.add("div-reviewSection", "cont-section");
        const reviewText = document.createElement("p");
        reviewText.classList.add("p-review");
        const customerText = document.createElement("p");
        customerText.classList.add("p-customer");
        reviewText.textContent = `
        Beary's has the best porridge! 
        The atmosphere and customer service make you feel like you are sitting in the middle of the woods,
        eating like a bear! 
        This is exactly the kind of place that I like to return to again and again.
        `;
        customerText.textContent = "Goldilocks"
        reviewSection.appendChild(reviewText);
        reviewSection.appendChild(customerText);

        const hourSection = document.createElement("div");
        hourSection.classList.add("div-hourSection", "cont-section");
        const hourTitle = document.createElement("h3");
        hourTitle.classList.add("h3-hour");
        const sundayText = document.createElement("p");
        sundayText.classList.add("sunday-text", "days");
        const mondayText = document.createElement("p");
        mondayText.classList.add("monday-text", "days");
        const tuesdayText = document.createElement("p");
        tuesdayText.classList.add("tuesday-text", "days");
        const wednesdayText = document.createElement("p");
        wednesdayText.classList.add("wednesday-text", "days");
        const thursdayText = document.createElement("p");
        thursdayText.classList.add("thursday-text", "days");
        const fridayText = document.createElement("p");
        fridayText.classList.add("friday-text", "days");
        const saturdayText = document.createElement("p");
        saturdayText.classList.add("saturday-text", "days");
        hourTitle.textContent = "Hour";
        sundayText.textContent = "Sunday: 8am - 8pm";
        mondayText.textContent = "Monday: 6am - 6pm";
        tuesdayText.textContent = "Tuesday: 6am - 6pm";
        wednesdayText.textContent = "Wednesday: 6am - 6pm";
        thursdayText.textContent = "Thursday: 6am - 10pm";
        fridayText.textContent = "Friday: 6am - 10pm";
        saturdayText.textContent = "Saturday: 8am - 10pm";
        hourSection.appendChild(hourTitle);
        hourSection.appendChild(sundayText);
        hourSection.appendChild(mondayText);
        hourSection.appendChild(thursdayText);
        hourSection.appendChild(wednesdayText);
        hourSection.appendChild(thursdayText);
        hourSection.appendChild(fridayText);
        hourSection.appendChild(saturdayText);

        const locationSection = document.createElement("div");
        locationSection.classList.add("div-locationSection", "cont-section");
        const locationTitle = document.createElement("h3");
        locationTitle.classList.add("h3-location");
        const locationText = document.createElement("p");
        locationText.classList.add("p-locationText");
        locationTitle.textContent = "Location";
        locationText.textContent = "123 Forest Drive, Forestville, Maine";
        locationSection.appendChild(locationTitle);
        locationSection.appendChild(locationText);

        divContent.appendChild(heading);
        divContent.appendChild(reviewSection);
        divContent.appendChild(hourSection);
        divContent.appendChild(locationSection);
    };

    function renderMenu() {
        divContent.textContent = "";

        const headingMenu = document.createElement("div");
        headingMenu.classList.add("div-headingMenu");
        headingMenu.textContent = "Menu";

        const headingBeverages = document.createElement("div");
        headingBeverages.classList.add("div-title-menu");
        headingBeverages.textContent = "Beverages";

        divContent.appendChild(headingMenu);
        divContent.appendChild(headingBeverages);

        beverages.forEach((val) => {
            const menuSection = document.createElement("div");
            menuSection.classList.add("div-menuSection");
            const itemName = document.createElement("h3");
            itemName.classList.add("h3-itemName");
            const itemDescription = document.createElement("p");
            itemDescription.classList.add("p-itemDescription");
            const itemPrice = document.createElement("p");
            itemPrice.classList.add("p-itemPrice");
            itemName.textContent = val.name;
            itemDescription.textContent = val.description;
            itemPrice.textContent = val.price;
            menuSection.appendChild(itemName);
            menuSection.appendChild(itemDescription);
            menuSection.appendChild(itemPrice);
            divContent.appendChild(menuSection);

        });

        const headingSides = document.createElement("div");
        headingSides.classList.add("div-title-menu");
        headingSides.textContent = "Sides";

        divContent.appendChild(headingSides);

        sides.forEach((val) => {
            const menuSection = document.createElement("div");
            menuSection.classList.add("div-menuSection");
            const itemName = document.createElement("h3");
            itemName.classList.add("h3-itemName");
            const itemDescription = document.createElement("p");
            itemDescription.classList.add("p-itemDescription");
            const itemPrice = document.createElement("p");
            itemPrice.classList.add("p-itemPrice");
            itemName.textContent = val.name;
            itemDescription.textContent = val.description;
            itemPrice.textContent = val.price;
            menuSection.appendChild(itemName);
            menuSection.appendChild(itemDescription);
            menuSection.appendChild(itemPrice);
            divContent.appendChild(menuSection);

        });

        const headingMainDishes = document.createElement("div");
        headingMainDishes.classList.add("div-title-menu");
        headingMainDishes.textContent = "Main Dishes";

        divContent.appendChild(headingMainDishes);

        mainDishes.forEach((val) => {
            const menuSection = document.createElement("div");
            menuSection.classList.add("div-menuSection");
            const itemName = document.createElement("h3");
            itemName.classList.add("h3-itemName");
            const itemDescription = document.createElement("p");
            itemDescription.classList.add("p-itemDescription");
            const itemPrice = document.createElement("p");
            itemPrice.classList.add("p-itemPrice");
            itemName.textContent = val.name;
            itemDescription.textContent = val.description;
            itemPrice.textContent = val.price;
            menuSection.appendChild(itemName);
            menuSection.appendChild(itemDescription);
            menuSection.appendChild(itemPrice);

            divContent.appendChild(menuSection);
        });
    };

    function renderContact() {
        console.log("button Contact onclick")
        divContent.textContent = "";

        const headingContact = document.createElement("div");
        headingContact.classList.add("div-headingContact");
        headingContact.textContent = "Contact Us";

        divContent.appendChild(headingContact);

        contact.forEach((val) => {
            const menuSection = document.createElement("div");
            menuSection.classList.add("div-menuSection");
            const personName = document.createElement("h3");
            personName.classList.add("h3-personName");
            const personPosition = document.createElement("p");
            personPosition.classList.add("p-personPosition");
            const personPhone = document.createElement("p");
            personPhone.classList.add("p-personPhone");
            const personEmail = document.createElement("p");
            personEmail.classList.add("p-personEmail");
            personName.textContent = val.name;
            personPosition.textContent = val.position;
            personPhone.textContent = val.phone;
            personEmail.textContent = val.email;
            menuSection.appendChild(personName);
            menuSection.appendChild(personPosition);
            menuSection.appendChild(personPhone);
            menuSection.appendChild(personEmail);
            divContent.appendChild(menuSection);

        });
    };

    renderHome();
};
export { screenController };