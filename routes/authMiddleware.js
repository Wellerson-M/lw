function autenticarUsuario(req, res, next) {
  if (req.session && req.session.usuario) {
    next(); // Usuário autenticado, prossegue para a próxima função
  } else {
    res.status(401).send('Usuário não autenticado');
  }
}

module.exports = autenticarUsuario;