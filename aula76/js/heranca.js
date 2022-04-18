function Produtos(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produtos.prototype.aumento = function (qtd) {
    this.preco += qtd;
};
Produtos.prototype.desconto = function (qtd) {
    this.preco -= qtd;
};

function Camiseta(nome, preco, cor) {
    Produtos.call(this, nome, preco);
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque) {
    Produtos.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Camiseta.prototype = Object.create(Produtos.prototype);
Camiseta.prototype.constructor = Camiseta;

Caneca.prototype = Object.create(Camiseta.prototype); // utilizamos o prototype da função construtora Camiseta para utilizar o método de aumento de percentual
Caneca.prototype.contructor = Caneca;

Camiseta.prototype.aumento = function (percent) { // sobrescrevemos o método aumento para função construtora Camiseta
    this.preco = this.preco + (this.preco * (percent / 100));
}

Caneca.prototype.desconto = function (percent) { // sobrescrevemos o método desconto para a função construtora Caneca
    this.preco = this.preco - (this.preco * (percent / 100));
}

const produto = new Produtos('gen', 10);
const camiseta = new Camiseta('regata', 75, 'preta');
const caneca = new Caneca('caneca bebê', 35, 'porcelana', 100);
camiseta.aumento(10);
caneca.desconto(10);
caneca.estoque = 90 // setter
console.log(camiseta);
console.log(produto);
console.log(caneca);
console.log(caneca.estoque); // getter

