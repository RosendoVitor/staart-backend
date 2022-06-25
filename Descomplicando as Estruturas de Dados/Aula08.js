// AULA 08 - Conceito de PILHAS: similares aos arrays, mas com regras específicas para inclusão e exclusão de itens.
// ** Último item a entrar, será o primeiro a sair.


/*
Principais operações em pilhas:
* PUSH: inserir novos elementos
* POP: remover elementos
* TOP/PEEK: retorna elementos
* isEmpty: retorna um valor do tipo BOOLEAN indicando se a pilha está vazia
* isFull: retorna um valor do tipo BOOLEAN indicando se a pilha está cheia

** Linguagem de baixo nível = São linguagens de programação em que, para utilizá-las, o modo como devemos
escrever um código não é muito intuitivo, do contrário como é com a linguagem JavaScript que já possui
funções prontas para, por exemplo, ordenar um Array.

** StackOverFlow = Estouro de pilha = Esse é um tipo de erro que ocorre quando um programa tenta adicionar
uma quantidade de elementos superior ao limite suportado por uma pilha.
*/


// PUSH: adiciona itens na lista ("Pilha")
/* class Pilha {
    constructor(){
      this.itens = []
    }
    push(item) {
      this.itens.push(item);
    }
}
const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);
console.table(pilha.itens); */


// POP: remove o último item da lista
/* class Pilha {
  constructor(){
    this.itens = []
  }
  push(item) {
    this.itens.push(item);
  }
  pop() {
    this.itens.pop();
  }
}
const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);
pilha.pop(); // remove o último item da lista
console.table(pilha.itens); */


// TOP: retorna quem é o primeiro na lista ("pilha")
/* class Pilha {
  constructor(){
    this.itens = []
  }
  push(item) {
    this.itens.push(item);
  }
  pop() {
    this.itens.pop();
  }
  top(){
    return this.itens[this.itens.length - 1]
  }
}
const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);
pilha.pop(); // remove o últimmo item da lista
console.table(pilha.top()); // retorna quem é o primeiro na lista ("pilha") */


// isEmpty: retorna BOOLEAN se a lista está vazia
/* class Pilha {
  constructor(){
    this.itens = []
  }
  push(item) {
    this.itens.push(item);
  }
  pop() {
    this.itens.pop();
  }
  top(){
    return this.itens[this.itens.length - 1]
  }
  isEmpty(){
    return this.itens.length == 0
  }
}
const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);
pilha.pop(); // remove o últimmo item da lista
pilha.pop(); // remove o últimmo item da lista
pilha.pop(); // remove o últimmo item da lista
pilha.pop(); // remove o últimmo item da lista
console.table(pilha.isEmpty()); // retorna BOOLEAN se a lista está vazia */