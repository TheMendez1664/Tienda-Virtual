const express = require('express');
const detalleOrdenService = require('../services/DetalleOrdenService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const detalles = await detalleOrdenService.getAllDetalles();
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener detalles de orden', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const detalle = await detalleOrdenService.getDetalleOrdenById(req.params.id);
        if (!detalle) {
            return res.status(404).json({ message: 'Detalle de orden no encontrado' });
        }
        res.json(detalle);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el detalle de orden', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newDetalle = await detalleOrdenService.createDetalleOrden(req.body);
        res.status(201).json(newDetalle);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el detalle de orden', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedDetalle = await detalleOrdenService.updateDetalleOrden(req.params.id, req.body);
        if (!updatedDetalle) {
            return res.status(404).json({ message: 'Detalle de orden no encontrado' });
        }
        res.json(updatedDetalle);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el detalle de orden', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await detalleOrdenService.deleteDetalleOrden(req.params.id);
        if (deleted) {
            return res.status(200).json({ message: 'Detalle de orden eliminado con éxito' });
        }
        res.status(404).json({ message: 'Detalle de orden no encontrado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el detalle de orden', error: error.message });
    }
});

module.exports = router;
