// LÓGICA DE PROGRAMAÇÃO
// [x]Saber quando o usuário clicou no botão
// [x] Mudar o posiciinamento do Modal
// [x] Fazer a máscara ficar visível

const modal = document.querySelector('.modal');
const mascara = document.querySelector('.mascara-modal');


function mostrarModal() {
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    mascara.style.visibility = 'visible';
}

function esconderModal() {
    modal.style.left = '-19%';
    modal.style.transform = 'translate(-200%, -50%)';
    mascara.style.visibility = 'hidden';
}