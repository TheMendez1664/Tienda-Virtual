const carritoRepository = require('../repositories/CarritoRepository');

class CarritoService {
    async getAllCarritos() {
        return await carritoRepository.findAll();
    }

    async getCarritoById(id) {
        const carrito = await carritoRepository.findById(id);
        if (!carrito) {
            throw new Error('Carrito no encontrado');
        }
        return carrito;
    }

    async createCarrito(carritoData) {
        return await carritoRepository.create(carritoData);
    }

    async updateCarrito(id, carritoData) {
        const carritoExistente = await carritoRepository.findById(id);
        if (!carritoExistente) {
            throw new Error('Carrito no encontrado');
        }
        return await carritoRepository.update(id, carritoData);
    }

    async deleteCarrito(id) {
        const carritoExistente = await carritoRepository.findById(id);
        if (!carritoExistente) {
            throw new Error('Carrito no encontrado');
        }
        return await carritoRepository.delete(id);
    }

    async getCarritoByCliente(clienteId) {
        const carrito = await carritoRepository.findByClient(clienteId);
        if (!carrito || carrito.length === 0) {
            throw new Error('Carrito no encontrado');
        }
        return carrito;
    }

    async clearCarrito(clienteId) {
        const carrito = await carritoRepository.findByClient(clienteId);
        if (!carrito || carrito.length === 0) {
            throw new Error('No hay carrito para limpiar');
        }
        return await carritoRepository.clearCart(clienteId);
    }
}

module.exports = new CarritoService();
