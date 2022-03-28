// função que recebe um nº e retorna:
// nº é divisível por 3 = Fizz
// nº é divisível por 5 = Buzz
// nº é divisível por 3 e 5 = FizzBuzz
// nº Não é divisível por 3 e 5 = o próprio nº
// checar se um nº é realmente um nº = o próprio nº
// Use a função com nºs de 0 a 100

function fizzBuzz(num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';;
    return num;
}
console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
