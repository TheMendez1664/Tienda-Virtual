const CrudRepository = require('../lib/CrudRepository');
const Orden = require('../models/Orden');

class OrdenRepository extends CrudRepository {
    constructor() {
        super(Orden);
    }

    // Métodos específicos de Orden
    async findByClient(clienteId) {
        const [rows] = await this.pool.query(`
            SELECT * FROM ${Orden.tableName} WHERE cliente_id = ?
        `, [clienteId]);
        return rows;
    }
}

module.exports = new OrdenRepository();