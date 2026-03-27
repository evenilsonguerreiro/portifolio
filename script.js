

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("formWhatsApp").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const numero = "5585988540568"; 

    const texto = `Olá, meu nome é ${nome}.%0A${mensagem}`;

    const url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, "_blank");
});

let $header = document.querySelector(".header")
// declarando a vareavel //

function alterarTema() {
   
   document.body.classList.toggle("tema-claro");
   
}


setTimeout(() => {
    alert("Seja Bem-Vindos")
}, 3000);


