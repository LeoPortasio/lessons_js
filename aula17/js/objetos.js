const pessoa1 = {
    nome: 'Leo',
    sobrenome: 'Tricolor',
    idade: 45
}
console.log(pessoa1.nome);

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// } 

// ou podemos declarar como abaixo reduzindo código

function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa2 = criaPessoa('Leonardo', 'Da Vinci', 45);
console.log(pessoa2.nome);


const pessoa3 = {
    nome: 'leoJulius',
    sobrenome: 'tricolorPaulista',
    idade: 45,

    fala() { // criação de metódo em js
        console.log(`${this.nome} está falando oi...`), // this representa o objeto pessoa3
            console.log(`minha idade atual é: ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();

