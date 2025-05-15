const botaoMais = document.querySelector("#botao-mais");
const botaoMenos = document.querySelector("#botao-menos");

let contador = document.getElementById("contador");

botaoMais.addEventListener("click", function(event) {
  event.preventDefault();

  contador.textContent = parseInt(contador.textContent) + 1
});

botaoMenos.addEventListener("click", function(event) {
  event.preventDefault();

  contador.textContent = parseInt(contador.textContent) - 1
});
