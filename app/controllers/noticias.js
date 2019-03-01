module.exports.noticias = function(app, req, res) {
  let conn = app.config.dbConn();
  let noticiaModel = new app.app.models.NoticiaDAO(conn);
  noticiaModel.getNoticias(function(erro, result) {
    res.render("noticias/noticias", {noticias : result});
  });
}

module.exports.noticia = function(app, req, res) {
  let conn = app.config.dbConn();
  let noticiaModel = new app.app.models.NoticiaDAO(conn);
  let id_noticia = req.query;
  noticiaModel.getNoticia(id_noticia, function(error, result) {
    res.render("noticias/noticia", {noticia : result});
  });
}
