
// se fizermos no código-->  c1.velocidade = 1000;
// alteraríamos a propriedade velocidade, então devemos protegê-la como privada
const _velocidade = Symbol('velocidade');
// symbol ==> gera um id aleatório, podemos utilizar descritor ou não

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; // utiliza colchetes para propriedade privada
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');


for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}
// estamos fazendo um loop até a condição 200, entretanto o método acelerar,
// permite até 100, então, nosso carro vai acelerar até no máximo 100.


c1.velocidade = 2000;
// propriedade velocidade alterada por erro do programador, 
// entretanto não será alterada porquê está protegida dentro da classe

console.log(c1.velocidade);




