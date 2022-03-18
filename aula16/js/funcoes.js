function saudacao(nome) {
    return `Olá ${nome}!`;
}
const variavel = saudacao('Leo');
console.log(variavel); // a função é executada, porém retorna undefined se não
// for definido um retorno para função


function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));
// Se tivermos valores definidos no parâmetro(ex: x = 1, y = 1) e não passarmos
// nenhum valor como argumento a constante resultado irá receber estes valores
//somados(neste caso a função soma)
// Porém de passarmos valores no argumento a constante resultado irá receber a 
// soma destes valores, ou seja substitui o valor definido no parâmetro.
// também podemos passar somente um valor no argumento, ele irá somar com o 
// outro valor passado no parâmetro


const raiz = function (n) { // função anônima -> quando uma variável recebe uma função
    return n ** 0.5;
};
console.log(raiz(9));


const raizQuadrada = (n) => { // arrow function (maneira mais moderna de criar função)
    return n ** 0.5
};
console.log(raizQuadrada(9));

const raisQuadradaUm = n => n ** 0.5;
// declaração de arrow function, quando tem somente uma linha de código dentro
// da função, simplificação da arrow function acima.
// agiliza a vida do programador 

