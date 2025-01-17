const CrudRepository = require('../lib/CrudRepository');
const DetalleOrden = require('../models/DetalleOrden');

class DetalleOrdenRepository extends CrudRepository {
    constructor() {
        super(DetalleOrden);
    }

    async findById(id) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE id_detalle = ?`;
            const [rows] = await this.pool.query(sql, [id]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findById (DetalleOrden): ${error.message}`);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const sql = `UPDATE ${this.tableName} SET ? WHERE id_detalle = ?`;
            await this.pool.query(sql, [data, id]);
            return this.findById(id);
        } catch (error) {
            console.error(`Error en update (DetalleOrden): ${error.message}`);
            throw error;
        }
    }

    async delete(id) {
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE id_detalle = ?`;
            const [result] = await this.pool.query(sql, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en delete (DetalleOrden): ${error.message}`);
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
            console.error(`Error en findByOrder (DetalleOrden): ${error.message}`);
            throw error;
        }
    }
}

module.exports = new DetalleOrdenRepository();
