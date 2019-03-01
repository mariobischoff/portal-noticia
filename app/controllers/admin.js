module.exports.form_add_noticia = function(app, req, res) {
  res.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
};

module.exports.noticia_salvar = function(app, req, res) {
  let noticia = req.body
  req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
  req.assert('resumo', 'Resumo deve conter entre 10 e 100 char').len(10, 100);
  req.assert('autor', 'Autor é obrigatorio').notEmpty();
  req.assert('data_noticia', 'Data é obrigatorio').notEmpty();
  req.assert('noticia', 'Noticia é obrigatorio').notEmpty();
  let err = req.validationErrors();
  if(err) {
    res.render("admin/form_add_noticia", {validacao : err, noticia : noticia});
    return;
  }
  let conn = app.config.dbConn();
  let noticiaModel = new app.app.models.NoticiaDAO(conn);
  noticiaModel.salvarNoticia(noticia, function(error, result) {
    res.redirect('/noticias');
  });
};
