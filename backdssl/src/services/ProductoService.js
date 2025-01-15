const productoRepository = require('../repositories/ProductoRepository');

class ProductoService {
    getAllProductos() {
        return productoRepository.findAll();
    }

    getProductoById(id) {
        return productoRepository.findById(id);
    }

    createProducto(productoData) {
        return productoRepository.create(productoData);
    }

    updateProducto(id, productoData) {
        return productoRepository.update(id, productoData);
    }

    deleteProducto(id) {
        return productoRepository.delete(id);
    }

    async getProductosByCategory(categoria_id) {
        const productos = await productoRepository.findByCategory(categoria_id);
        if (!productos.length) {
            throw new Error('No se encontraron productos en esta categoría');
        }
        return productos;
    }

    async updateStock(productId, newStock) {
        return productoRepository.updateStock(productId, newStock);
    }
}

module.exports = new ProductoService();
