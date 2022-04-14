// ''  ""  ``              --> string literal
// []                      --> array literal
// 1234                    --> número literal       todos tem construtores
// function                --> função literal

// // const pessoas = {
//      nome: 'Leo',       --> objeto literal - corpo do objeto tem chave e valor
//      sobrenome: 'Portasio';
// }

// console.log(pessoas.['nome']);    --> notação de colchetes
// console.log(pessoas.sobrenome);   --> notação de ponto         - ambas acessam o valor da chave do objeto


// const chave: 'nome';         --> se não soubermos qual a chave necessária para utilizar, 
// console.log(chave);           // ex: uma base de dados, ou algo que o usuário precise utilizar 
// que o programa receba dinâmicamente. Conseguimos fazê-lo somente com 
// notação de colchetes.      


// *************** CONSTRUTOR DO OBJETO ********************

// const pessoa1 = new Object();
// pessoa1.nome = 'Leo';
// pessoa1.sobrenome = 'Portasio';  // CONSTRUTOR DO OBJETO

// console.log(pessoa1.nome);


// const pessoas = {
//     nome: 'Leo',
//     sobrenome: 'Portasio'       // OBJETO LITERAL
// }

// console.log(pessoas.sobrenome);



// delete pessoa1.nome; --> apagamos a chave nome do objeto


// ********************* MÉTODOS DO OBJETO **********************

// métodos são funções que estão dentro do objeto que execultam ações
// Podemos ter acesso de dentro dos métodos aos atributos/chaves do objeto, isso é uma vantagem
// ex: 

// const pessoa1 = new Object();
// pessoa1.nome = 'Leo';
// pessoa1.sobrenome = 'Portasio';
// pessoa1.idade = 45;
// pessoa1.falaNome = function () {
//     return (`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1) {
//     console.log(chave);            // chave
//     console.log(pessoa1[chave]);   // valor
// }

// MOLDES - FACTORY FUNCTION - CONSTRUCTOR FUNCTIONS
// PADRONIZAR O PROGRAMA COM UMA OU OUTRA - PREFERÊNCIA É DO DESENVOLVEDOR

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${nome} ${sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Leo', 'Portasio');
// console.log(p1.nomeCompleto); // se não utilizamos o get antes do método, precisamos colocar o parênteses depois do nome do método aqui


function Pessoa(nome, sobrenome) { // construtor
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); este comando trava o objeto e não deixa mais criar ou alterar os atributos/chaves
    // funciona para arrays
}
// new cria um novo objeto vazio {} e atrela this aos atributos do objeto para cada novo objeto criado

const p1 = new Pessoa('Leo', 'Portasio');
Object.freeze(p1); //congelamos o objeto, não poderá ser alterado daqui para baixo no código
p1.nome = 'outro nome'; //altera o valor do atributo/chave nome, não dará erro, entretanto não muda o valor, pois travamos no comando acima
console.log(p1);