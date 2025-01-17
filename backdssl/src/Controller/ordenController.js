const express = require('express');
const ordenService = require('../services/OrdenService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const ordenes = await ordenService.getAllOrdenes();
        res.json(ordenes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener órdenes', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const orden = await ordenService.getOrdenById(req.params.id);
        if (!orden) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        res.json(orden);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la orden', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newOrden = await ordenService.createOrden(req.body);
        res.status(201).json(newOrden);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la orden', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedOrden = await ordenService.updateOrden(req.params.id, req.body);
        if (!updatedOrden) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        res.json(updatedOrden);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la orden', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await ordenService.deleteOrden(req.params.id);
        if (deleted) {
            return res.status(200).json({ message: 'Orden eliminada con éxito' });
        }
        res.status(404).json({ message: 'Orden no encontrada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la orden', error: error.message });
    }
});

module.exports = router;
