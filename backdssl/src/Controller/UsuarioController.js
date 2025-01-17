const express = require('express');
const usuarioService = require('../services/UsuarioService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching usuarios', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const usuario = await usuarioService.getUsuarioById(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching usuario', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newUsuario = await usuarioService.createUsuario(req.body);
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Error creating usuario', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUsuario = await usuarioService.updateUsuario(req.params.id, req.body);
        if (updatedUsuario) {
            res.json(updatedUsuario);
        } else {
            res.status(404).json({ message: 'Usuario not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating usuario', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await usuarioService.deleteUsuario(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Usuario not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting usuario', error: error.message });
    }
});

module.exports = router;
