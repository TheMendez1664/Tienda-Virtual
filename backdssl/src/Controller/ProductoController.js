const express = require('express');
const productoService = require('../services/ProductoService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const productos = await productoService.getAllProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching productos', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const producto = await productoService.getProductoById(req.params.id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ message: 'Producto not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching producto', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newProducto = await productoService.createProducto(req.body);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: 'Error creating producto', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedProducto = await productoService.updateProducto(req.params.id, req.body);
        if (updatedProducto) {
            res.json(updatedProducto);
        } else {
            res.status(404).json({ message: 'Producto not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating producto', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await productoService.deleteProducto(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Producto not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting producto', error: error.message });
    }
});

module.exports = router;
