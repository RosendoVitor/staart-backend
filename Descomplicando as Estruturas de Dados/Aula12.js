// AULA 12 - Conjuntos
// * Conjuntos NÃO aceitam dados repetidos, aceitando apenas o primeiro e ignorando as repetições daquele mesmo valor;

/* const meuConjunto = new Set();
const times = ['São Paulo', 'Flamengo', 'Fluminense', 'Palmeiras', 'São Paulo'];
const meuCampeonato = new Set(times);
console.table(meuCampeonato); */

// Add, Delete, Clear e forEach
/* const meuConjunto = new Set();
meuConjunto.add('Gabriel');
meuConjunto.add('Gabriel');
meuConjunto.add(2022);
meuConjunto.add(true);
meuConjunto.add(true);
meuConjunto.add(['Gabriel', 'Vanessa']);
meuConjunto.add({ nome: 'Vanessa' });
const cdfs = ['Gabriel', 'Vanessa'];
meuConjunto.add(cdfs);
// console.table(meuConjunto);
meuConjunto.delete(cdfs);
// console.table(meuConjunto);
// meuConjunto.clear();
// console.table(meuConjunto);
meuConjunto.forEach((valor) => {
  console.table(valor);
}); */

// Apresentando os valores e entradas utilizando FOR
/* const meuConjunto = new Set();
meuConjunto.add('Gabriel');
meuConjunto.add('Gabriel');
meuConjunto.add(2022);
meuConjunto.add(true);
meuConjunto.add(true);
meuConjunto.add(['Gabriel', 'Vanessa']);
meuConjunto.add({ nome: 'Vanessa' });
const cdfs = ['Gabriel', 'Vanessa'];
meuConjunto.add(cdfs);
meuConjunto.delete(cdfs);

const valoresConjunto = meuConjunto.values();
// console.table(valoresConjunto.next().value);
// console.table(valoresConjunto.next().value);
for (let valor of valoresConjunto) {
  console.log(valor);
}

const entradas = meuConjunto.entries();
// console.table(valoresConjunto.next().value);
// console.table(valoresConjunto.next().value);
for (let entrada of entradas) {
  console.log(entrada);
} */

// Add condicional e verificando Size
const cdfs = new Set(['Gabriel', 'Vanessa', 'Felipe']);
if (!cdfs.has('Bielzinho')) cdfs.add('Bielzinho'); // '!' antes do nome da variável = NÃO
console.table(cdfs);
console.log(cdfs.size);
