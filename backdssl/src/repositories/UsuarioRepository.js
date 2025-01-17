const CrudRepository = require('../lib/CrudRepository');
const Usuario = require('../models/Usuario');

class UsuarioRepository extends CrudRepository {
    constructor() {
        super(Usuario);
    }

    async findById(id) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE id_usuario = ?`;
            const [rows] = await this.pool.query(sql, [id]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findById (Usuario): ${error.message}`);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const sql = `UPDATE ${this.tableName} SET ? WHERE id_usuario = ?`;
            await this.pool.query(sql, [data, id]);
            return this.findById(id);
        } catch (error) {
            console.error(`Error en update (Usuario): ${error.message}`);
            throw error;
        }
    }

    async delete(id) {
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE id_usuario = ?`;
            const [result] = await this.pool.query(sql, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en delete (Usuario): ${error.message}`);
            throw error;
        }
    }

    // Métodos específicos
    async findByRole(role) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${this.tableName} WHERE rol = ?
            `, [role]);
            return rows;
        } catch (error) {
            console.error(`Error en findByRole: ${error.message}`);
            throw error;
        }
    }

    async findByEmail(email) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${this.tableName} WHERE correo = ?
            `, [email]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findByEmail (Usuario): ${error.message}`);
            throw error;
        }
    }
}

module.exports = new UsuarioRepository();
