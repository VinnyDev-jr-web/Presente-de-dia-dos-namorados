document.getElementById("botao-sim").addEventListener("click", function() {
    document.getElementById("pergunta").style.display = "none"; // Esconde a pergunta
    document.getElementById("galeria").style.display = "block"; // Exibe a galeria
    iniciarSlide();
    document.body.classList.add("bg-animado");
    const musica = document.getElementById("musica");
    musica.play();
});

const imagens = [
    "imagens/galeria/imagem1.jpg",
    "imagens/galeria/imagem2.jpg",
    "imagens/galeria/imagem3.jpg",
    "imagens/galeria/imagem4.jpg",
    "imagens/galeria/imagem5.jpg"
];

let indiceAtual = 0;
const imgElement = document.getElementById("imagem-slide");

function iniciarSlide() {
    imgElement.src = imagens[indiceAtual];
}

document.getElementById("proximo").addEventListener("click", function() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imgElement.src = imagens[indiceAtual];
});

document.getElementById("anterior").addEventListener("click", function() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    imgElement.src = imagens[indiceAtual];
});