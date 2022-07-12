// AULA 14 - Tabelas HASH [ HASH TABLES ]
/*
>> Métodos da classe HashTable
* Hash = conversão da chave em um hash
* Put = adicionar um novo elemento
* Get = retornar um elemento
* Delete = remover um elemento
* clear = remover todos os elementos
*/

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.lenght; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  put(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }
  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }
  delete(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else return false;
  }
  clear() {
    this.table = [];
    this.size = 0;
  }
}

const meusContatos = new HashTable();
meusContatos.put('Gabriel', '99883344');
meusContatos.put('Vanessa', '44553322');
meusContatos.put('Felipe', '11223344');

console.table(meusContatos.table);
