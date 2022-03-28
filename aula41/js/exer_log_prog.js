// função que recebe dois nºs e retorna o maior deles

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(1, 2));

console.log('___________________________');
console.log('');

// refatorando ou melhorando o código
function maior(x, y) {
    if (x > y) return x;
    return y;
}
console.log(maior(1, 2));

console.log('___________________________');
console.log('');

// refatorando com função ternária

function superior(x, y) {
    return x > y ? x : y;
}
console.log(superior(1, 2));

console.log('___________________________');
console.log('');

// refatorando com arrow function

// const max2 = (x, y) => {
//     return x > y ? x : y;
// };

const max2 = (x, y) => x > y ? x : x;
console.log(max2(100, 20));










