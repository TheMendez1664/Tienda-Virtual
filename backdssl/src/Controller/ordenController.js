const express = require('express');
const ordenService = require('../services/OrdenService');
const router = express.Router();

router.get('/', async (req, res) => {
    const ordenes = await ordenService.getAllOrdenes();
    res.json(ordenes);
});

router.get('/:id', async (req, res) => {
    const orden = await ordenService.getOrdenById(req.params.id);
    if (orden) {
        res.json(orden);
    } else {
        res.status(404).json({ message: 'Orden not found' });
    }
});

router.post('/', async (req, res) => {
    const newOrden = await ordenService.createOrden(req.body);
    res.status(201).json(newOrden);
});

router.put('/:id', async (req, res) => {
    const updatedOrden = await ordenService.updateOrden(req.params.id, req.body);
    if (updatedOrden) {
        res.json(updatedOrden);
    } else {
        res.status(404).json({ message: 'Orden not found' });
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await ordenService.deleteOrden(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Orden not found' });
    }
});

module.exports = router;