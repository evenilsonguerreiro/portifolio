/* eslint-disable @typescript-eslint/no-unused-vars */

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("formWhatsApp").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const numero = "5585988540568"; // 55 + DDD + número → EX: 5599999999999

    const texto = `Olá, meu nome é ${nome}.%0A${mensagem}`;

    const url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, "_blank");
});

function alterarTema() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.querySelector(".paragrafo").style.color = "black"
        document.querySelector(".paragrafo2").style.color = "black"
        document.querySelector(".paragrafo3").style.color = "black"
        document.querySelector(".title").style.color = "black"
        document.querySelector(".titulo-1").style.color = "black"
        document.querySelector(".titulo-2").style.color = "black"
        document.querySelector(".titulo-3").style.color = "black"
        document.querySelector(".titulo-4").style.color = "black"

    }

    else {
        document.body.style.backgroundColor = "black";
        document.querySelector(".paragrafo").style.color = "white"
        document.querySelector(".title").style.color = "white"
        document.querySelector(".titulo-1").style.color = "white"
        document.querySelector(".titulo-2").style.color = "white"
        document.querySelector(".titulo-3").style.color = "white"
        document.querySelector(".titulo-4").style.color = "white"
        document.querySelector(".paragrafo").style.color = "white"
        document.querySelector(".paragrafo2").style.color = "white"
        document.querySelector(".paragrafo3").style.color = "white"

    }
}