const nome = 'Leo'; // string
const nome1 = "Leo"; // string
const nome2 = `Leo`; // string
const num1 = 10; // number
const num2 = 10.5; // number
let nomeEmpregado; // undefined --> não aponta para nenhum local na memória
const sobrenome = null; // nulo --> não aponta para nenhum local na memória
const boolean = true; // valores boleanos somente verdadeiro ou falso (valor lógico)

// console.log(typeof nomeEmpregado, sobrenome);

/* null x undefined

null --> dizemos explicitamente que tal variável não deve apontar para nenhum endereço de memória

undefined --> o JavaScript define que tal variável não aponta para nenhum endereço de memória
*/

/* tipo de dado por referência no JavaScript*/


const arrayA = [1, 2];
const arrayB = arrayA;

console.log(arrayA, arrayB);

arrayB.push(3);
console.log(arrayA, arrayB);

/* dado passado por referência como acima
apontam para o mesmo local/endereço de memória
então tanto arrayA, como arrayB terão como resultado
console.log(arrayA, arrayB) --> [1, 2, 3] [1, 2, 3]
ou seja se alteramos o valor de um dado afeta o outro
*/

// já com dados primitivos isso não acontece
// se alteramos um dado o outro não é afetado