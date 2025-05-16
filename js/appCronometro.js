/// Selecionando elementos de entrada e saída
const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoPausar = document.querySelector("#botao-pausar");
const botaoReiniciar = document.querySelector("#botao-reiniciar");
const output = document.querySelector("#output");

//// Iniciar os modelos de aplicação com os mesmos valores iniciais da view.
let cont = 0;

/**
 * @type {'parado' | 'rodando'}
 */
let estado = 'parado';

/// adiciona os event handlers
botaoIniciar.addEventListener("click", () => executa('iniciar'));
botaoPausar.addEventListener("click", () => executa('pausar'));
botaoReiniciar.addEventListener("click", () => executa('reiniciar'));

/**
 *
 * @param {'iniciar' | 'pausar' | 'reiniciar' | 'tick'} acao
 */
function executa(acao){
  switch(estado){
    case 'parado':
      // código que deve ser executado quando estado=="parado"
      switch(acao){
        case "iniciar":
          estado = 'rodando';
          criarTimer();
          break;
        case "reiniciar":
          cont = 0;
          //atualizarView();
          break;
      }

      break;
    case "rodando":
      // código que deve ser executado quando estado=="parado"
      switch(acao){
        case "pausar":
          estado = 'parado';
          destruirTimer();
          break;
        case "reiniciar":
          estado = 'parado';
          destruirTimer();
          cont = 0;
          atualizarView();
          break;
        case "tick":
          cont += 100;
          atualizarView();
          break;
      }
      break;
  }

  //console.log('Estou no estado', estado,' contagem ', cont,'e executei a ação', acao)
}

let timer;
function criarTimer(){
  timer = setInterval(() => {
    executa('tick')
  }, 100)
}

function destruirTimer(){
  clearInterval(timer)
}

function atualizarView(){
  output.innerHTML = `${(cont / 1000).toFixed(1)}s`.replace('.', ',');
}
