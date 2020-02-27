document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const phoneMenu = document.querySelector(".phoneMenu");
    const login = document.querySelector(".login");
    const phoneLogin = document.querySelector(".phoneLogin");

    phoneMenu.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    phoneLogin.addEventListener("click", () => {
        login.classList.toggle("show-login");
    });


});