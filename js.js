function ligar () {
    var lampada = window.document.querySelector('.lampada');

    lampada.src = 'imagens/ligada.jpg';
}

function desligar() {
    var lampada = window.document.querySelector('.lampada');

    lampada.src = 'imagens/desligada.jpg';
}

const lampada = window.document.querySelector('.lampada');

lampada.addEventListener('mouseenter', mouseOn);
lampada.addEventListener('mouseout', mouseOff);

function mouseOn() {
    lampada.src = 'imagens/ligada.jpg';
}

function mouseOff() {
    lampada.src = 'imagens/desligada.jpg';
}