const CrudRepository = require('../lib/CrudRepository');
const HistorialPago = require('../models/HistorialPago');

class HistorialPagoRepository extends CrudRepository {
    constructor() {
        super(HistorialPago);
    }

    // Métodos específicos de Historial de Pago
    async findByOrder(ordenId) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${HistorialPago.tableName} WHERE orden_id = ?
            `, [ordenId]);
            return rows;
        } catch (error) {
            console.error(`Error en findByOrder para HistorialPago: ${error.message}`);
            throw error;
        }
    }
}

module.exports = new HistorialPagoRepository();
