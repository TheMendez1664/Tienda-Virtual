const express = require('express');
const historialPagoService = require('../services/HistorialPagoService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const pagos = await historialPagoService.getAllPagos();
        res.json(pagos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener pagos', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const pago = await historialPagoService.getPagoById(req.params.id);
        if (!pago) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        res.json(pago);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pago', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newPago = await historialPagoService.createPago(req.body);
        res.status(201).json(newPago);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el pago', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPago = await historialPagoService.updatePago(req.params.id, req.body);
        if (!updatedPago) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        res.json(updatedPago);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el pago', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await historialPagoService.deletePago(req.params.id);
        if (deleted) {
            return res.status(200).json({ message: 'Pago eliminado con éxito' });
        }
        res.status(404).json({ message: 'Pago no encontrado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pago', error: error.message });
    }
});

module.exports = router;
