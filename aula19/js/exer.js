// IIFE -- função anônima auto invocada

// function meuEscopo() {
//     const form = document.querySelector('.form');

// *****forma nº 1

// form.onsubmit = function (evento) { --> IIFE
//     evento.preventDefault(); 
//     alert(1);
//     console.log('foi enviado');
// };

// *****forma nº 2

//     contador = 1;
//     function recebeEventoForm(evento) {
//         evento.preventDefault();
//         console.log(`form não enviado ${contador}`);
//         contador++;
//     };
//     form.addEventListener('submit', recebeEventoForm); --> maneira mais moderna de capturar o evento
// }
// meuEscopo();

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value, // chave: valor
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} - ${sobrenome.value} - ${peso.value} - ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

