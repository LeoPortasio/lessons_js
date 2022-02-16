const nome = 'Leo';
const sobrenome = 'portasio';
const idade = 45;
const peso = 60;
const alturaEmMetros = 1.76;
let imc;
let anoNascimento;

imc = peso / (alturaEmMetros * alturaEmMetros);
console.log(imc);

anoNascimento = 2022 - idade;
console.log(anoNascimento);

console.log(nome + ' ' + 'tem' + ' ' + idade + ' ' + 'anos');
console.log(`${nome} pesa ${peso}Kg e tem o imc: ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em Pirassununga em ${anoNascimento}`);
