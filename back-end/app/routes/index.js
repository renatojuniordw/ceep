var api = require('../api'),
  path = require('path');

module.exports = function (app) {

  app.route('/v1/cartoes')
    .post(api.adiciona)
    .get(api.lista)
    .put(api.atualiza);

  app.route('/v1/cartoes/:cartaoId')
    .delete(api.remove)
    .get(api.busca);

  app.get('/v1/grupos', api.listaGrupos)
  app.get('/v1/cartoes/grupo/:grupoId', api.listaPorGrupo);

  app.all('/*', function (req, res) {
    res.sendFile(path.join(app.get('clientPath'), 'index.html'));
  });
};
