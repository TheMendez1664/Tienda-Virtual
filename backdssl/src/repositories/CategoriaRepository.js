const CrudRepository = require('../lib/CrudRepository');
const Categoria = require('../models/Categoria');

class CategoriaRepository extends CrudRepository {
    constructor() {
        super(Categoria);
    }

    // Métodos específicos de Categoría
    async findByName(nombre_categoria) {
        const [rows] = await this.pool.query(`
            SELECT * FROM ${Categoria.tableName} WHERE nombre_categoria = ?
        `, [nombre_categoria]);
        return rows[0] || null;
    }
}

module.exports = new CategoriaRepository();
