//Criando um redirecionamento direto para o email do portifolio
var emailLink = document.getElementById("emailLink");
var destinatario = "gabrielhenriqueferreiraalves07@gmail.com";

emailLink.addEventListener("click", function () {
    var link = "mailto:" + destinatario;
    window.location.href = link;
});

//Criando as funções para redirecionamento para as redes sociais do portifolio
function redirecionarLinkedin() {
    window.location.href = "https://www.linkedin.com/in/henrick007/";
}

function redirecionarWhatsApp() {
    window.location.href = "https://wa.me/5565993232797";
}

function redirecionarGithub() {
    window.location.href = "https://github.com/henrick007";
}