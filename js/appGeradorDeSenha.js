/// Selecionando elementos HTMl de entrada e saída
const botaoGerar = document.querySelector("#botao-gerar");
const switches = Array.from(document.querySelectorAll('input[type="checkbox"]'));
const inputComprimento = document.querySelector("#comprimento");
const output = document.querySelector('output');

// Adiciona o Listener:
botaoGerar.addEventListener('click', function(){

  //Extarir o `number` atual do comprimento
  const comprimento = +inputComprimento.value;

  //Demonstra o método filter do array
  const switchesSelecionados = switches.filter(
    function(cb){
      return cb.checked
    }
  )

  //Demonstra o método "map" do Array:
  const regrasSelecionadas = switchesSelecionados.map(s =>{
    return s.id;
  })

  // Gera os caracteres necessários
  const caracteres = new Array(comprimento).fill('A').map(
    slot =>{
      const regra = regrasSelecionadas[randInt(regrasSelecionadas.length)]
      return geraCaracter(regra);
    }
  );

  // Demonstra o método "reduce" do array:
  // output.innerHTML = caracteres.reduce((acum, c) =>{
  //   return acum + c;
  // }, '');

  //Atualiza a view
  output.innerHTML = caracteres.join('')

})


function geraCaracter(regra){
  switch(regra){
    case 'numeros':
      return '0123456789'[randInt(10)];
    case 'maisculas':
      return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[randInt(26)]
    case 'minusculas':
      return 'abcdefghijklmnopqrstuvwxyz'[randInt(26)]
    case 'especiais':
      return '!@#$%&*-=/+'[randInt(11)]
  }
}

function randInt(range){
  return Math.min(Math.floor(Math.random()*range), range-1)
}

// Demonstra o método "forEach" do array:
switches.forEach(s =>{
  s.addEventListener('change', validaFormulario)
})

function validaFormulario(){
  // Conta quantos checkboxes estão tickados:
    const tickados = switches.filter(s => s.checked).length;
    if(tickados == 0){ // Form inválido
      botaoGerar.disabled = true; // Botão desabilitado
    }else{
      botaoGerar.disabled = false;
    }
}

validaFormulario();
