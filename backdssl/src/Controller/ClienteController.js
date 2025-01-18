const express = require('express');
const clienteService = require('../services/ClienteService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const clientes = await clienteService.getAllClientes();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener clientes', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cliente = await clienteService.getClienteById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener cliente', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const clienteActualizado = await clienteService.updateCliente(req.params.id, req.body);
    if (!clienteActualizado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(clienteActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar cliente', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await clienteService.deleteCliente(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json({ message: 'Cliente eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar cliente', error: error.message });
  }
});

module.exports = router;
