module.exports.index = function(app, req, res) {
  let conn = app.config.dbConn();
  let noticiaModel = new app.app.models.NoticiaDAO(conn);
  noticiaModel.get5Ultimas(function(error, result){
    res.render("home/index", {noticias : result});
  });
}
