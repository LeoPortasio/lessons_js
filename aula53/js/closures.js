function retornaFuncao(nome) {
    // const nome = 'Leo';
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Leo');
const funcao2 = retornaFuncao('João');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());

// closures --> habilidade de acessar seu escopo léxico



