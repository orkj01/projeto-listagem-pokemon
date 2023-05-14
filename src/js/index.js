
// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema")
//passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")


// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {


    //passo 4 - verificar se o body possui modo escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    //toggle usado para adicionar e remover
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        //passo 5 - remover a classe do modo-escuro do body
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        //passo 6 - adicionar a classe modo-escuro no body
        //passo 7 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});

