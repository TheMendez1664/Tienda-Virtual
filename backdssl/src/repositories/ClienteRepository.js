const CrudRepository = require('../lib/CrudRepository');
const Cliente = require('../models/Cliente');

class ClienteRepository extends CrudRepository {
    constructor() {
        super(Cliente);
    }

    async findById(id) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE id_cliente = ?`;
            const [rows] = await this.pool.query(sql, [id]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findById (Cliente): ${error.message}`);
            throw error;
        }
    }

    async findByUserId(id_usuario) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE id_usuario = ?`;
            const [rows] = await this.pool.query(sql, [id_usuario]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findByUserId (Cliente): ${error.message}`);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const sql = `UPDATE ${this.tableName} SET ? WHERE id_cliente = ?`;
            await this.pool.query(sql, [data, id]);
            return this.findById(id);
        } catch (error) {
            console.error(`Error en update (Cliente): ${error.message}`);
            throw error;
        }
    }

    async delete(id) {
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE id_cliente = ?`;
            const [result] = await this.pool.query(sql, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en delete (Cliente): ${error.message}`);
            throw error;
        }
    }

    async findByEmail(correo) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${this.tableName} WHERE correo = ?
            `, [correo]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findByEmail (Cliente): ${error.message}`);
            throw error;
        }
    }
}

module.exports = new ClienteRepository();
