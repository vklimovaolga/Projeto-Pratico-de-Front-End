document.addEventListener("DOMContentLoaded", function () {
    var FormLogin = document.getElementById("Form");
    var modalLogin = document.querySelector(".modal-login");
    var logIn = document.querySelector(".logIn");
    var loginButton = document.querySelector(".loginButton");
    var createAccount = document.querySelector(".createAccount");
    var cancelButtonL = document.querySelector(".cancelButtonL");
    var FormNewAccount = document.getElementById("Form-new-account");
    var modalNewAccount = document.querySelector(".modal-new-account");
    var cancelButtonN = document.querySelector(".cancelButtonN");
    var createButton = document.querySelector(".createButton");
    var newAccountLink = document.querySelector(".new-account");
    var logInLink = document.querySelector(".log-in");
    logIn.addEventListener("click", function () {
        modalLogin.classList.add("show");
    });
    loginButton.addEventListener("click", function () {
        if (FormLogin.username.value == 0) {
            alert("Preencha o Nome de Utilizador");
        }
        if (FormLogin.password.value == 0) {
            alert("Preencha a Senha");
        }
        if (FormLogin.username.value.length !== 0 && FormLogin.password.value.length !== 0) {
            modalLogin.classList.remove("show");
        }
    });
    cancelButtonL.addEventListener("click", function () {
        modalLogin.classList.remove("show");
        FormLogin.reset();
    });
    window.addEventListener("click", function (event) {
        if (event.target == modalLogin) {
            modalLogin.classList.remove("show");
            FormLogin.reset();
        }
    });
    newAccountLink.addEventListener("click", function () {
        modalLogin.classList.remove("show");
        modalNewAccount.classList.add("show");
    });
    // -- New Account Modal -- 
    createAccount.addEventListener("click", function () {
        modalNewAccount.classList.add("show");
    });
    window.addEventListener("click", function () {
        if (event.target == modalNewAccount) {
            modalNewAccount.classList.remove("show");
            FormNewAccount.reset();
        }
    });
    logInLink.addEventListener("click", function () {
        modalLogin.classList.add("show");
        modalNewAccount.classList.remove("show");
    });
    cancelButtonN.addEventListener("click", function () {
        modalNewAccount.classList.remove("show");
        FormNewAccount.reset();
    });
    createButton.addEventListener("click", function () {
        if (FormNewAccount.nome.value == 0) {
            alert("Nome é Obrigatório");
        }
        if (FormNewAccount.email.value == 0) {
            alert("Email é Obrigatório");
        }
        if (FormNewAccount.password.value == 0) {
            alert("Senha é Obrigatória");
        }
        if (FormNewAccount.passwordc.value == 0) {
            alert("Confirmar a Senha é Obrigatório");
        }
        if (FormNewAccount.nome.value.length !== 0 && FormNewAccount.email.value.length !== 0 && FormNewAccount.password.value.length !== 0 && FormNewAccount.passwordc.value.length !== 0) {
            modalNewAccount.style.display = "none";
        }
    });
});
