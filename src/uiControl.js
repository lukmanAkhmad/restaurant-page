function screenController() {
    const divContent = document.querySelector("#content");
    const btnHome = document.querySelector("#btn-home");
    const btnMenu = document.querySelector("#btn-menu");
    const btnAbout = document.querySelector("#btn-about");

    btnHome.addEventListener("click", renderHome);
    btnMenu.addEventListener("click", () => {
        console.log("button menu onclick")
    });
    btnAbout.addEventListener("click", () => {
        console.log("button about onclick")
    });


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
        locationSection.classList.add("div-locationSection","cont-section");
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

    renderHome();
}
export { screenController };