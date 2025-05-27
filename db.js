const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // usuário padrão do XAMPP
  password: '',         // geralmente vazio no XAMPP
  database: 'lwcar'     // nome do banco que você criou no MySQL
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL.');
  }
});

module.exports = connection;
