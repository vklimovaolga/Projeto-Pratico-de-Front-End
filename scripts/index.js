document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector(".menu");
    var phoneMenu = document.querySelector(".phoneMenu");
    var login = document.querySelector(".login");
    var phoneLogin = document.querySelector(".phoneLogin");
    phoneMenu.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
    phoneLogin.addEventListener("click", function () {
        login.classList.toggle("show-login");
    });
});
