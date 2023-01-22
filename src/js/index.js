/*  

OBJETIVO 1 - quando o usuário cliacar no botão de veja o trailer, devmos abrir a modal com o video do trailer

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal

OBJETIVO 1 - quando o usuário cliacar no botão de veja o trailer, devmos abrir a modal com o video do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js 
    - passo 2 - dar um meito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - passo 3 - fechar modal
*/
   
console.log('mostrar o document', document);
const video = document.getElementById("video");
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "")
})