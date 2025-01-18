const CrudRepository = require('../lib/CrudRepository');
const Categoria = require('../models/Categoria');

class CategoriaRepository extends CrudRepository {
    constructor() {
        super(Categoria);
    }

    async findById(id) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE id_categoria = ?`;
            const [rows] = await this.pool.query(sql, [id]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findById (Categoria): ${error.message}`);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const sql = `UPDATE ${this.tableName} SET ? WHERE id_categoria = ?`;
            await this.pool.query(sql, [data, id]);
            return this.findById(id);
        } catch (error) {
            console.error(`Error en update (Categoria): ${error.message}`);
            throw error;
        }
    }

    async delete(id) {
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE id_categoria = ?`;
            const [result] = await this.pool.query(sql, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en delete (Categoria): ${error.message}`);
            throw error;
        }
    }

    async findByName(nombre_categoria) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${this.tableName} WHERE nombre_categoria = ?
            `, [nombre_categoria]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findByName (Categoria): ${error.message}`);
            throw error;
        }
    }
}

module.exports = new CategoriaRepository();
