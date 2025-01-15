const CrudRepository = require('../lib/CrudRepository');
const Producto = require('../models/Producto');

class ProductoRepository extends CrudRepository {
    constructor() {
        super(Producto);
    }

    // Métodos específicos de Producto
    async findByCategory(categoria_id) {
        const [rows] = await this.pool.query(`
            SELECT * FROM ${Producto.tableName} WHERE categoria_id = ?
        `, [categoria_id]);
        return rows;
    }

    async updateStock(productId, newStock) {
        const [result] = await this.pool.query(`
            UPDATE ${Producto.tableName} SET stock = ? WHERE id_producto = ?
        `, [newStock, productId]);
        return result.affectedRows > 0;
    }
}

module.exports = new ProductoRepository();
