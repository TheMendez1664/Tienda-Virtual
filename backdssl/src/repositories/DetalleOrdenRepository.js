const CrudRepository = require('../lib/CrudRepository');
const DetalleOrden = require('../models/DetalleOrden');

class DetalleOrdenRepository extends CrudRepository {
    constructor() {
        super(DetalleOrden);
    }

    // Métodos específicos de Detalle de Orden
    async findByOrder(ordenId) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${DetalleOrden.tableName} WHERE orden_id = ?
            `, [ordenId]);
            return rows;
        } catch (error) {
            console.error(`Error en findByOrder para DetalleOrden: ${error.message}`);
            throw error;
        }
    }
}

module.exports = new DetalleOrdenRepository();
