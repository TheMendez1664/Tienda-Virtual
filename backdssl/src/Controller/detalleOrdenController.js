const express = require('express');
const detalleOrdenService = require('../services/DetalleOrdenService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const detalles = await detalleOrdenService.getAllDetalles();
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener detalles', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const detalle = await detalleOrdenService.getDetalleById(req.params.id);
        if (detalle) {
            res.json(detalle);
        } else {
            res.status(404).json({ message: 'Detalle no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el detalle', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: 'Datos del detalle son necesarios' });
        }
        const newDetalle = await detalleOrdenService.createDetalle(req.body);
        res.status(201).json(newDetalle);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el detalle', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedDetalle = await detalleOrdenService.updateDetalle(req.params.id, req.body);
        if (updatedDetalle) {
            res.json(updatedDetalle);
        } else {
            res.status(404).json({ message: 'Detalle no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el detalle', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await detalleOrdenService.deleteDetalle(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Detalle no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el detalle', error: error.message });
    }
});

module.exports = router;
