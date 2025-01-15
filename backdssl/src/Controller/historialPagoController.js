const express = require('express');
const historialPagoService = require('../services/HistorialPagoService');
const router = express.Router();

router.get('/', async (req, res) => {
    const pagos = await historialPagoService.getAllPagos();
    res.json(pagos);
});

router.get('/:id', async (req, res) => {
    const pago = await historialPagoService.getPagoById(req.params.id);
    if (pago) {
        res.json(pago);
    } else {
        res.status(404).json({ message: 'Pago not found' });
    }
});

router.post('/', async (req, res) => {
    const newPago = await historialPagoService.createPago(req.body);
    res.status(201).json(newPago);
});

router.put('/:id', async (req, res) => {
    const updatedPago = await historialPagoService.updatePago(req.params.id, req.body);
    if (updatedPago) {
        res.json(updatedPago);
    } else {
        res.status(404).json({ message: 'Pago not found' });
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await historialPagoService.deletePago(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Pago not found' });
    }
});

module.exports = router;