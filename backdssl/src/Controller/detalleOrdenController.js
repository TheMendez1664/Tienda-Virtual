const express = require('express');
const detalleOrdenService = require('../services/DetalleOrdenService');
const router = express.Router();

router.get('/', async (req, res) => {
    const detalles = await detalleOrdenService.getAllDetalles();
    res.json(detalles);
});

router.get('/:id', async (req, res) => {
    const detalle = await detalleOrdenService.getDetalleById(req.params.id);
    if (detalle) {
        res.json(detalle);
    } else {
        res.status(404).json({ message: 'Detalle not found' });
    }
});

router.post('/', async (req, res) => {
    const newDetalle = await detalleOrdenService.createDetalle(req.body);
    res.status(201).json(newDetalle);
});

router.put('/:id', async (req, res) => {
    const updatedDetalle = await detalleOrdenService.updateDetalle(req.params.id, req.body);
    if (updatedDetalle) {
        res.json(updatedDetalle);
    } else {
        res.status(404).json({ message: 'Detalle not found' });
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await detalleOrdenService.deleteDetalle(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Detalle not found' });
    }
});

module.exports = router;