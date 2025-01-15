const CrudRepository = require('../lib/CrudRepository');
const Cliente = require('../models/Cliente');

class ClienteRepository extends CrudRepository {
    constructor() {
        super(Cliente);
    }

    // Métodos específicos de Cliente
    async findByEmail(correo) {
        const [rows] = await this.pool.query(`
            SELECT * FROM ${Cliente.tableName} WHERE correo = ?
        `, [correo]);
        return rows[0] || null;
    }
}

module.exports = new ClienteRepository();
