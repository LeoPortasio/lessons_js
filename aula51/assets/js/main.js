// // return --> retorna um valor e encerra a função

// function soma(a, b) {
//     return a + b;
// }
// // --------------------------------------------------------------------------------------------------
// function soma2(a, b) {
//     console.log(a + b); // esta função não retona nada, somente mostra no console a soma de dois parâmetros
// }
// // --------------------------------------------------------------------------------------------------
// soma2(2, 5);
// console.log(soma(2, 5));
// soma(2, 5); // não mostra nada no console, pois a função somente retona a soma
// let s = soma(2, 5); // podemos armazenar o retorno da função em uma variável definindo seus valores
// console.log(s);

// // --------------------------------------------------------------------------------------------------


// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red'; // retorno da função
// });

// --------------------------------------------------------------------------------------------------


// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome }; // chave e valor nome - chave e valor sobrenome
//     // return { nome: nome, sobrenome: sobrenome};
// }
// const p1 = criaPessoa('Leo', 'Portasio'); // objeto p1 contém chave nome: valor Leo - chave sobrenome: valor Portasio
// // --------------------------------------------------------------------------------------------------
// const p2 = { // objeto
//     nome: 'João', // chave e valor
//     sobrenome: 'Gomes' // chave e valor
// };
// console.log(p1);
// console.log(p2);
// console.log(typeof (p1));
// console.log(typeof (p2));

// --------------------------------------------------------------------------------------------------

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto; // utiliza como retorno o parâmetro da função pai
    }
    return falaResto; //retorno sem executar a função (sem os parenteses), estamos retornando a função em si
}

// const olaMundo = falaFrase('Ola');
// console.log(olaMundo('mundo!'));
const fala = falaFrase('ola');
const resto = fala('mundo!');
console.log(resto);
// --------------------------------------------------------------------------------------------------
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5));

// --------------------------------------------------------------------------------------------------



