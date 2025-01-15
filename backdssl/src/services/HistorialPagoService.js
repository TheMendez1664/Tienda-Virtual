const historialRepository = require('../repositories/HistorialPagoRepository');

class HistorialPagoService {
    getAllHistoriales() {
        return historialRepository.findAll();
    }

    getHistorialById(id) {
        return historialRepository.findById(id);
    }

    createHistorial(historialData) {
        return historialRepository.create(historialData);
    }

    updateHistorial(id, historialData) {
        return historialRepository.update(id, historialData);
    }

    deleteHistorial(id) {
        return historialRepository.delete(id);
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