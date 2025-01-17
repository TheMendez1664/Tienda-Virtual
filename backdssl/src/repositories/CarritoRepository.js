const CrudRepository = require('../lib/CrudRepository');
const Carrito = require('../models/Carrito');

class CarritoRepository extends CrudRepository {
    constructor() {
        // Llamamos al constructor padre sin modificar CrudRepository
        super(Carrito);
    }

    // Sobrescribimos findById
    async findById(id) {
        try {
            const sql = `SELECT * FROM ${this.tableName} WHERE id_carrito = ?`;
            const [rows] = await this.pool.query(sql, [id]);
            return rows[0] || null;
        } catch (error) {
            console.error(`Error en findById (Carrito): ${error.message}`);
            throw error;
        }
    }

    // Sobrescribimos update
    async update(id, data) {
        try {
            const sql = `UPDATE ${this.tableName} SET ? WHERE id_carrito = ?`;
            await this.pool.query(sql, [data, id]);
            return this.findById(id);
        } catch (error) {
            console.error(`Error en update (Carrito): ${error.message}`);
            throw error;
        }
    }

    // Sobrescribimos delete
    async delete(id) {
        try {
            const sql = `DELETE FROM ${this.tableName} WHERE id_carrito = ?`;
            const [result] = await this.pool.query(sql, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en delete (Carrito): ${error.message}`);
            throw error;
        }
    }

    // Métodos específicos
    async findByClient(clienteId) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${this.tableName} WHERE cliente_id = ?
            `, [clienteId]);
            return rows;
        } catch (error) {
            console.error(`Error en findByClient: ${error.message}`);
            throw new Error(`No se pudo encontrar el carrito para el cliente con ID: ${clienteId}`);
        }
    }

    async clearCart(clienteId) {
        try {
            const [result] = await this.pool.query(`
                DELETE FROM ${this.tableName} WHERE cliente_id = ?
            `, [clienteId]);
            return {
                success: result.affectedRows > 0,
                message: result.affectedRows > 0 ? 'Carrito eliminado correctamente' : 'No se encontró el carrito'
            };
        } catch (error) {
            console.error(`Error en clearCart: ${error.message}`);
            throw new Error(`Error al eliminar el carrito para el cliente con ID: ${clienteId}`);
        }
    }
}

module.exports = new CarritoRepository();
