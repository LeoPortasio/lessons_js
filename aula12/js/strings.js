let string = '\'texto 01\'';
//  escapa o texto para colocar uma palavra entre aspas simples

let string1 = "\\texto";
//  escapa o texto para colocar uma barra antes da palavra

let string2 = "o rato roeu a roupa do rei de roma";

console.log(string[2]);
// no javascrip cada elemento de um texto é iterável,
// neste caso é exibido a letra (e).

console.log(string1[6]);
// como não tem o elemento 6 na string o retorno é
// undefined
// se for um índice negativo também retorna undefined

console.log(string1.charAt(2));
// O javascript fornece uma gama de opções de métodos para manipular strings
// charAt --> busca o elemento do texto pelo índice

console.log(string.concat(' de estudo'));
// concatena uma string com a string da variável existente
console.log(string + ' de estudo');
// podemos utilizar desta maneira também para concatenar
console.log(`${string} de estudo`)
// ou ainda com template string

console.log(string.indexOf('01'));
// nos diz exatamente onde começa o índice
// de uma determinada palavra ou letra em uma string
// se o retorno for -1 significa undefined, ou seja, não encontrou nada

console.log(string.indexOf('01', 5));
// procura pela string '01' a partir do índice 5

console.log(string.lastIndexOf('01', 5));
// procura pela string '01' a partir do índice 5
// de trás para frente

console.log(string.match(/[a-z]/g));
// match --> permite utilizar expressões regulares
// neste caso retorna todas letras minísculas
// flag 'g' mostra o resultado em uma array

console.log(string.search(/[a-z]/g));
// search--> permite também utilizar expressões regulares
// a diferença para o match é que retorna somente o índice
// neste caso a flag 'g' não faz diferença, pois o search sempre retornará o índice

console.log(string.replace('01', '1'));
// substitui uma letra ou palavra do texto

console.log(string2.replace(/r/g, '*'));
// também podemos utilizar expressões regulares para substituir com o replace
// aqui utilizamos a flag 'g' para substituir todos os 'r' do texto por '*'

console.log(string.length);
// retorna a qtd de caracteres da string

console.log(string.slice(1, 6))
// busca pela string no range específico
// colocar um índice a mais, pois o slice não mostra o último índice
// se utilizamos nº negativo, o slice pega o tamanho da string, menos
// a quantidade de nºs negativos e retorna a string.

console.log(string2.split(' '));
// retorna uma array, separada cada palavra por um espaço

console.log(string2.split(' ', 2));
// retorna uma array, separada cada palavra por um espaço
// com dois resultados somente

console.log(string2.toUpperCase());
console.log(string2.toLowerCase());










