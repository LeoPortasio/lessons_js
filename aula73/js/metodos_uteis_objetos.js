/*
Object.values
Object.entries
Object.assing(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// já vimos em aulas anteriores
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperty (define uma propriedade)
Object.defineProperties (define várias propriedade)
*/

//Objetos assim como arrays são passados por referência


// const produto = {
//     nome: 'Caneca',
//     preco: 1.80
// }
// const outraCoisa = produto; // link do objeto produto com a constante outraCoisa
// // produto.nome = 'mesa';
// outraCoisa.nome = 'mesa';

// console.log(outraCoisa);
// console.log(produto);
// ambas as constantes (produto e outraCoisa) apontam para o mesmo endereço de memória

// como copiar um objeto para outro sem apontar para o mesmo endereço de memória
// ... spread

// const produto = {
//     nome: 'Caneca',
//     preco: 1.80
// }
// const outraCoisa = { ...produto }; // cópia do objeto
// const outraCoisa = {
//     ...produto,
//     material: 'porcelana' // inclusão da propriedade/chave material no objeto outraCoisa
// };
// outraCoisa.nome = 'mesa';
// outraCoisa.preco = 2.50;

// console.log(outraCoisa);
// console.log(produto);


// const produto = {
//     nome: 'Caneca',
//     preco: 1.80
// }
// const outraCoisa = { nome: produto.nome, preco: produto.preco };
// const outraCoisa = Object.assign({}, produto, { material: 'porcelana' });
// outraCoisa.nome = 'cadeira';
// outraCoisa.preco = 7.30;

// console.log(produto);
// console.log(outraCoisa);

// const produto = {
//     nome: 'Caneca',
//     preco: 1.80
// };
// Object.freeze(produto);      
// produto.nome = 'outro nome'; não conseguiríamos alterar o nome, pois acima congelamos o objeto
// const outraCoisa = {
//     nome: produto.nome,
//     preco: produto.preco
// };
// console.log(Object.keys(produto)); // podemos jogar em uma variável e iterar com o for


// const produto = {
//     nome: 'Caneca',
//     preco: 1.80
// };
// Object.defineProperty(produto, 'nome', {
//     writable: false, // não podemos alterar a propriedade
//     configurable: false // não podemos alterar a propriedade
// });
// // console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'nome novo'; // não atera o nome, pois definimos no descritor writable
// delete produto.nome; // não apaga o nome, pois definimos assim no descritor configurable
// console.log(produto);


const produto = {
    nome: 'Caneca',
    preco: 1.80
};

console.log(Object.keys(produto)); // chaves
console.log(Object.values(produto)); // valor
console.log(Object.entries(produto)); // cada chave e seu valor em um array separado

for (let entry of Object.entries(produto)) {
    console.log(entry);
}

for (let [chave, valor] of Object.entries(produto)) { // destructor
    console.log(chave, valor);
}

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]); // índice 0 = chave e índice 1 = valor - não muito comum
}
