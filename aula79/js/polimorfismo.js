// quando um mesmo método se comporta de maneira diferente em classes filhas de
// um mesmo pai caracteriza o polimorfismo de sobrescrita

// não conseguimos fazer o polimorfismo de sobrecarga em JS



// superclass ou classe mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`** Saldo insuficiente! ** | Saldo atual --> R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Agência: ${this.agencia} - Conta: ${this.conta} - Saldo atual: R$${this.saldo.toFixed(2)}`);
};

// const conta1 = new Conta(11, 22, 10);
// console.log(conta1);
// conta1.depositar(90);
// conta1.sacar(30);
// conta1.sacar(70);
// conta1.sacar(0.01);

//  especializar a conta --> corrente e poupança

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) { // sobrescrevemos o método pai
    if (valor > (this.saldo + this.limite)) {
        console.log(`** Saldo insuficiente! ** | Saldo atual --> R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) { // utiliza método sacar da superclass
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(20);

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(20);
