const productoRepository = require('../repositories/ProductoRepository');

class ProductoService {
    async getAllProductos() {
        return await productoRepository.findAll();
    }

    async getProductoById(id) {
        const producto = await productoRepository.findById(id);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        return producto;
    }

    async createProducto(productoData) {
        return await productoRepository.create(productoData);
    }

    async updateProducto(id, productoData) {
        const productoExistente = await productoRepository.findById(id);
        if (!productoExistente) {
            throw new Error('Producto no encontrado');
        }
        return await productoRepository.update(id, productoData);
    }

    async deleteProducto(id) {
        const productoExistente = await productoRepository.findById(id);
        if (!productoExistente) {
            throw new Error('Producto no encontrado');
        }
        return await productoRepository.delete(id);
    }

    async getProductosByCategory(categoria_id) {
        const productos = await productoRepository.findByCategory(categoria_id);
        if (!productos.length) {
            throw new Error('No se encontraron productos en esta categoría');
        }
        return productos;
    }

    async updateStock(productId, newStock) {
        return await productoRepository.updateStock(productId, newStock);
    }
}

module.exports = new ProductoService();
