// AULA 05
// reduce: soma todos os valores do array
/* const saldoContas = [100,200,40,1.9,300,1000,9.99]
const total = saldoContas.reduce((acumulador, valor) => acumulador + valor);
console.log(total);*/

// AULA 06 - Op. de Arrays usando CALLBACKS
// map: cria novo array multiplicando matricialmente
/* const aPagarEmReais = [10,20,40,100]
const cotacaoDolar = 5
const aPagarEmDolar = aPagarEmReais.map ( (valor) => valor * cotacaoDolar )
console.table(aPagarEmReais);
console.table(aPagarEmDolar); */

// filter: cria novo array com todos os valores que atendem à condição
/* const aPagarEmReais = [10,20,40,100]
const aPagarVanessa = aPagarEmReais.filter ( (valor) => valor > 30 )
console.table(aPagarEmReais);
console.table(aPagarVanessa); */

// find: encontra o primeiro valor que atende à condição
/* const aPagarEmReais = [10,20,40,100]
const aPagarVanessa = aPagarEmReais.find ( (valor) => valor > 30 )
console.table(aPagarVanessa); */

// findIndex: encontra o índice do primeiro valor que atende à condição
/* const aPagarEmReais = [10,20,40,100]
const aPagarVanessa = aPagarEmReais.findIndex ( (valor) => valor > 30 )
console.table(aPagarVanessa); */

// reduce: soma os valores dentro do array
/* const aPagarEmReais = [10,20,40,100]
const totalAPagar = aPagarEmReais.reduce ( (acumulador, valor) => acumulador + valor, 0 )
console.table(totalAPagar); */

// every: retorna se TODOS atendem à condição
/* const aPagarEmReais = [5,20,40,100]
const contasBaixas = aPagarEmReais.every ( (valor) => valor < 1000 )
console.table(contasBaixas); */

// some: retorna se PELO MENOS UM atende à condição
/* const aPagarEmReais = [5000,20,40,100]
const temContaAlta = aPagarEmReais.some ( (valor) => valor > 1000 )
console.table(temContaAlta); */

// concat: une arrays em um só
/* const contasDaVanessa = [10,20,30,40]
const contasDoGabriel = [5,6,7,8]
const contasDosCDFs = contasDaVanessa.concat(contasDoGabriel);
console.table(contasDosCDFs); */

// fill: zera todos os INDEX do array
/* const contasDaVanessa = [10,20,30,40]
const contasDoGabriel = [5,6,7,8]
const contasDosCDFs = contasDaVanessa.concat(contasDoGabriel);
contasDosCDFs.fill(0);
console.table(contasDosCDFs); */

// flat: une arrays dentro de arrays no array principal
/* const contasDaVanessa = [10,20,30,40, [1,2,3,4]]
const novasContasDaVanessa = contasDaVanessa.flat();
console.table(novasContasDaVanessa); */

// ORDENAÇÃO DE ARRAYS
// sort: ordenação aleatória
/* const clientes = ['Vanessa', 'Gabriel', 'Andreia', 'Juliana', 'Gilberto']
console.table(clientes);
clientes.sort();
console.table(clientes); */

/* const numeros = [10,5,1000,500000,1.99]
console.table(numeros);
numeros.sort();
console.table(numeros); */

// sort: ordenando de forma crescente
/* const numeros = [10,5,1000,500000,1.99]
console.table(numeros);
numeros.sort((a,b) => a - b);
console.table(numeros); */

// sort: ordenando de forma decrescente
/* const numeros = [10,5,1000,500000,1.99]
console.table(numeros);
numeros.sort((a,b) => b - a);
console.table(numeros); */

// sort: ordenando arrays compostos
/* const clientes = [
  ['Vanessa', 4],
  ['Gabriel', 1], 
  ['Andreia', 3], 
  ['Juliana', 5], 
  ['Gilberto', 2]
];
console.table(clientes);
clientes.sort((a,b) => b[1] - a[1]);
console.table(clientes); */