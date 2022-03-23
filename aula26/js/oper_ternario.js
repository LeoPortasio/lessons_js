const pontoUsuario = 1000;

// if (pontoUsuario >= 1000) {
//     console.log('Usuário Vip');
// } else {
//     console.log('Usuário normal');
// }

const nivelUsuario = pontoUsuario >= 1000 ? 'Usuário Vip' : 'Usuáriio Normal';

const corUsuario = null;
const corDefault = corUsuario || 'Preto'; // (fallback --> valor default)
console.log(nivelUsuario, corDefault);
