class Pessoa {
    constructor(nome, sobrenome) { // método/função construtora
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    // não há a necessidade de utilizar o constructor, mas se quizermos passar 
    // pârametros para a função, o constructor tem que ser declarado na classe

    falar() {
        console.log(`${this.nome} está falando...`);
    }
    // não há a necessidade de atrelar o método ao prototype como nas funções
    // construtora, em classes o js faz isso automaticamente

    comer() {
        console.log(`${this.nome} está comendo...`);
    }

    beber() {
        console.log(`${this.nome} está bebendo...`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando...`);
}

const p1 = new Pessoa('Leo', 'Portasio');
const p5 = new Pessoa2('Leo', 'Portasio');
const p2 = new Pessoa('Ana', 'Portasio');
const p3 = new Pessoa('Josielma', 'Portasio');
const p4 = new Pessoa('Leony', 'Portasio');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);



