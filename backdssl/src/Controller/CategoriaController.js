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
        const newCategoria = await categoriaService.createCategoria(req.body);
        res.status(201).json(newCategoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedCategoria = await categoriaService.updateCategoria(req.params.id, req.body);
        if (!updatedCategoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json(updatedCategoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría', error: error.message });
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
