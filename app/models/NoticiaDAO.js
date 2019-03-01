function NoticiaDAO(conn) {
  this._conn = conn;
}

NoticiaDAO.prototype.getNoticias = function(callback){
  this._conn.query('select * from noticia order by data_criacao desc', callback);
}

NoticiaDAO.prototype.getNoticia = function(id_noticia, callback) {
  this._conn.query('select * from noticia where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiaDAO.prototype.salvarNoticia = function(noticia, callback) {
  this._conn.query('insert into noticia set ?', noticia, callback);
}
NoticiaDAO.prototype.get5Ultimas = function(callback) {
  this._conn.query('select * from noticia order by data_criacao desc limit 5', callback);
}

module.exports = function() {
  return NoticiaDAO;
}
