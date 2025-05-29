const dia = document.querySelector("#data-dia");
const hora = document.querySelector("#data-hora");
const minutos = document.querySelector("#data-minuto");
const segundos = document.querySelector("#data-segundo");

const corDia = document.querySelector("#cor-dia");
const corHora = document.querySelector("#cor-hora");
const corMinuto = document.querySelector("#cor-minuto");
const corSegundo = document.querySelector("#cor-segundo");

const card1 = corDia.closest(".card-title");
const card2 = corHora.closest(".card-title");
const card3 = corMinuto.closest(".card-title");
const card4 = corSegundo.closest(".card-title");

/// codigo demonstração para tarefa 03
const promiseRes = fetch('http://localhost:3000/evento', {method: 'GET'},);
promiseRes.then(res =>{
  const promiseBody = res.json();

  promiseBody.then( obj =>{
    dia.innerText = obj.dia;
    hora.innerText = obj.hora;
    minutos.innerText = obj.minuto;
    segundos.innerText = obj.segundo;
    var check = obj.passou;
    console.log(obj);

    if (check) {
      card1.style.backgroundColor = "green"; // Evento já passou
      card2.style.backgroundColor = "green"; // Evento já passou
      card3.style.backgroundColor = "green"; // Evento já passou
      card4.style.backgroundColor = "green"; // Evento já passou
    } else {
      card1.style.backgroundColor = "black"; // Ainda vai acontecer
      card2.style.backgroundColor = "black"; // Ainda vai acontecer
      card3.style.backgroundColor = "black"; // Ainda vai acontecer
      card4.style.backgroundColor = "black"; // Ainda vai acontecer
    }
  })
});


