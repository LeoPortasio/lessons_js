// VALORES PRIMITIVOS E VALORES POR REFERÊNCIA

/* 
PRIMITIVOS: imutáveis --> valores copiados
string - number - boolean - undefined - null - (bigint - symbol)

*/

let nome = 'Leonardo';
nome[0] = 'R'; // não gera erro, entretanto, nada acontece, pois o dado é imutável
nome = 'Miranda' // alteramos o dado de Leo para Miranda
console.log(nome);

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'outra coisa'; //não altera valor da variável b
console.log(a, b);


/* *********************************************************** */

/* 
REFERÊNCIA: mutáveis --> valores passados por referência
arrays, objetos, funções

*/

let c = [1, 2, 3];
let d = c; // não é uma cópia, aponta para o mesmo endereço de memória
console.log(c, d);

c.push(4); // acrescentando um valor em c, acrescenta também em d
console.log(c);
console.log(d);

d.pop();
console.log(c);
console.log(d);

let e = [...c]; // copia de valor mutável da variável "c" para variável "e"
console.log(e);
console.log(c);
e.push(4);
console.log(e);
console.log(c);
console.log(d);

// se alterarmos "c", "d" também será alterado e vice e versa, entretanto "e" tem seu valor
// inalterado, independente, pois foi feita uma cópia de "c", então "e" tem seu valor
// em outro endereço de memória.

const f = {
    nome: 'Leo',
    sobrenome: 'Portasio'
};
const g = f;

f.nome = 'João';
console.log(g);
console.log(f);

// a mesma regra de valor passado por referência vale para objetos

const h = { ...f };
h.nome = 'Maria';
console.log(h);
console.log(f);
