const CrudRepository = require('../lib/CrudRepository');
const HistorialPago = require('../models/HistorialPago');

class HistorialPagoRepository extends CrudRepository {
    constructor() {
        super(HistorialPago);
    }

    // Métodos específicos de Historial de Pago
    async findByOrder(ordenId) {
        const [rows] = await this.pool.query(`
            SELECT * FROM ${HistorialPago.tableName} WHERE orden_id = ?
        `, [ordenId]);
        return rows;
    }
}

module.exports = new HistorialPagoRepository();