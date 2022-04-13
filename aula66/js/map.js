// map --> 
// recebemos o array com o mesmo tamanho do original
// entretanto com os valores alterados

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(valor => valor * 2);
const numerosEmDobro = numeros.map(function (valor, indice) {
    return indice;
});
// console.log(numerosEmDobro);
// console.log(numerosDobrados);




// Para cada elemento:

// retorne a string com o nome da pessoa
// remova apenas a chave nome do objeto
// adicione chave ID em cada objeto

const pessoas = [
    { nome: 'Leo', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// const nomes = pessoas.map(obj => obj.nome);

// const idades1 = pessoas.map(function (obj) {
//     delete obj.nome;
//     return obj;
// });

// const idades2 = pessoas.map(function (obj) {
//     return { idade: obj.idade };
// });

// const idades3 = pessoas.map(obj => ({ idade: obj.idade }));

// const idades = pessoas.map(obj => obj.idade);

// const geraIddoIndice = pessoas.map(function (obj, indice) {
//     obj.id = (indice + 1) * 10; 
//     return obj;
// }); // desta maneira alteramos também o objeto original

const geraIddoIndice = pessoas.map(function (obj, indice) {
    const newObj = { ...obj }; // cópia do array original
    newObj.id = indice + 1;
    return newObj;
});

// console.log(nomes);
// console.log(idades);
// console.log(idades1);
// console.log(' ');
// console.log(idades2);
// console.log(' ');
// console.log(idades3);
// console.log(' ');
console.log(geraIddoIndice);
console.log(' ');
console.log(pessoas);











