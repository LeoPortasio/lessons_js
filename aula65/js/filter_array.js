// ___________________________Filter, Map, Reduce_____________________________

// ** Filter --> filtra o array --> sempre vai retornar um array com a mesma 
// qtd ou menos de elementos de outro array

// ** Map --> modifica o array                      *** Podemos juntar as três
//                                                  *** Filter - Map - Reduce  
// ** Reduce --> reduz o array a um único valor

// ___________________________________________________________________________


// Retorne os nºs maiores do que 10

const numeros = [5, 25, 100, 89, 3, 7, 6, 1, 35, 50, 2525, 8, 9, 10, 27];
// quando uma variável recebe um array ela se torna um objeto

// function callbackFilter(valor, indice, array) {
//     if (valor >= 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function callbackFilter(valor) {
//     return valor >= 10;                
// }

// const numsFiltrados = numeros.filter(callbackFilter);
// a função callbackFilter é parâmetro para o método filter

// const numsFiltrados = numeros.filter(function (valor) { // função anônima
//     return valor >= 10;
// });

// const numsFiltrados = numeros.filter(valor => { // arrow function
//     return valor >= 10;
// });

// const numsFiltrados = numeros.filter(valor => valor >= 10);
// arrow function com um único parâmetro, retiramos a palavra function e os parênteses
// como só tem um comando, podemos retirar também as chaves e a palavra return 



// const numsFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice);
//     return // valor > 10;
// });

// console.log(numsFiltrados);


// retorne: nomes com 5 letras ou mais
//          idade maior que 50
//          nomes que terminam com "a".
const pessoas = [
    { nome: 'Leo', idade: 45 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomesMaiores = pessoas.filter(obj => obj.nome.length >= 5);
const idadesMaiores = pessoas.filter(obj => obj.idade > 50);
const nomesFinalA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomesMaiores);
console.log(' ');
console.log(idadesMaiores);
console.log(' ');
console.log(nomesFinalA);








