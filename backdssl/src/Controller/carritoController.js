const express = require('express');
const carritoService = require('../services/carritoService');
const router = express.Router();

router.get('/', async (req, res) => {
    const carritos = await carritoService.getAllCarritos();
    res.json(carritos);
});

router.get('/:id', async (req, res) => {
    const carrito = await carritoService.getCarritoById(req.params.id);
    if (carrito) {
        res.json(carrito);
    } else {
        res.status(404).json({ message: 'Carrito not found' });
    }
});

router.post('/', async (req, res) => {
    const newCarrito = await carritoService.createCarrito(req.body);
    res.status(201).json(newCarrito);
});

router.put('/:id', async (req, res) => {
    const updatedCarrito = await carritoService.updateCarrito(req.params.id, req.body);
    if (updatedCarrito) {
        res.json(updatedCarrito);
    } else {
        res.status(404).json({ message: 'Carrito not found' });
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await carritoService.deleteCarrito(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Carrito not found' });
    }
});

module.exports = router;