let i = 0;             // variável de controle

while (i <= 10) {     // condição
    console.log(i);
    i++;             //  atualização da variável de controle
}
// se não atualizarmos a variável de controle, o laço fica infinito
// vai travar seu computador
console.log('____________________________________')
console.log('');
console.log('Segue a vida...');
console.log('____________________________________')
console.log('');
// neste caso não é recomendado utilizar o while e sim o for
const nome = 'Leo';
let j = 0;
while (j < nome.length) {
    console.log(nome[j]);
    j++
}
console.log('____________________________________')
console.log('');
// caso mais apropriado para utilizar while
// gerar um número randômico
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

// let rand = random(1, 50);
// console.log(rand);

// exercícios --> quando o nº randômico for 10, ele sai so laço

const min = 1;
const max = 50;
// let rand = random(min, max);
let rand = 10;

while (rand !== 10) {
    rand = random(min, max); // quando for true acaba o laço
    console.log(rand);
}

console.log('condição para while --> true de cara!!!');
console.log('____________________________________')

do {
    rand = random(min, max); // quando for true acaba o laço
    console.log(rand);
} while (rand !== 10);