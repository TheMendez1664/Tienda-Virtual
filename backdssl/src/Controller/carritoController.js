const express = require('express');
const carritoService = require('../services/CarritoService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const carritos = await carritoService.getAllCarritos();
        res.json(carritos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener carritos', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const carrito = await carritoService.getCarritoById(req.params.id);
        if (!carrito) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }
        res.json(carrito);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el carrito', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: 'Datos del carrito son necesarios' });
        }
        const newCarrito = await carritoService.createCarrito(req.body);
        res.status(201).json(newCarrito);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el carrito', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedCarrito = await carritoService.updateCarrito(req.params.id, req.body);
        if (!updatedCarrito) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }
        res.json(updatedCarrito);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el carrito', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await carritoService.deleteCarrito(req.params.id);
        if (deleted) {
            return res.status(200).json({ message: 'Carrito eliminado con éxito' });
        }
        res.status(404).json({ message: 'Carrito no encontrado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el carrito', error: error.message });
    }
});

module.exports = router;
