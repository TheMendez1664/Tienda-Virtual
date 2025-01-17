const categoriaRepository = require('../repositories/CategoriaRepository');

class CategoriaService {
    async getAllCategorias() {
        return categoriaRepository.findAll();
    }

    async getCategoriaById(id) {
        const categoria = await categoriaRepository.findById(id);
        if (!categoria) {
            throw new Error('Categoría no encontrada');
        }
        return categoria;
    }

    async createCategoria(data) {
        return categoriaRepository.create(data);
    }

    async updateCategoria(id, data) {
        const categoriaExistente = await categoriaRepository.findById(id);
        if (!categoriaExistente) {
            throw new Error('Categoría no encontrada');
        }
        return categoriaRepository.update(id, data);
    }

    async deleteCategoria(id) {
        const categoriaExistente = await categoriaRepository.findById(id);
        if (!categoriaExistente) {
            throw new Error('Categoría no encontrada');
        }
        return categoriaRepository.delete(id);
    }

    async getCategoriaByName(nombre_categoria) {
        return categoriaRepository.findByName(nombre_categoria);
    }
}

module.exports = new CategoriaService();
