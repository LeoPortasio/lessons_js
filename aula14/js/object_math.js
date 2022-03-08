// objeto Math

// window.document --> object móvel --> DOM

let num1 = 9.54578;

let num2 = Math.floor(num1);
console.log(num2);

let num3 = Math.ceil(num1);
console.log(num3);
// floor arredonda o valor para baixo
// ceil arredonda para cima

let num4 = Math.round(num1);
console.log(num4);

console.log(Math.max(1, 100, 1000, -2, -100, -1000, 3000));
console.log(Math.min(1, 100, 1000, -2, -100, -1000, 3000));
// mostra o maior ou o menor número de uma sequência de números respectivamente

const aleatorio = Math.random();
console.log(aleatorio);
// gera números aleatórios entre 0 e 1

const aleatorio1 = Math.random() * (10 - 5) + 5;
console.log(aleatorio1);
// gera números aleaórios em um range de 5 até 10

const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio2);

console.log(Math.PI);
// mostra o PI

console.log(Math.pow(2, 10));
// potenciação - 2 elevado a 10
// mais fácil utilizar o operador console.log(2 ** 4);

num5 = 25;
console.log(num5 ** 0.5);
// raíz quadrada de num5

console.log(100 / 0);
// em JavaScript não da erro divisão por 0
// retorna true
// infinity - tipo de retorno em Java Script de número infinito



