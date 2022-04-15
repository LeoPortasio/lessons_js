// defineProperty - defineProperties
// function Produto(nome, preco, estoque) {
//     this.nome = nome; // com o this é uma propriedade pública
//     this.preco = preco;
// this.estoque = estoque;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // mostra a chave
//         value: estoque,  // valor da chave recebida do parâmetro
//         writable: true, // controla se o valor pode ou não ser alterado
//         configurable: false // configurável --> se criarmos outro bloco de código
//         //  igual logo abaixo e aqui fosse false, não seria premitido alterar essa 
//         //  propriedade do objeto, por exemplo deletar.
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 50000; // a propriedade value como true podemos alterar o valor da chave estoque aqui
// delete p1.estoque; // a propriedade writable como false não podemos apagar a propriedade estoque aqui
// console.log(p1);
// console.log(Object.keys(p1)); // mostra um array com as chaves, se enumerable
//  estivesse false, não poderíamos ver a chave

// for (let chave in p1) {
//     console.log(chave); // aqui mostra as chaves de iteração com o objeto se o 
//     // enumerable estiver como true
// }

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        confirurable: true
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            confirurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            confirurable: true
        }

    });
}

const p1 = new Produto('Camiseta', 30, 3);
console.log(Object.keys(p1));
console.log(p1);
for (let chave in p1) {
    console.log(chave);
}



