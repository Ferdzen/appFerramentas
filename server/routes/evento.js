var express = require('express');
var router = express.Router();

/* GET informações do dia dos namorados listing. */
router.get('/', function(req, res, next) {
  // Configurando CORS individualmente
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  const data = new Date("2025-06-12T00:00:00.000");

  // Timestamp atual
  const atual = new Date().getTime();

  // Diferença entre a data futura e o tempo atual
  const diferenca = data.getTime() - atual;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  if (diferenca <= 0) {
    return res.send(JSON.stringify({
      nomeEvento: 'Dia dos Namorados',
      data: data.toISOString(), // transforma para string legível no frontend
      dia: 0,
      hora: 0,
      minuto: 0,
      segundo: 0,
      passou: true,
    }));
  }

  res.send({
    nomeEvento: 'Dia dos Namorados',
    data: data.toISOString(), // transforma para string legível no frontend
    dia: dias,
    hora: horas,
    minuto: minutos,
    segundo: segundos,
    passou: false,
  });
});

module.exports = router;
