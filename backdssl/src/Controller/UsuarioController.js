const express = require('express');
const usuarioService = require('../services/UsuarioService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const usuario = await usuarioService.getUsuarioById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newUsuario = await usuarioService.createUsuario(req.body);
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUsuario = await usuarioService.updateUsuario(req.params.id, req.body);
        if (!updatedUsuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(updatedUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await usuarioService.deleteUsuario(req.params.id);
        if (deleted) {
            return res.status(200).json({ message: 'Usuario eliminado con éxito' });
        }
        res.status(404).json({ message: 'Usuario no encontrado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
    }
});

module.exports = router;
