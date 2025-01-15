const ordenRepository = require('../repositories/OrdenRepository');

class OrdenService {
    getAllOrdenes() {
        return ordenRepository.findAll();
    }

    getOrdenById(id) {
        return ordenRepository.findById(id);
    }

    createOrden(ordenData) {
        return ordenRepository.create(ordenData);
    }

    updateOrden(id, ordenData) {
        return ordenRepository.update(id, ordenData);
    }

    deleteOrden(id) {
        return ordenRepository.delete(id);
    }

    async getOrdenesByCliente(clienteId) {
        const ordenes = await ordenRepository.findByClient(clienteId);
        if (!ordenes.length) {
            throw new Error('No se encontraron órdenes para este cliente');
        }
        return ordenes;
    }
}

module.exports = new OrdenService();