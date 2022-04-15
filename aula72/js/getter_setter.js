// Getters e Setters
// getter --> recebe valor
// setter --> configura valor
// simula que o método dentro da função seja uma propriedade da função
// protege a propriedade - ex: a propriedade estoque deve receber somente nºs

function Produto(nome, preco, estoque) {  // função construtora
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque,   aqui não precisamos de value, utilizamos getter e setter
        // writable: true,   se utilizarmos getter e setter não faz sentido ter o writable
        configurable: true,
        get: function () {
            return estoquePrivado; // pega o valor que está definido para estoque
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem de erro');
            }

            estoquePrivado = valor; // variável protegida, se não for um nº, não será alterada
        }
    });
}

function criaProduto(nome) { // função fábrica
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('trololó.', ''); // interceptamos o valor e substituímos trololó por nada
            nome = valor;
        }
    };
}
// const p1 = new Produto('camiseta', 30, 3);
// console.log(p1);
// p1.estoque = 500; // 'o valor que eu quero';
// console.log(p1.estoque);

const p2 = criaProduto('Camisas');
console.log(p2);
p2.nome = 'tralalá trololó.';
console.log(p2.nome);


