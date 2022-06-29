// AULA 13 - Dicionários e Maps

// Maps - Set e Get
/* const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'Você');
console.table(meuDicionario);

const palavra = meuDicionario.get('blz');
console.log(palavra); */

// adicionando valores posteriormente às keys
/* const meuDicionario = new Map();
const indiceContatos = [
  ['Gabriel', '99887766'],
  ['Vanessa', '99882233'],
  ['Felipe', '77665544'],
];

// meuDicionario.set(['Gabriel', '99887766']);  // Gera duplicidade
meuDicionario.set(indiceContatos[0], { nascimento: '04/07/1980' });
meuDicionario.set(indiceContatos[1], { nascimento: '27/03/1981' });
meuDicionario.set(indiceContatos[2], { nascimento: '06/08/2016' });
console.table(meuDicionario);

const vanessa = meuDicionario.get(indiceContatos[1]);
console.table(vanessa); */

// delete e clear
const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'Você');

if (meuDicionario.has('vc')) console.log('VC existe');
meuDicionario.delete('vc');
console.log(meuDicionario.delete('qwert')); // deletando key inexistente, retorna FALSE
meuDicionario.clear();
console.table(meuDicionario);

// forEach