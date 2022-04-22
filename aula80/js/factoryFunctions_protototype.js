// function criaPessoa(nome, sobrenome) {
// const pessoaPrototype = {
//     falar() {
//         console.log(`${this.nome} está falando...`);
//     },
//     comer() {
//         console.log(`${this.nome} está comendo...`);
//     },
//     beber() {
//         console.log(`${this.nome} está bebendo...`);
//     },
// };
//     return Object.create(pessoaPrototype, { // cria objetos vazios apontando para o prototype da função criaPessoa
//         nome: { value: nome }, // as chaves podem ser configuradas --> configurable, enumerable ...
//         sobrenome: { value: sobrenome }
//     });
// }
// criaPessoa agora tem os métodos e as chaves, assim não precisamos criar os métodos e chaves para cada objeto, economizando recursos de memória
// const p1 = criaPessoa('Leo', 'Portasio');
// console.log(p1);

// herança tende a dar complexidade ao código então...
// Podemos fazer uma composição

const falar = { // objeto literal
    falar() {
        console.log(`${this.nome} está falando...`);
    },
};
const comer = { // objeto literal
    comer() {
        console.log(`${this.nome} está comendo...`);
    },
};
const beber = { // objeto literal
    beber() {
        console.log(`${this.nome} está bebendo...`);
    },
};


// const pessoaPrototype = { ...falar, ...comer, ...beber };  // podemos fazer a composição com Spread operator ou Object.assign
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

// quando estamos utilizando composição também é chamado de mixin

// existem vários padrões de objeto que podemos utilizar:

// factory function 
// constructor function
// classes

// devemos trabalhar com uma destas possibilidades e desenvolver nosso projeto
// utilizando o padrão escolhido.