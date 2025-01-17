const CrudRepository = require('../lib/CrudRepository');
const Producto = require('../models/Producto');

class ProductoRepository extends CrudRepository {
    constructor() {
        super(Producto);
    }

    // Métodos específicos de Producto
    async findByCategory(categoria_id) {
        try {
            const [rows] = await this.pool.query(`
                SELECT * FROM ${Producto.tableName} WHERE categoria_id = ?
            `, [categoria_id]);
            return rows;
        } catch (error) {
            console.error(`Error en findByCategory para Producto: ${error.message}`);
            throw error;
        }
    }

    async updateStock(productId, newStock) {
        try {
            const [result] = await this.pool.query(`
                UPDATE ${Producto.tableName} SET stock = ? WHERE id_producto = ?
            `, [newStock, productId]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en updateStock para Producto: ${error.message}`);
            throw error;
        }
    }
}

module.exports = new ProductoRepository();
