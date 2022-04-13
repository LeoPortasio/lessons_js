// reduce --> reduz o array em um único elemento
// versátil, pois podemos utilizar como map e como filter

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

console.log('--------------------------------------------------------');

// soma de todos os nºs
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0); // valor inicial do acumulador é opcional

console.log(total);

console.log('--------------------------------------------------------');

// retorna array com os valores pares (Filter)
const total1 = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total1);

console.log('--------------------------------------------------------');

// retorna array com os valores dobrados (Map)
const total2 = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(total2);

console.log('--------------------------------------------------------');

const pessoas = [
    { nome: 'Leo', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 190 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// retorne a pessoa mais velha
const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
console.log('--------------------------------------------------------');

