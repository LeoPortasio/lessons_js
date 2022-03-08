let pessoas = ['João', 'Maria', 'Leo'];
console.log(pessoas);
// criamos array utilizando colchetes
// podemos utilizar outros tipos de dados em um mesmo array
// ex: [1, true, null];
// arrays tem seus índices por elemento

console.log(pessoas[0]); // exibi 1º item do array
pessoas[0] = 'Márcia'; // altera valor do array no índice 0
pessoas[3] = 'Fábio'; // inclui valor no array - índice que não existia
console.log(pessoas.length); // tamanho do array
pessoas[pessoas.length] = 'Clara'; //inclui valor ao final do array
pessoas.push('Elaine'); // inclui valor ao final do array
pessoas.unshift('Luiza') //inclui valor no início do array
const removido = pessoas.pop(); // exclui último elemento do array e guarda na memória
const removidoDois = pessoas.shift(); // exclui primeiro elemento do array e guarda na memória
console.log(removido);
console.log(removidoDois);
console.log(pessoas);
// observe que os íncides do array estão sendo alterados

delete pessoas[0]; // exclui o elemento do índice 0, entretanto mantém o índice como vazio(empty item)
console.log(pessoas);
console.log(pessoas[0]); // undefined
console.log(pessoas[100]); //undefined - não existe esse índice, entretanto o JavaScript não gera error

console.log(pessoas);
console.log(pessoas.slice(0, 3)); // fatia até o índice 2
console.log(pessoas.slice(0, -1)); // fatia até o penúltimo elemento

console.log(typeof pessoas); // retorna object - array em JavaScript é um objeto
console.log(pessoas instanceof Array); //verifica se é um array

pessoas = 123; //alteramos nosso array para um number
console.log(pessoas instanceof Array); // agora retorna false



