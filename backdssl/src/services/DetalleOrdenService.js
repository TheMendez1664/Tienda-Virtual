const detalleOrdenRepository = require('../repositories/DetalleOrdenRepository');

class DetalleOrdenService {
    async getAllDetallesOrden() {
        return await detalleOrdenRepository.findAll();
    }

    async getDetalleOrdenById(id) {
        const detalle = await detalleOrdenRepository.findById(id);
        if (!detalle) {
            throw new Error('Detalle de orden no encontrado');
        }
        return detalle;
    }

    async createDetalleOrden(detalleOrdenData) {
        return await detalleOrdenRepository.create(detalleOrdenData);
    }

    async updateDetalleOrden(id, detalleOrdenData) {
        const detalleExistente = await detalleOrdenRepository.findById(id);
        if (!detalleExistente) {
            throw new Error('Detalle de orden no encontrado');
        }
        return await detalleOrdenRepository.update(id, detalleOrdenData);
    }

    async deleteDetalleOrden(id) {
        const detalleExistente = await detalleOrdenRepository.findById(id);
        if (!detalleExistente) {
            throw new Error('Detalle de orden no encontrado');
        }
        return await detalleOrdenRepository.delete(id);
    }

    async getDetallesByOrden(ordenId) {
        const detalles = await detalleOrdenRepository.findByOrder(ordenId);
        if (!detalles.length) {
            throw new Error('No se encontraron detalles para esta orden');
        }
        return detalles;
    }
}

module.exports = new DetalleOrdenService();
