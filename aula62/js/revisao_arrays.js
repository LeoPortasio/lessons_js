const nomes = ['Eduardo', 'Maria', 'João']; // array literal
// const nomes = new Array('Eduardo', 'Maria', 'João');
// podemos utilizar um construtor de arrays
// menos utilizado que a forma convêncional acima(array literal) 
nomes[2] = 'Joana';
delete nomes[2];
// utilizamos delete quando queremos retirar um item do array, mas sem alterar 
// os índices -  ficamos com um valor vazio no array
console.log(nomes);

// funciona com qualquer tipo de dado - boolean, string, inteiros, etc


// _________________________________________________________________________


// valores por referência

// o que fizermos em um array reflete no outro
// const novo = nomes;
// novo.pop();
// console.log(nomes);

// utilizando rest e spread operator [...nome_array]
// o que fazemos em um array não reflete no outro
const novo = [...nomes];
novo.pop();
console.log(nomes);
console.log(novo);


// pop() --> remove do fim do array, podemos retornar o valor removido para uma variável

// shift() --> remove do começo do array, tmb podemos retornar em uma variável, 
// entretanto altera os índices, não fica com valor vazio dentro do array

// push() --> adiciona no final do array

// unshift() --> adiciona no início do array , não é muito comum de ser utilizado
// altera os índices do array, em arrays grandes pode trazer problemas de performace


// fatiamento do array

// slice(início_fatiamento, final_fatiamento_MaisUm_Ou_MenosUm) 

// ex: slice(0, 3) remove do índice 0 até o índice 2

// ex: slice(0, -1) remove o último

// ex: slice(1, -1) remove o primeiro e o último



// Transformar cada valor de uma string em um array

const nome = 'Leonardo Mehler Portasio';
const nomes2 = nome.split(' ');
console.log(nomes2);
console.log(typeof (nomes2));
console.log(typeof (nome));


// tranformando o array para string

const nome2 = ['Leonardo', 'Mehler', 'Portasio'];
const nome_string = nomes2.join(' ');
console.log(nome_string);

