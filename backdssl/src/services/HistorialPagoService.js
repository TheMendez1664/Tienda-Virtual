const historialRepository = require('../repositories/HistorialPagoRepository');

class HistorialPagoService {
    async getAllHistoriales() {
        return await historialRepository.findAll();
    }

    async getHistorialById(id) {
        const historial = await historialRepository.findById(id);
        if (!historial) {
            throw new Error('Historial de pago no encontrado');
        }
        return historial;
    }

    async createHistorial(historialData) {
        return await historialRepository.create(historialData);
    }

    async updateHistorial(id, historialData) {
        const historialExistente = await historialRepository.findById(id);
        if (!historialExistente) {
            throw new Error('Historial de pago no encontrado');
        }
        return await historialRepository.update(id, historialData);
    }

    async deleteHistorial(id) {
        const historialExistente = await historialRepository.findById(id);
        if (!historialExistente) {
            throw new Error('Historial de pago no encontrado');
        }
        return await historialRepository.delete(id);
    }

    async getHistorialByUsuario(usuarioId) {
        const historiales = await historialRepository.findByUsuario(usuarioId);
        if (!historiales.length) {
            throw new Error('No se encontraron registros de historial para este usuario');
        }
        return historiales;
    }

    async getHistorialByFecha(fechaInicio, fechaFin) {
        const historiales = await historialRepository.findByFecha(fechaInicio, fechaFin);
        if (!historiales.length) {
            throw new Error('No se encontraron registros de historial en el rango de fechas');
        }
        return historiales;
    }
}

module.exports = new HistorialPagoService();
