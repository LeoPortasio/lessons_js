// nodeList --> se comporta de maneira similar ao array
// mas não é um array, faz parte do DOM - uma API do Browser
// podemos iterar sobre o nodeList como se fosse um array
const paragrafos = document.querySelector('.paragrafos');
const tagsP = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of tagsP) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
}
