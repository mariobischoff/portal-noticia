module.exports = function(app) {
  app.get('/form_add_noticia', function(req, res) {
    app.app.controllers.admin.form_add_noticia(app, req, res);
  });

  app.post('/noticias/salvar', function(req, res) {
    app.app.controllers.admin.noticia_salvar(app, req, res);
  });
};
