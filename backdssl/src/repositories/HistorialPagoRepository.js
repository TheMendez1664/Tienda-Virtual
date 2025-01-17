const CrudRepository = require('../lib/CrudRepository');
const HistorialPago = require('../models/HistorialPago');

class HistorialPagoRepository extends CrudRepository {
    constructor() {
        super(HistorialPago);
    }

    async findById(id) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE id_pago = ?`;
            const [rows] = await this.pool.query(sql, [id]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findById (HistorialPago): ${error.message}`);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const sql = `UPDATE ${this.tableName} SET ? WHERE id_pago = ?`;
            await this.pool.query(sql, [data, id]);
            return this.findById(id);
        } catch (error) {
            console.error(`Error en update (HistorialPago): ${error.message}`);
            throw error;
        }
    }

    async delete(id) {
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE id_pago = ?`;
            const [result] = await this.pool.query(sql, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en delete (HistorialPago): ${error.message}`);
            throw error;
        }
    }

    // Ejemplo de método específico
    async findByOrder(ordenId) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE orden_id = ?`;
            const [rows] = await this.pool.query(sql, [ordenId]);
            return rows;
        } catch (error) {
            console.error(`Error en findByOrder (HistorialPago): ${error.message}`);
            throw error;
        }
    }
}

module.exports = new HistorialPagoRepository();
