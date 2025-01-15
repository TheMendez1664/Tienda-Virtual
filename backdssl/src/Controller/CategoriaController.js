const express = require('express');
const categoriaService = require('../services/CategoriaService');
const router = express.Router();

router.get('/', async (req, res) => {
    const categorias = await categoriaService.getAllCategorias();
    res.json(categorias);
});

router.get('/:id', async (req, res) => {
    const categoria = await categoriaService.getCategoriaById(req.params.id);
    if (categoria) {
        res.json(categoria);
    } else {
        res.status(404).json({ message: 'Categoria not found' });
    }
});

router.post('/', async (req, res) => {
    const newCategoria = await categoriaService.createCategoria(req.body);
    res.status(201).json(newCategoria);
});

router.put('/:id', async (req, res) => {
    const updatedCategoria = await categoriaService.updateCategoria(req.params.id, req.body);
    if (updatedCategoria) {
        res.json(updatedCategoria);
    } else {
        res.status(404).json({ message: 'Categoria not found' });
    }
});

router.delete('/:id', async (req, res) => {
    const deleted = await categoriaService.deleteCategoria(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Categoria not found' });
    }
});

module.exports = router;
