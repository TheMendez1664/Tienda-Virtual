const express = require('express');
const clienteService = require('../services/ClienteService');
const router = express.Router();

router.get('/', async (req, res) => {
    const clientes = await clienteService.getAllClientes();
    res.json(clientes);
});

router.get('/:id', async (req, res) => {
    const cliente = await clienteService.getClienteById(req.params.id);
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ message: 'Cliente not found' });
    }
});

router.post('/', async (req, res) => {
    const newCliente = await clienteService.createCliente(req.body);
    res.status(201).json(newCliente);
});

router.put('/:id', async (req, res) => {
    const updatedCliente = await clienteService.updateCliente(req.params.id, req.body);
    if (updatedCliente) {
        res.json(updatedCliente);
    } else {
        res.status(404).json({ message: 'Cliente not found' });
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await clienteService.deleteCliente(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Cliente not found' });
    }
});

module.exports = router;
