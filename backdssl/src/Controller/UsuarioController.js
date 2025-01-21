const express = require('express');
const usuarioService = require('../services/UsuarioService');
const clienteService = require('../services/ClienteService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const usuarios = await usuarioService.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
  }
});

router.post('/con-cliente', async (req, res) => {
  try {
    const { usuarioData, clienteData } = req.body;
    const usuarioConCliente = await usuarioService.createUsuarioConCliente(usuarioData, clienteData);
    res.status(201).json(usuarioConCliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario y cliente', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const usuarioActualizado = await usuarioService.updateUsuario(req.params.id, req.body);
    if (!usuarioActualizado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await usuarioService.deleteUsuario(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
});

module.exports = router;
