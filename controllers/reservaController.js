const fs = require('fs');
const path = require('path');

const RESERVAS_FILE = path.join(__dirname, '../reservas.json');

// Função para cadastrar uma nova reserva
const cadastrarReserva = (req, res) => {
  const { nome, email, telefone, modeloCarro, localRetirada, dataRetirada, dataDevolucao } = req.body;

  fs.readFile(RESERVAS_FILE, 'utf8', (err, data) => {
    let reservas = [];

    if (!err && data) {
      try {
        reservas = JSON.parse(data);
      } catch (e) {
        console.error('Erro ao interpretar JSON:', e);
      }
    }

    const novaReserva = {
      id: reservas.length + 1,
      nome,
      email,
      telefone,
      modeloCarro,
      localRetirada,
      dataRetirada,
      dataDevolucao
    };

    reservas.push(novaReserva);

    fs.writeFile(RESERVAS_FILE, JSON.stringify(reservas, null, 2), (err) => {
      if (err) {
        console.error('Erro ao salvar reserva:', err);
        return res.status(500).send('Erro ao cadastrar reserva.');
      }

      return res.status(201).json(novaReserva);
    });
  });
};

// Função para obter os detalhes de uma reserva
const obterDetalhesReserva = (req, res) => {
  const { id } = req.params;

  fs.readFile(RESERVAS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler reservas:', err);
      return res.status(500).send('Erro interno do servidor');
    }

    let reservas;
    try {
      reservas = JSON.parse(data);
    } catch (e) {
      return res.status(500).send('Erro ao processar dados das reservas');
    }

    const reserva = reservas.find(r => r.id === parseInt(id));

    if (reserva) {
      return res.json(reserva);
    } else {
      return res.status(404).send('Reserva não encontrada');
    }
  });
};

module.exports = {
  cadastrarReserva,
  obterDetalhesReserva
};
