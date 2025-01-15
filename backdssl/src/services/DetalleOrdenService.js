const detalleOrdenRepository = require('../repositories/DetalleOrdenRepository');

class DetalleOrdenService {
    getAllDetallesOrden() {
        return detalleOrdenRepository.findAll();
    }

    getDetalleOrdenById(id) {
        return detalleOrdenRepository.findById(id);
    }

    createDetalleOrden(detalleOrdenData) {
        return detalleOrdenRepository.create(detalleOrdenData);
    }

    updateDetalleOrden(id, detalleOrdenData) {
        return detalleOrdenRepository.update(id, detalleOrdenData);
    }

    deleteDetalleOrden(id) {
        return detalleOrdenRepository.delete(id);
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