const express = require('express');
const productoService = require('../services/ProductoService');
const router = express.Router();

router.get('/', async (req, res) => {
    const productos = await productoService.getAllProductos();
    res.json(productos);
});

router.get('/:id', async (req, res) => {
    const producto = await productoService.getProductoById(req.params.id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ message: 'Producto not found' });
    }
});

router.post('/', async (req, res) => {
    const newProducto = await productoService.createProducto(req.body);
    res.status(201).json(newProducto);
});

router.put('/:id', async (req, res) => {
    const updatedProducto = await productoService.updateProducto(req.params.id, req.body);
    if (updatedProducto) {
        res.json(updatedProducto);
    } else {
        res.status(404).json({ message: 'Producto not found' });
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await productoService.deleteProducto(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Producto not found' });
    }
});

module.exports = router;
