const carritoRepository = require('../repositories/CarritoRepository');

class CarritoService {
    getAllCarritos() {
        return carritoRepository.findAll();
    }

    getCarritoById(id) {
        return carritoRepository.findById(id);
    }

    createCarrito(carritoData) {
        return carritoRepository.create(carritoData);
    }

    updateCarrito(id, carritoData) {
        return carritoRepository.update(id, carritoData);
    }

    deleteCarrito(id) {
        return carritoRepository.delete(id);
    }

    async getCarritoByCliente(clienteId) {
        const carrito = await carritoRepository.findByClient(clienteId);
        if (!carrito.length) {
            throw new Error('Carrito no encontrado');
        }
        return carrito;
    }

    async clearCarrito(clienteId) {
        return carritoRepository.clearCart(clienteId);
    }
}

module.exports = new CarritoService();