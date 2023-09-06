import GeraCPF  from './modules/GeraCPF';

import './assets/css/style.css';

let button = document.querySelector('.generator-cpf');

button.addEventListener('click', () => {
    const cpf = new GeraCPF();
    let div = document.querySelector('.cpf-value');
    div.innerHTML = cpf.geraNewCpf();
})

