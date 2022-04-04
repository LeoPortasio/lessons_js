// function funcao() {
//     console.log(arguments[0]);
// }
// funcao('Valor');  // podemos enviar argumentos sem os parâmetros da função que não ocorre erro

// ----------------------------------------------------------------------------------------------

// function funcao() { // podemos definir menos parâmetros que a quantidade de argumentos
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1, 2, 3);

// ----------------------------------------------------------------------------------------------

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f); 
// }
// funcao(1, 2, 3); // não gera erro, os demais argumentos não declarados nos parâmetros serão Undefined

// ----------------------------------------------------------------------------------------------

// function funcao(a, b) {
//     console.log(a + b);
// }
// funcao(2); // NaN

// ----------------------------------------------------------------------------------------------

// function funcao(a, b) {
//     b = b || 2;
//     console.log(a + b);
// }
// funcao(2);

// ----------------------------------------------------------------------------------------------

// function funcao(a, b = 0) {
//     console.log(a + b);
// }
// funcao(2);

// ----------------------------------------------------------------------------------------------

// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2, 10);
// resultado 16 - ignora o valor de b passado no parâmetro e assume o valor 10 de b passado no argumento

// ----------------------------------------------------------------------------------------------

// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2, undefined, 10);
// undefined e somente undefined assume valor do parâmetro b - resultado 14 (não é recomendado)

// ----------------------------------------------------------------------------------------------

// atribuição via desestruturação

// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// funcao({ nome: 'Leo', sobrenome: 'Portasio', idade: 45 });

// funções com o mesmo resultado

function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Leo', sobrenome: 'Portasio', idade: 45 }
funcao(obj);

// ----------------------------------------------------------

function vetor([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
vetor(['Leonardo Marcelo', 'Mehler Portasio', 'Joaquim']);

// ----------------------------------------------------------
// outra forma

// function conta(operador, acumulador, ...numeros) { // rest operator sempre último parâmetro
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '*') acumulador *= numero;
//         if (operador === '/') acumulador /= numero;
//     }
//     console.log(acumulador);
// }
// conta('+', 0, 20, 30, 40, 50);
// conta('*', 1, 20, 30, 40, 50);

// const conta = function (operador, acumulador, ...numeros) { // function express
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '*') acumulador *= numero;
//         if (operador === '/') acumulador /= numero;
//     }
//     console.log(acumulador);
// };
// conta('+', 0, 20, 30, 40, 50);
// conta('*', 1, 20, 30, 40, 50);

// arrow function NÃO TEM COMO PARÂMETRO arguments
// ENTRETANTO PODEMOS UTILIZAR args

// const conta = (operador, acumulador, ...numeros) => {
//     console.log(operador, acumulador, numeros);
// };
// conta('+', 0, 20, 30, 40, 50);

const conta = (...args) => { // rest operator para todos os argumentos
    console.log(args);
};
conta('+', 0, 20, 30, 40, 50);
