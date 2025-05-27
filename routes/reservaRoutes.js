const express = require('express');
const router = express.Router();
const { cadastrarReserva, obterDetalhesReserva } = require('../controllers/reservaController');
const Reserva = require('../models/reservaModel');

// Rota para cadastrar uma nova reserva
router.post('/api/reservas', cadastrarReserva);

// Rota para obter os detalhes de uma reserva específica
router.get('/api/reservas/:id', obterDetalhesReserva);

module.exports = router;
