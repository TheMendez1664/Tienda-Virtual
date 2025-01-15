const CrudRepository = require('../lib/CrudRepository');
const Usuario = require('../models/Usuario');

class UsuarioRepository extends CrudRepository {
    constructor() {
        super(Usuario);
    }

    // Métodos específicos de Usuario
    async findByRole(role) {
        const [rows] = await this.pool.query(`
            SELECT * FROM ${Usuario.tableName} WHERE rol = ?
        `, [role]);
        return rows;
    }

    async findByEmail(email) {
        const [rows] = await this.pool.query(`
            SELECT * FROM ${Usuario.tableName} WHERE correo = ?
        `, [email]);
        return rows[0] || null;
    }
}

module.exports = new UsuarioRepository();
