// Script para tornar o menu hamburguer funcional
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navUl = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function () {
        if (navUl.style.display === "block") {
            navUl.style.display = "none";
            menuIcon.classList.remove("open"); // Remove a classe 'open' quando o menu é fechado
        } else {
            navUl.style.display = "block";
            menuIcon.classList.add("open"); // Adiciona a classe 'open' quando o menu é aberto
        }
    });

    const menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navUl.style.display = "none"; // Fecha o menu quando um item do menu é clicado
            menuIcon.classList.remove("open"); // Remove a classe 'open' quando o menu é fechado
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("site-header");
    let prevScrollPos = window.pageYOffset;
    let isVisible = true;

    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            isVisible = true;
        } else {
            isVisible = false;
        }

        if (!isVisible) {
            header.style.top = `-${header.offsetHeight}px`;
        } else {
            header.style.top = "0";
        }

        prevScrollPos = currentScrollPos;
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const estrelas = document.querySelectorAll(".estrelas i");
    const nomeInput = document.getElementById("nome");
    const comentarioTextarea = document.getElementById("comentario");
    const enviarAvaliacaoButton = document.getElementById("enviar-avaliacao");
    const avaliacoesLista = document.querySelector(".avaliacoes-lista");
    const comentariosLista = document.querySelector(".comentarios-lista");

    let notaSelecionada = 0;
    const avaliacoes = [];

    // Adiciona evento de clique a cada estrela
    estrelas.forEach(function (estrela) {
        estrela.addEventListener("click", function () {
            const valor = parseFloat(estrela.getAttribute("data-valor"));
            notaSelecionada = valor;
            atualizaEstrelas();
        });
    });

    enviarAvaliacaoButton.addEventListener("click", function () {
        const nome = nomeInput.value.trim();
        const comentario = comentarioTextarea.value.trim();

        if (notaSelecionada > 0 && nome && comentario) {
            const avaliacao = {
                nome: nome,
                nota: notaSelecionada,
                comentario: comentario,
            };

            // Limpar campos após enviar avaliação
            notaSelecionada = 0;
            nomeInput.value = "";
            atualizaEstrelas();
            comentarioTextarea.value = "";

            // Exibir a avaliação na lista de avaliações
            avaliacoes.push(avaliacao);
            exibirAvaliacao(avaliacao);

            // Adicionar o comentário à lista de comentários
            comentariosLista.appendChild(criarComentario(avaliacao));
        }
    });

    function atualizaEstrelas() {
        estrelas.forEach(function (estrela, index) {
            const valorEstrela = parseFloat(estrela.getAttribute("data-valor"));
            if (valorEstrela <= notaSelecionada) {
                estrela.classList.remove("far");
                estrela.classList.add("fas");
            } else {
                estrela.classList.remove("fas");
                estrela.classList.add("far");
            }
        });
    }

    function exibirAvaliacao(avaliacao) {
        const avaliacaoDiv = document.createElement("div");
        avaliacaoDiv.classList.add("avaliacao");

        // Criar estrelas com base na nota da avaliação
        const estrelasAvaliacao = document.createElement("div");
        estrelasAvaliacao.classList.add("estrelas-avaliacao");
        for (let i = 1; i <= 5; i++) {
            const estrelaAvaliacao = document.createElement("i");
            if (i <= avaliacao.nota) {
                estrelaAvaliacao.classList.add("fas", "fa-star");
            } else {
                estrelaAvaliacao.classList.add("far", "fa-star");
            }
            estrelasAvaliacao.appendChild(estrelaAvaliacao);
        }

        const nomeP = document.createElement("p");
        nomeP.innerText = `Nome: ${avaliacao.nome}`;
        const comentarioP = document.createElement("p");
        comentarioP.innerText = `Comentário: ${avaliacao.comentario}`;

        avaliacaoDiv.appendChild(estrelasAvaliacao);
        avaliacaoDiv.appendChild(nomeP);
        avaliacaoDiv.appendChild(comentarioP);

        // Adicionar a avaliação à lista de avaliações
        avaliacoesLista.appendChild(avaliacaoDiv);
    }

    function criarComentario(avaliacao) {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

        const nomeP = document.createElement("p");
        nomeP.innerText = `Nome: ${avaliacao.nome}`;
        const comentarioP = document.createElement("p");
        comentarioP.innerText = `Comentário: ${avaliacao.comentario}`;

        comentarioDiv.appendChild(nomeP);
        comentarioDiv.appendChild(comentarioP);

        return comentarioDiv;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const perguntas = document.querySelectorAll(".pergunta");

    perguntas.forEach(function (pergunta) {
        const titulo = pergunta.querySelector(".pergunta-titulo");
        const resposta = pergunta.querySelector(".resposta");

        titulo.addEventListener("click", function () {
            if (resposta.style.display === "none" || resposta.style.display === "") {
                resposta.style.display = "block";
                titulo.classList.add("clicada");
            } else {
                resposta.style.display = "none";
                titulo.classList.remove("clicada");
            }
        });
    });
});
