const CrudRepository = require('../lib/CrudRepository');
const DetalleOrden = require('../models/DetalleOrden');

class DetalleOrdenRepository extends CrudRepository {
    constructor() {
        super(DetalleOrden);
    }

    // Métodos específicos de Detalle de Orden
    async findByOrder(ordenId) {
        const [rows] = await this.pool.query(`
            SELECT * FROM ${DetalleOrden.tableName} WHERE orden_id = ?
        `, [ordenId]);
        return rows;
    }
}

module.exports = new DetalleOrdenRepository();