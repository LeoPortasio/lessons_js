// Factory Function


// function criaPessoa(nome, sobrenome) {
//     return {
//         nome, sobrenome
//     };
// }

// const p1 = criaPessoa('Leonardo', 'Portasio');
// console.log(p1);

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() { // getter --> get faz do método um atributo do abjeto
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' '); // array de cada palavra do nome completo
            this.nome = valor.shift(); // remove e retorna o 1º valor do array
            this.sobrenome = valor.join(' '); // unifica os valores restantes no array separados por espaço
        },

        fala: function (assunto = 'falando sobre...') { // quando uma função está dentro de um objeto, chamamos de método
            return `${this.nome} está ${assunto}.`; // this refere-se ao objeto que está acessando a chave
        }, // aqui o método sem o this, está utilizando o parâmetro nome da função criaPessoa

        altura: altura,
        peso: peso,

        // imc() { // aqui criamos o método sem os ":" e sem a palavra function, poderíamos ter feito isso no método fala
        //     const i = this.peso / (this.altura ** 2);
        //     return i.toFixed(2);

        get imc() { // getter --> get faz do método um atributo do abjeto
            const i = this.peso / (this.altura ** 2);
            return i.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Leonardo', 'Portasio', 1.77, 60);
console.log(p1.fala('falando sobre abnominais'));
// console.log(`IMC: ${p1.imc()}`);
console.log(`IMC: ${p1.imc}`);

console.log('');
console.log('_____________________________________________');
console.log('');

const p2 = criaPessoa('Rogério', 'Ceni', 1.89, 100);
console.log(p2.fala('falando sobre condicionamento físico'));
// console.log(`IMC: ${p2.imc()}`);
console.log(`IMC: ${p2.imc}`);

console.log('');
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());


