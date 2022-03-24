const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Portasio',
    idade: 45,
    endereco: {
        rua: 'av. Brasil',
        numero: 560
    }
};

// const nome = pessoa.nome;
// console.log(nome);
// atribuição via desestruturação (objetos)

// const { nome: test = 'Paulo', sobrenome } = pessoa;
// console.log(test, sobrenome);
// supondo que o nome não exista como chave, então podemos setar um valor padrão, senão o resultado será undefined
// ex.: const { nome = 'Paulo', sobrenome } = pessoa;
//  funciona também com arrays
// podemos renomear a variável utilizando ":"(dois pontos) e ainda manter o valor padrão para variável, caso ela não exista!

const { nome, sobrenome, endereco: { rua: r = 'Minas Gerais', numero }, endereco, ...resto } = pessoa;
// console.log(endereco);
console.log(r, numero, endereco, resto); // valores de rua e numero mais o objeto endereco e objeto resto(idade)



