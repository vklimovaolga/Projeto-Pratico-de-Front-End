document.addEventListener("DOMContentLoaded", ()=>{
    const FormLogin =  <HTMLFormElement>document.getElementById("Form");
    const modalLogin = <HTMLFormElement>document.querySelector(".modal-login");
    const logIn = document.querySelector(".logIn");
    const loginButton = document.querySelector(".loginButton");
    const createAccount = document.querySelector(".createAccount");
    const cancelButtonL = document.querySelector(".cancelButtonL");

    const FormNewAccount = <HTMLFormElement>document.getElementById("Form-new-account");
    const modalNewAccount = <HTMLFormElement>document.querySelector(".modal-new-account");
    const cancelButtonN = document.querySelector(".cancelButtonN");
    const createButton = document.querySelector(".createButton");
    
    const newAccountLink = document.querySelector(".new-account");
    const logInLink = document.querySelector(".log-in");


    logIn.addEventListener("click", () => {
        modalLogin.classList.add("show");
    });

    loginButton.addEventListener("click", ()=> {
        if(FormLogin.username.value == 0){
            alert("Preencha o Nome de Utilizador");
        }

        if(FormLogin.password.value == 0){
            alert("Preencha a Senha");
        }

        if(FormLogin.username.value.length !== 0 && FormLogin.password.value.length !== 0 ){
            modalLogin.classList.remove("show");
        }
    });

    cancelButtonL.addEventListener("click", () => {
            modalLogin.classList.remove("show");
            FormLogin.reset();
    });

    window.addEventListener("click", (event) => {
        if (event.target == modalLogin) {
            modalLogin.classList.remove("show");
            FormLogin.reset();
        }
    });

    newAccountLink.addEventListener("click", () => {
        modalLogin.classList.remove("show");
        modalNewAccount.classList.add("show");    
    });
    
    // -- New Account Modal -- 
    createAccount.addEventListener("click", () => {
        modalNewAccount.classList.add("show");
    });

    window.addEventListener("click", () => {
        if(event.target == modalNewAccount){
            modalNewAccount.classList.remove("show");
            FormNewAccount.reset();
        }
    });

    logInLink.addEventListener("click", () => {
        modalLogin.classList.add("show");
        modalNewAccount.classList.remove("show");
    });

    cancelButtonN.addEventListener("click", () => {
        modalNewAccount.classList.remove("show");
        FormNewAccount.reset();
    });
    
    createButton.addEventListener("click", () => {
        if(FormNewAccount.nome.value == 0){
            alert("Nome é Obrigatório");
        }

        if(FormNewAccount.email.value == 0){
            alert("Email é Obrigatório");
        }

        if(FormNewAccount.password.value == 0){
            alert("Senha é Obrigatória");
        }

        if(FormNewAccount.passwordc.value == 0){
            alert("Confirmar a Senha é Obrigatório");
        }

        if(FormNewAccount.nome.value.length !== 0 && FormNewAccount.email.value.length !== 0 && FormNewAccount.password.value.length !== 0 && FormNewAccount.passwordc.value.length !== 0){
            modalNewAccount.style.display = "none";
        }
    });
});