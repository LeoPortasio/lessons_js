let nome = 'Leo'; // variável global
var nome2 = 'Leo';
var nome2 = 'Leonardo'; // variável redeclarada, com var é possível
console.log(nome2);
//com let não podemos redeclarar, entretanto com var é possível

const verdadeira = true;
if (verdadeira) {
    let nome = 'Leonardo'; // let criada dentro deste escopo, não é a mesma variável com valor 'Leo'
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Portasio'; // let criada dentro deste escopo, não é a mesma variável com valor 'Leo' e nem com valor 'Portasio'
        console.log(nome, nome2);
    }
}
// let tem escopo de bloco {...bloco}
// var so tem escopo de função
// se dentro de um bloco o js não achar a variável let ele irá procurar
// em um bloco superior, se não encontrar e acabar os blocos o js irá procurar
// nas variáveis globais

// Atenção! var redeclara a variável mesmo estando dentro de um bloco

function falaOi() {
    var nome = 'Leolele'
    console.log(nome);
}
falaOi();
// a variável nome dentro da função falaOi
// somente é utilizada pelo js dentro da função
// e em nenhum outro escopo
// entretanto podemos acessar variáveis dentro da função
// que estejam no seu entorno em outro escopo




