// Função Construtora --> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL->' + this.nome + ' ' + this.sobrenome;
    // quando chamamos o método nomeCompleto o JS procura 1º aqui na função construtora
    // se não achar procura no prototype e caso exista em ambos o da função construtora
    // sobrescreve o do prototype
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}
// quando criamos prototype da função construtora os objetos da função
// herdam os métodos do prototype

// Instância
const p1 = new Pessoa('Leo', 'Portasio');
const p2 = new Pessoa('Maria', 'Portasio');
const data = new Date(); // função construtora

console.dir(p1);
console.dir(data);

// toda vez que criamos uma função construtora o JS cria
// um link com a propriedade da função construtora que se
// chama prototype que também é um objeto.



