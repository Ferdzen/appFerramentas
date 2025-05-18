/// obter uma referência para o elemento onde o evento de interesse corre
const form = document.querySelector("form");

// detectar envio do formulário
form.addEventListener("submit", function(event) {
  /// função handler

  // Impedir a ação padrão deste evento neste elemento html
  event.stopPropagation();
  event.preventDefault();


  // ler a cor que foi selecionada pelo usuário
  const cor = form['input-color'].value

  // Obter uma referencia para o elemento "output"
  const body = document.querySelector("body");

  // capturar cor anterior para fins de comparação
  const corAnterior = body.style.backgroundColor

  // aplicar esta cor selecionada no elemento output
  body.style.backgroundColor = cor;

  if(corAnterior == body.style.backgroundColor){
    alert("Cor não pôde ser trocada")
  }

  return false
});


/// codigo demonstração para tarefa 03
// const promiseRes = fetch('http://localhost:3000/evento', {method: 'GET'},);
// promiseRes.then(res =>{
//   const promiseBody = res.json();

//   promiseBody.then( obj =>{
//     console.log(obj.nomeEvento);
//     console.log(obj.data);
//   })
// });
