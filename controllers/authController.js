const db = require('../db');

const cadastrarUsuario = (req, res) => {
    const { nome, email, senha } = req.body;

    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).send('Erro no servidor');

        if (results.length > 0) {
            return res.send('<script>alert("E-mail já cadastrado!"); window.location.href="/cadastro.html";</script>');
        }

        db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err) => {
            if (err) return res.status(500).send('Erro ao cadastrar usuário.');

            return res.send('<script>alert("Cadastro realizado com sucesso!"); window.location.href="/login.html";</script>');
        });
    });
};

const loginUsuario = (req, res) => {
    const { email, senha } = req.body;

    db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (err, results) => {
        if (err) return res.status(500).send('Erro interno do servidor');

        if (results.length > 0) {
            return res.redirect(`/Index.html?nome=${encodeURIComponent(results[0].nome)}`);
        } else {
            return res.send('<script>alert("Email ou senha inválidos!"); window.location.href="/login.html";</script>');
        }
    });
};

module.exports = {
    cadastrarUsuario,
    loginUsuario
};
