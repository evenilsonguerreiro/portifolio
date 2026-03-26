

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

        $header.style.backgroundColor = "white"

        // outra forma de deixar o código mais curto // declarando a vareavel 

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

        document.querySelector(".header").style.backgroundColor = "black"

    }
}


setTimeout(() => {
    alert("Seja Bem-Vindos")
}, 3000);


