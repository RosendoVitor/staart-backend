// Aula 11: FUNÇÕES

/*function somar(x, y) {
  
  const resultado = x + y;
  return resultado;
}

console.log(somar(3, 5));

OU

const resultado_somar = somar(3, 5);
console.log(resultado_somar); */



// DESAFIO
/*function Desafio(nome_cart, num_cart, cod_cart) {
  // retorno tem que ser true/false; cartão é válido ou inválido
  // se está correto, imprime esse valor, se não, indicar onde o erro está
  // DICA: use o IF-ELSE e os OPERADORES LÓGICOS
  
  if(nome_cart === 'Vítor') {
    console.log('Nome do cartão está OK');
    verif_nome_cart = 1;
    console.log(verif_nome_cart);
  } else {
    console.log('Nome do cartão está incorreto');
    verif_nome_cart = 0;
    console.log(verif_nome_cart);
  }
  
  if(num_cart === 12345) {
    console.log('Número do cartão está OK');
    verif_num_cart = 1;
    console.log(verif_num_cart);
  } else {
    console.log('Número do cartão está incorreto');
    verif_num_cart = 0;
    console.log(verif_num_cart);
  }
  
  if(nome_cart === 678) {
    console.log('Código do cartão está OK');
    verif_cod_cart = 1;
    console.log(verif_cod_cart);
  } else {
    console.log('Código do cartão está incorreto');
    verif_cod_cart = 0;
    console.log(verif_cod_cart);
  }
  
  let verif = verif_nome_cart + verif_num_cart + verif_cod_cart
  if(verif = 3){
    console.log('True')
  } else{
    console.log('False')
  }
  return verif
  
}

console.log(Desafio('Pedro', 12345, 667)); */



// DESAFIO: RESOLVIDO

/* const nome_cartao = 'Leticia B.';
const numero_cartao = 12345678;
const codigo_verificador = 123;

function verificador_dados_cartao (nome, numero, codigo){
  const nome_correto = nome === nome_cartao;
  if(nome_correto){
    console.log("nome está correto");
  } else{
    console.log("nome está errado");
  }
  
  const numero_correto = numero === numero_cartao;
  if(numero_correto){
    console.log("numero está correto");
  } else{
    console.log("numero está errado");
  }
  
  const codigo_correto = codigo === codigo_verificador;
  if(codigo_correto){
    console.log("codigo está correto");
  } else{
    console.log("codigo está errado");
  }
  
  
  const todos_dados_corretos = nome_correto && numero_correto && codigo_correto;
  
  return todos_dados_corretos;
}

const cartao_valido = verificador_dados_cartao('Leticia B.', 12345678, 123);
console.log(cartao_valido); */




// Determinando valores DEFAULT para parâmetros
/* function somar(x=0, y=0) {
  
  const resultado = x + y;
  return resultado;
}

//console.log(somar(3, 5));

//OU

const resultado_somar = somar(3); // 3+0
console.log(resultado_somar); */



// ESCOPO DE FUNÇÕES
/*const antes = 'antes da função(fora)';

function testando_escopo(){
  const dentro = 'dentro da função';
  // console.log(dentro;
  console.log(antes);
  console.log(depois);
}

const depois = 'depois da função (fora)';

testando_escopo();

console.log(dentro); // DÁ ERRO ! Não é possível acessar nada de dentro da função pelo lado de fora
*/