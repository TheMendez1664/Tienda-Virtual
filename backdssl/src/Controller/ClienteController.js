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
        res.status(500).json({ message: 'Error al obtener el cliente', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newCliente = await clienteService.createCliente(req.body);
        res.status(201).json(newCliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el cliente', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedCliente = await clienteService.updateCliente(req.params.id, req.body);
        if (!updatedCliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(updatedCliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el cliente', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await clienteService.deleteCliente(req.params.id);
        if (deleted) {
            return res.status(200).json({ message: 'Cliente eliminado con éxito' });
        }
        res.status(404).json({ message: 'Cliente no encontrado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el cliente', error: error.message });
    }
});

module.exports = router;
