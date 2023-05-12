const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');

const user = new userController();

// Acesso as rotas de usuário
router.get('/', user.index);

// Cadastrar um novo usuário
router.post('/register', user.register);

// Fazer login
router.post('/login', user.login);

// Atualizar dados do usuário
router.patch('/:username', auth, user.update);

// Deleta o usuário
router.delete('/:username', user.delete);

// Retornar dados do usuário
router.get('/data', user.getUser);

module.exports = router;