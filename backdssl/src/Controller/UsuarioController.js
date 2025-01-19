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
        const nuevoUsuario = await usuarioService.createUsuario(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
    }
});

router.post('/con-cliente', async (req, res) => {
    try {
        const { usuario, cliente } = req.body;
        const nuevoUsuario = await usuarioService.createUsuarioConCliente(usuario, cliente);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario y cliente', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const usuarioActualizado = await usuarioService.updateUsuario(req.params.id, req.body);
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await usuarioService.deleteUsuario(req.params.id);
        if (eliminado) {
            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
    }
});

module.exports = router;
