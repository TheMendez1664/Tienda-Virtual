const categoriaRepository = require('../repositories/CategoriaRepository');

class CategoriaService {
    getAllCategorias() {
        return categoriaRepository.findAll();
    }

    getCategoriaById(id) {
        return categoriaRepository.findById(id);
    }

    createCategoria(categoriaData) {
        return categoriaRepository.create(categoriaData);
    }

    updateCategoria(id, categoriaData) {
        return categoriaRepository.update(id, categoriaData);
    }

    deleteCategoria(id) {
        return categoriaRepository.delete(id);
    }

    async getCategoriaByName(nombre_categoria) {
        const categoria = await categoriaRepository.findByName(nombre_categoria);
        if (!categoria) {
            throw new Error('Categoría no encontrada');
        }
        return categoria;
    }
}

module.exports = new CategoriaService();
