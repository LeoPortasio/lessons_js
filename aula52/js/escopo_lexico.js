const nome = 'Leo';

function falaNome() {
    console.log(nome)
}
falaNome();

// quando uma função não acha a variável dentro do seu escopo ela procura
//  na "bolha" do pai, no pai do pai e assim por diante...até chegar no escopo 
// global.

