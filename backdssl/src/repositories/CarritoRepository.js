const CrudRepository = require('../lib/CrudRepository');
const Carrito = require('../models/Carrito');

class CarritoRepository extends CrudRepository {
    constructor() {
        super(Carrito);
    }

    // Métodos específicos de Carrito
    async findByClient(clienteId) {
        const [rows] = await this.pool.query(`
            SELECT * FROM ${Carrito.tableName} WHERE cliente_id = ?
        `, [clienteId]);
        return rows;
    }

    async clearCart(clienteId) {
        const [result] = await this.pool.query(`
            DELETE FROM ${Carrito.tableName} WHERE cliente_id = ?
        `, [clienteId]);
        return result.affectedRows > 0;
    }
}

module.exports = new CarritoRepository();