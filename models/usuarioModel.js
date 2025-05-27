const db = require('../db');

const Usuario = {
  criar: (dados, callback) => {
    const query = `
      INSERT INTO usuarios (
        nome, sobrenome, email, senha, confirmar_senha, cpf, cnh, telefone,
        data_nascimento, cep, rua, numero, bairro, cidade, estado
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const valores = [
      dados.nome,
      dados.sobrenome,
      dados.email,
      dados.senha,
      dados.confirmar_senha,
      dados.cpf,
      dados.cnh,
      dados.telefone,
      dados.data_nascimento,
      dados.cep,
      dados.rua,
      dados.numero,
      dados.bairro,
      dados.cidade,
      dados.estado
    ];
    db.query(query, valores, callback);
  },

  listar: (callback) => {
    const query = 'SELECT * FROM usuarios';
    db.query(query, callback);
  }
};

module.exports = Usuario;
