const express = require('express');
const productoService = require('../services/ProductoService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const productos = await productoService.getAllProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const producto = await productoService.getProductoById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newProducto = await productoService.createProducto(req.body);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedProducto = await productoService.updateProducto(req.params.id, req.body);
        if (!updatedProducto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(updatedProducto);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await productoService.deleteProducto(req.params.id);
        if (deleted) {
            return res.status(200).json({ message: 'Producto eliminado con éxito' });
        }
        res.status(404).json({ message: 'Producto no encontrado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
    }
});

module.exports = router;
