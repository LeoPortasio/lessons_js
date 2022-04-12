// .concat()

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'Leo');
// console.log(a3);

//Outra maneira de concatenar

//  ... rest --> ... spread

const a3 = [...a1, ...a2, 'Leo', ...[7, 8, 9]];
console.log(a3);

