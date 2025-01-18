const express = require('express');
const categoriaService = require('../services/CategoriaService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categorias = await categoriaService.getAllCategorias();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener categorías', error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const categoria = await categoriaService.getCategoriaById(req.params.id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoría', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoCliente = await clienteService.createCliente(req.body);
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear cliente', error: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const clienteActualizado = await clienteService.updateCliente(req.params.id, req.body);
        if (clienteActualizado) {
            res.json(clienteActualizado);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar cliente', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await categoriaService.deleteCategoria(req.params.id);
        if (deleted) {
            return res.status(200).json({ message: 'Categoría eliminada con éxito' });
        }
        res.status(404).json({ message: 'Categoría no encontrada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría', error: error.message });
    }
});

module.exports = router;
