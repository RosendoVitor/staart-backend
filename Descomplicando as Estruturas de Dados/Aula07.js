// AULA 07 - Objetos e JSON

/* const programador = {
  nome: 'Gabriel',
  nascimento: '04/07/1980',
  casado: true,
  linguagensFavorita: ['JavaScript', 'PHP', 'Python'],
  trabalhoDesde: 1996,
};

console.table(programador); // tabela com os valores respectivos
console.log(programador.nome); // forma 01 de exibir apenas um item do array
console.log(programador['nome']); // forma 02 de exibir apenas um item do array */

// Classes: cria uma estrutura padronizada de como deve ser um objeto, tanto nos estados [propriedades], quanto no comportamento [métodos].
/* class Programador {
  constructor(nome, nascimento, casado, linguagensFavoritas = [], trabalhaDesde = null){
    this.nome = nome
    this.nascimento = nascimento
    this.casado = casado
    this.linguagensFavoritas = linguagensFavoritas
    this.trabalhaDesde = trabalhaDesde
  }
}
  const gabriel = new Programador('Gabriel Froes', '04/07/1980', true, ['JavaScript', 'PHP', 'Python'], 1996);
  const vanessa = new Programador(
    'Vanessa Weber', 
    '27/03/1981', 
    true, 
    ['Ruby', 'Dart', 'Python'], 
    1996
    );

  //console.table(gabriel);
  //console.table(vanessa);
  //console.table(gabriel.nome);
  //console.table(vanessa.linguagensFavoritas);

  for (const propriedade in vanessa) {
    console.log (`${propriedade}: ${vanessa[propriedade]}`);
  }; */