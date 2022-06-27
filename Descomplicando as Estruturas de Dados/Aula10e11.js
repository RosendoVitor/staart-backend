// AULA 10 - Inserindo no início e final de listas {26/06/2022}

// Listas encadeadas ( linked lists )
/*
Cada elemento da lista é formado por um NÓ, que contém um elemento em si e um ponteiro para um próximo elemento;
Exemplo: Um trem.

>> Principais operações em LISTAS:
* InsertFirst
* InsertLast
* InsertAt
* DeleteAt
* SearchAt
* IndexOf

# Lista encadeada simples
# Lista Duplamente encadeada
# Lista Circular [Simples ou Duplamente encadeada]
# Lista Ordenada

*** JavaScript não trabalha com PONTEIROS, portanto iremos utilizar um Array
*/

// Lista encadeada simples: InsertFirst + InsertLast
/* class No {
  constructor(elemento) {
    this.elemento = elemento; // atributo
    this.proximo = undefined;
  }
}
class ListaEncadeada {
  constructor() {
    this.head = undefined;
  }
  insertFirst(elemento) {
    const novo = new No(elemento);
    let atual;
    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      novo.proximo = atual;
      this.head = novo;
    }
    return elemento;
  }

  insertLast(elemento) {
    const novo = new No(elemento);
    let atual;
    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }
    return elemento;
  }
}
const trem = new ListaEncadeada();
console.log(trem.insertFirst('Locomotiva'));
console.log(trem.insertLast('Vagão 1'));
console.log(trem.insertLast('Vagão 2')); */

// AULA 11 - Continuação com as Listas Encadeadas {27/06/2022}

class No {
  constructor(elemento) {
    this.elemento = elemento; // atributo
    this.proximo = undefined;
  }
}
class ListaEncadeada {
  constructor() {
    this.head = undefined;
  }
  insertFirst(elemento) {
    const novo = new No(elemento);
    let atual;
    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      novo.proximo = atual;
      this.head = novo;
    }
    return elemento;
  }

  insertLast(elemento) {
    const novo = new No(elemento);
    let atual;
    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }
    return elemento;
  }

  searchAt(posicao) {
    let atual = this.head;
    for (let i = 0; i < posicao && atual; i++) {
      atual = atual.proximo;
    }
    return atual;
  }

  insertAt(elemento, posicao) {
    const novo = new No(elemento);
    if (posicao == 0) {
      this.insertFirst(elemento);
    } else {
      const anterior = this.searchAt(posicao - 1);
      const atual = anterior.proximo;
      novo.proximo = atual;
      anterior.proximo = novo;
    }
    return elemento;
  }

  traversal() {
    if (!this.head) {
      return undefined;
    } else {
      let atual = this.head;
      let elementosLista = [];
      while (atual) {
        elementosLista.push(atual.elemento);
        atual = atual.proximo;
      }
      return elementosLista;
    }
  }

  deleteAt(posicao) {
    let atual = this.head;
    if (posicao == 0) {
      this.head = atual.proximo;
    } else {
      let anterior = atual;
      for (let i = 0; i < posicao; i++) {
        anterior = atual;
        atual = atual.proximo;
      }
      anterior.proximo = atual.proximo;
    }
    return posicao;
  }

  indexOf(elemento) {
    let atual = this.head;
    let contador = 0;
    while (atual) {
      if (atual.elemento == elemento) {
        return contador;
        break;
      } else {
        atual = atual.proximo;
        contador++;
      }
    }
  }
}
const trem = new ListaEncadeada();
trem.insertFirst('Locomotiva');
trem.insertLast('Vagão 1');
trem.insertLast('Vagão 2');
console.log(trem.searchAt(2));
trem.insertFirst('Vagão de Manobra');
trem.insertAt('Novo Vagão', 2);
console.log(`Posição Excluída do trem: ${trem.deleteAt(2)}`);
console.log(`Posição Excluída do trem: ${trem.deleteAt(0)}`);
console.log(`Posição da Locomotiva: ${trem.indexOf('Locomotiva')}`);
console.log(`Posição do Vagão 2: ${trem.indexOf('Vagão 2')}`);
console.log(`Cadê o Thomas? ${trem.indexOf('Thomas')}`);
console.table(trem.traversal());
