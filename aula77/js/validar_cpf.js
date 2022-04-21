// algorítmo para validar um CPF

// 705.484.450-52 CPF para validar

// 7x 0x 5x 4x 8x 4x 4x 5x 0x nºs do cpf sem os dois últimos dígitos
// 10 9  8  7  6  5  4  3  2 // sequencia para multiplicar os nºs do cpf começa em 10
// 70 0  40 28 48 20 16 15 0 = 237 resultado da soma dos valores multiplicados

// 11 - (237 % 11) = 5 (primeiro dígito) 
//o resultado deste calculo não pode ser maior que 9, se for será considerado 0

// 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x(inclusão do 1º dígito na sequencia de nºs do cpf)
// 11 10 9  8  7  6  5  4  3  2  sequencia para multiplicar os nºs do cpf começa em 11
// 77 0  45 32 56 24 20 20 0  10 = 284 resultado da soma dos valores multiplicados

// 11 - (284 % 11) = 2 (primeiro dígito)
//o resultado deste calculo não pode ser maior que 9, se for será considerado 0

// para validar o cpf utilizamos esta conta acima criada pelo governo federal
// com o resultado da conta o cpf gerado tem que ser igual ao cpf que entrou 

// *** teremos que receber o cpf como string









