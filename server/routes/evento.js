var express = require('express');
var router = express.Router();

/* GET informações do dia dos namorados listing. */
router.get('/', function(req, res, next) {

  // Configurando CORS individualmente
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')

  //Versão final da tarefa:
  // const data = new Date("2025-06-12");

  /// gerar data a 5 segundos de "distância" da data atual:
  const data = new Date();
  const atual = data.getTime();
  data.setTime(atual + 5*1000);

  /// "Output" (corpo da resposta):
  res.send({
    nomeEvent: 'Dia dos Namorados',
    data: data
  });
});

module.exports = router;
