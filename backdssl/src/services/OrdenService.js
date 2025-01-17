const ordenRepository = require('../repositories/OrdenRepository');

class OrdenService {
    async getAllOrdenes() {
        return await ordenRepository.findAll();
    }

    async getOrdenById(id) {
        const orden = await ordenRepository.findById(id);
        if (!orden) {
            throw new Error('Orden no encontrada');
        }
        return orden;
    }

    async createOrden(ordenData) {
        return await ordenRepository.create(ordenData);
    }

    async updateOrden(id, ordenData) {
        const ordenExistente = await ordenRepository.findById(id);
        if (!ordenExistente) {
            throw new Error('Orden no encontrada');
        }
        return await ordenRepository.update(id, ordenData);
    }

    async deleteOrden(id) {
        const ordenExistente = await ordenRepository.findById(id);
        if (!ordenExistente) {
            throw new Error('Orden no encontrada');
        }
        return await ordenRepository.delete(id);
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
