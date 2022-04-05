// funções imediatas (IIFE) -> Immediately invoked function expression

// function qualquerCoisa() {
//     console.log(11111);
// }

// qualquerCoisa();

// (function () {
//     const nome = 'Leo'; // função exibida imediatamente e não toca o escopo global(protege)
//     console.log(nome);
// })();

// const nome = 'qualquer coisa';

(function (idade, peso, altura) {

    const sobrenome = 'Portasio';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Leonardo'));
    }

    falaNome();
    console.log(`Idade: ${idade}, Peso: ${peso}, Altura: ${altura}`);

})(45, 60, 1.75);

