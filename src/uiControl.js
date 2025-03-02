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
        console.log("button home onclick");
        const heading = document.createElement("div");
        heading.classList.add = "div-heading";

        heading.textContent = "My Restaurant";

        divContent.appendChild(heading);
    }

    renderHome();
}
export { screenController };