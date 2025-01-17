const CrudRepository = require('../lib/CrudRepository');
const Usuario = require('../models/Usuario');

class UsuarioRepository extends CrudRepository {
    constructor() {
        super(Usuario);
    }

    // Métodos específicos de Usuario
    async findByRole(role) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${Usuario.tableName} WHERE rol = ?
            `, [role]);
            return rows;
        } catch (error) {
            console.error(`Error en findByRole para Usuario: ${error.message}`);
            throw error;
        }
    }

    async findByEmail(email) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${Usuario.tableName} WHERE correo = ?
            `, [email]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findByEmail para Usuario: ${error.message}`);
            throw error;
        }
    }
}

module.exports = new UsuarioRepository();
