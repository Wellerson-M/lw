const db = require('../db');

const Reserva = {
  criar: (dados, callback) => {
    const query = `
      INSERT INTO reservas (
        nome, email, telefone, modeloCarro, localRetirada, dataRetirada, dataDevolucao
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const valores = [
      dados.nome,
      dados.email,
      dados.telefone,
      dados.modeloCarro,
      dados.localRetirada,
      dados.dataRetirada,
      dados.dataDevolucao
    ];
    db.query(query, valores, callback);
  },

  listar: (callback) => {
    const query = 'SELECT * FROM reservas';
    db.query(query, callback);
  }
};

module.exports = Reserva;
