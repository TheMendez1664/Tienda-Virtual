const express = require('express');
const usuarioService = require('../services/UsuarioService');
const router = express.Router();

router.get('/', async (req, res) => {
    const usuarios = await usuarioService.getAllUsuarios();
    res.json(usuarios);
});

router.get('/:id', async (req, res) => {
    const usuario = await usuarioService.getUsuarioById(req.params.id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ message: 'Usuario not found' });
    }
});

router.post('/', async (req, res) => {
    const newUsuario = await usuarioService.createUsuario(req.body);
    res.status(201).json(newUsuario);
});

router.put('/:id', async (req, res) => {
    const updatedUsuario = await usuarioService.updateUsuario(req.params.id, req.body);
    if (updatedUsuario) {
        res.json(updatedUsuario);
    } else {
        res.status(404).json({ message: 'Usuario not found' });
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await usuarioService.deleteUsuario(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Usuario not found' });
    }
});

module.exports = router;
