const frutas = ['Pêra', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }


// for in --> lê os índices do array ou chaves do objeto
for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Leo',
    Sobrenome: 'Portasio',
    idade: 45
};

console.log(pessoa.nome); // 1ª forma de acessar valor da chave nome do objeto pessoa
console.log(pessoa['nome']); // 2ª forma de acessar valor da chave nome  do objeto pessoa

const chave = 'nome';
console.log(pessoa[chave]); // 3ª forma de acessar valor da chave nome do objeto pessoa

for (let indices in pessoa) {
    console.log(indices); // mostra as chaves do objeto pessoa
}

for (let chaves in pessoa) {
    console.log(pessoa[chaves]); // mostra os valores do objeto pessoa
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); // mostra as chaves e os valores do objeto pessoa
}
