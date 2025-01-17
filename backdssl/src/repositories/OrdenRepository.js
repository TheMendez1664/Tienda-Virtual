const CrudRepository = require('../lib/CrudRepository');
const Orden = require('../models/Orden');

class OrdenRepository extends CrudRepository {
    constructor() {
        super(Orden);
    }

    async findById(id) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE id_orden = ?`;
            const [rows] = await this.pool.query(sql, [id]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findById (Orden): ${error.message}`);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const sql = `UPDATE ${this.tableName} SET ? WHERE id_orden = ?`;
            await this.pool.query(sql, [data, id]);
            return this.findById(id);
        } catch (error) {
            console.error(`Error en update (Orden): ${error.message}`);
            throw error;
        }
    }

    async delete(id) {
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE id_orden = ?`;
            const [result] = await this.pool.query(sql, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en delete (Orden): ${error.message}`);
            throw error;
        }
    }

    // Ejemplo de método específico
    async findByClient(clienteId) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${this.tableName} WHERE cliente_id = ?
            `, [clienteId]);
            return rows;
        } catch (error) {
            console.error(`Error en findByClient (Orden): ${error.message}`);
            throw error;
        }
    }
}

module.exports = new OrdenRepository();
