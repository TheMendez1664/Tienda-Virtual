const express = require('express');
const ordenService = require('../services/OrdenService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const ordenes = await ordenService.getAllOrdenes();
        res.json(ordenes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ordenes', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const orden = await ordenService.getOrdenById(req.params.id);
        if (orden) {
            res.json(orden);
        } else {
            res.status(404).json({ message: 'Orden not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orden', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newOrden = await ordenService.createOrden(req.body);
        res.status(201).json(newOrden);
    } catch (error) {
        res.status(500).json({ message: 'Error creating orden', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedOrden = await ordenService.updateOrden(req.params.id, req.body);
        if (updatedOrden) {
            res.json(updatedOrden);
        } else {
            res.status(404).json({ message: 'Orden not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating orden', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await ordenService.deleteOrden(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Orden not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting orden', error: error.message });
    }
});

module.exports = router;
