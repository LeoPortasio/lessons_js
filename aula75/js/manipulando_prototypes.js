// na criação de objeto literal o JS constroi automaticamente
// a função construtora --> new Object
// isso também acontece para array - string - boolean - data etc
// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// };

// const objB = {
//     chaveB: 'B'
// };

// const objC = new Object();
// objC.chaveC = 'C';


// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB); // se apontar para objA não poderíamos acessar objB

// console.log(objB.chaveA);
// console.log(objC.chaveA);

// NÃO É RECOMENDADO UTILIZAR A PROPRIEDADE __proto__

function Produtos(nome, preco) { // função construtora
    this.nome = nome;
    this.preco = preco;
    // não vamos criar métodos aqui, pois temos o prototype
}

// este método desconto é filho da função construtora Produto
Produtos.prototype.desconto = function (percent) {
    this.preco = this.preco - (this.preco * (percent / 100));
};

Produtos.prototype.acrescimo = function (percent) {
    this.preco = this.preco + (this.preco * (percent / 100));
};

const p1 = new Produtos('Camiseta Hering', 50);

// objeto literal
const p2 = {
    nome: 'Polo Hering',
    preco: 55
};

Object.setPrototypeOf(p2, Produtos.prototype);

p2.acrescimo(10);

const p3 = Object.create(Produtos.prototype); // cria objeto para p3 já setando para o prototype da função construtora Produtos
p3.nome = 'camisas Hering';
p3.preco = 100;
p3.desconto(10);
console.log(p3);

const p4 = Object.create(Produtos.prototype, {
    preco: {
        writable: true,
        configurable: true,  // opcional
        enumerable: true,
        value: 120
    },
    nome: {
        writable: true,
        configurable: true,  // opcional
        enumerable: true,
        value: 'jaquetas Hering'
    },
    tamanho: {
        writable: true,
        configurable: true,  // opcional
        enumerable: true,
        value: 'M'
    },

});

p4.acrescimo(10);
console.log(p4);