function aceitou() {
    alert("Agora estamos namorando! ❤️🥰");
}

function fugir() {
    let botao = document.getElementById("nao");
    let largura = window.innerWidth - botao.clientWidth;
    let altura = window.innerHeight - botao.clientHeight;
    let novaPosX = Math.random() * largura;
    let novaPosY = Math.random() * altura;
    botao.style.left = novaPosX + "px";
    botao.style.top = novaPosY + "px";
}