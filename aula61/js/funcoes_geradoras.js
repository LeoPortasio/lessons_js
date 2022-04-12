function* geradora1() {
    // código qualquer...
    yield 'Valor 1';
    // código qualquer...
    yield 'Valor 2';
    // código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1(); // g1 --> objeto que recebe a função geradora
// console.log(g1.next()); // método next() dentro do objeto gerador
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());

// podemos iterar sobre a função geradora

// for (let valor of g1) {
//     console.log(valor);
// }


// function* contador() {
//     let i = 0;
//     while (true) { // infinito - cada vez que chamamos a função geradora a função irá mostrar o próximo valor
//         yield i;
//         i++;
//     }
// }

// const g2 = contador();
// console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
// for (let valor of g4) {
//     console.log(valor);
// }

function* geradora5() {

    yield function () {
        console.log('Vim do yield 1');
    };

    // return function () {
    //     console.log('Vim do return'); se utilizamos return, daqui para baixo é como se não tivesse mais código a função geradora retorna o que está no retun e sai da função
    // }

    yield function () {
        console.log('Vim do yield 2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();

