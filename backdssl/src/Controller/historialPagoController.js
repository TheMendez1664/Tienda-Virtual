const express = require('express');
const historialPagoService = require('../services/HistorialPagoService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const pagos = await historialPagoService.getAllPagos();
        res.json(pagos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pagos', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const pago = await historialPagoService.getPagoById(req.params.id);
        if (pago) {
            res.json(pago);
        } else {
            res.status(404).json({ message: 'Pago not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pago', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newPago = await historialPagoService.createPago(req.body);
        res.status(201).json(newPago);
    } catch (error) {
        res.status(500).json({ message: 'Error creating pago', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPago = await historialPagoService.updatePago(req.params.id, req.body);
        if (updatedPago) {
            res.json(updatedPago);
        } else {
            res.status(404).json({ message: 'Pago not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating pago', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await historialPagoService.deletePago(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Pago not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting pago', error: error.message });
    }
});

module.exports = router;
