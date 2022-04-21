function Validacpf(cpfRecebido) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfRecebido.replace(/\D+/g, ''); // expressão regular *** ESTUDAR ISSO ***
        },
    });
}

Validacpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false; // 1ª verificação --> se cpf foi enviado com nºs
    if (this.cpfLimpo.length !== 11) return false; // 2ª verificação --> se a qtd de nºs é 11
    if (this.isSequencia()) return false; // 3ª verificação --> se o cpf é uma sequência

    const cpfParcial = this.cpfLimpo.slice(0, -2); // pega os primeiros 9 dígitos
    const digito1 = this.criaDigito(cpfParcial); //  1º dígito
    const digito2 = this.criaDigito(cpfParcial + digito1); // 2º dígito

    const novoCpf = cpfParcial + digito1 + digito2; // concatena
    return novoCpf === this.cpfLimpo; // retorna true se ambos forem iguais
};

// obtem o os dois últimos dígitos 
Validacpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1; // inicia o array do índice 10
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val)); // acumulador recebe a soma de tamanho do array + 1, multiplicado pelo valor sucessivamente e garantimos que o valor recebido de val seja do tipo number
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11); // conta do governo federal
    return digito > 9 ? '0' : String(digito); // retorno expressão ternária
};

Validacpf.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo; // retorna true se for verdade que uma sequencia é igual ao cpf recebido(digitado pelo usuário)
};

const cpf = new Validacpf('705.484.450-52');
// console.log(cpf.valida()); // mostra o resultado da validação se true ou false

if (cpf.valida()) {
    console.log('CPF Válido');
} else {
    console.log('CPF Inválido');
}

// 111.111.111-11
// 705.484.450-52
