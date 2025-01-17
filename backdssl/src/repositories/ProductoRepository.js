const CrudRepository = require('../lib/CrudRepository');
const Producto = require('../models/Producto');

class ProductoRepository extends CrudRepository {
    constructor() {
        super(Producto);
    }

    async findById(id) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE id_producto = ?`;
            const [rows] = await this.pool.query(sql, [id]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findById (Producto): ${error.message}`);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const sql = `UPDATE ${this.tableName} SET ? WHERE id_producto = ?`;
            await this.pool.query(sql, [data, id]);
            return this.findById(id);
        } catch (error) {
            console.error(`Error en update (Producto): ${error.message}`);
            throw error;
        }
    }

    async delete(id) {
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE id_producto = ?`;
            const [result] = await this.pool.query(sql, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en delete (Producto): ${error.message}`);
            throw error;
        }
    }

    // Ejemplo de método específico
    async findByCategory(categoria_id) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${this.tableName} WHERE categoria_id = ?
            `, [categoria_id]);
            return rows;
        } catch (error) {
            console.error(`Error en findByCategory (Producto): ${error.message}`);
            throw error;
        }
    }
}

module.exports = new ProductoRepository();
