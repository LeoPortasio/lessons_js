class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado!`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado!`);
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // herda de DispositivosEle...
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico { // herda de DispositivosEle...
    constructor(nome, cor, modelo, wifi) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
        this.wifi = wifi;
    }
    ligar() {
        console.log('você alterou o método ligar'); // método sobrescrito
    }
    telaBoasVindas() {
        console.log(`Olá ${this.nome}`); // método que só tem nesta classe
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'Ios13');
console.log(s1);

const t1 = new Tablet('Ipad', 'Prata', '12"', true);
console.log(t1);
t1.ligar();
t1.telaBoasVindas();

// herança vem de cima para baixo, classe filha herda da super classe
// mas pode ter seus seus atributos e métodos alterados ou até mesmo
// seus próprios métodos
