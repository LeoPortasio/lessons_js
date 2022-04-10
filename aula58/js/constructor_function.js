// função fábrica --> retorna um objeto voluntáriamente

// função construtora --> cria e retorna o objeto automaticamente
// --> mudamos a convenção iniciamos sempre com letra maíuscula 
// chamamos assim: const p1 = new Pessoa('Ciclano'); sempre utilizamos new
// ou seja é como se fosse um molde para gerar novos objetos

function Pessoa(nome, sobrenome) {
    // atributos ou métodos privados
    const ID = 1234;

    const metodoInterno = function () {

    };
    // atributos ou métodos públicos --> quando utilizamos o this
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () { // function dentro do objeto é um método
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Leo', 'Portasio'); // sempre que "chamamos" a função construtora utilizamos o new 
const p2 = new Pessoa('Maria', 'Landgraff');

console.log(p1.nome);
console.log(typeof (p1));
p1.metodo();

// new --> cria o objeto vazio, faz o this apontar para os atributos desse 
// objeto(função construtora Pessoa) e retorna implicitamente para a variável 
// (no caso p1) e assim com outros objetos que formos criando p2, p3...
// então não precisamos escrever return na função construtora, ela faz automático

// na função construtora não utilizamos vírgula(",") e sim ponto e vírgula(";")




