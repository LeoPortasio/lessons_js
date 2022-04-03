// Declaração de função --> function hoisting

// a enginne do js eleva as declarações de funções e variáveis declaradas com a 
// palavra var ao top. 

// Isso significa que podemos chamar a função depois de 
// declará-la ou mesmo antes de declarar a função

falaOi();

function falaOi() {
    console.log('Oie');
}
// _______________________________________________________

// first-class objects (objetos de primeira classe)

// podemos tratar as funções como dado --> function expression
const souUmDado = function () {
    console.log('Sou um dado');
}
// souUmDado(); // nossa constante executa como se fosse uma função

// podemos utilizar essa constante da nossa função como parâmetro de outra 
// função e fazer essa outra função executar nossa função

function executaFuncao(funcao) {
    funcao() // executa o parâmetro
}
executaFuncao(souUmDado);

// _______________________________________________________

// arrow function 

const funcaoArrow = () => {
    console.log('sou uma Arrow Function');
};
funcaoArrow();

// Função anônima
// setInterval(function() {

// }, 1000);

// estamos tratando essa função como dado, porque estamos passado uma função
// como parâmetro para outra função

// TODAS ESTAS FUNÇÕES ACIMA E ABAIXO SÃO FUNÇÕES DE PRIMEIRA CLASSE

// dentro de um objeto 
const obj = {
    falar: function () { // o atributo do objeto recebe a função anônima(função método de um objeto) 
        console.log('Estou falando...');
    }
};
obj.falar();

// nas versões mais novas do js podemos declarar o método do objeto sem os ":"
// e sem a palavra function

// const obj = {
//     falar() { // o atributo do objeto recebe a função anônima(função método de um objeto) 
//         console.log('Estou falando...');
//     }
// };
// obj.falar();



