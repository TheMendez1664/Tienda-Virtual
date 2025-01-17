const CrudRepository = require('../lib/CrudRepository');
const Cliente = require('../models/Cliente');

class ClienteRepository extends CrudRepository {
    constructor() {
        super(Cliente);
    }

    // Métodos específicos de Cliente
    async findByEmail(correo) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${Cliente.tableName} WHERE correo = ?
            `, [correo]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findByEmail para Cliente: ${error.message}`);
            throw error;
        }
    }
}

module.exports = new ClienteRepository();
