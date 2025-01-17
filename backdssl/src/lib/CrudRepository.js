const mysql = require('mysql2/promise');

// Configuración del pool de conexión
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

class CrudRepository {
    constructor(model) {
        this.model = model;
        this.tableName = model.tableName;
        this.pool = pool;
    }

    // Obtener todos los registros
    async findAll() {
        try {
            const [rows] = await this.pool.query(`SELECT * FROM ${this.tableName}`);
            return rows;
        } catch (error) {
            console.error(`Error en findAll: ${error.message}`);
            throw error;
        }
    }

    // Obtener un registro por ID
    async findById(id) {
        try {
            const [rows] = await this.pool.query(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
            return rows[0];
        } catch (error) {
            console.error(`Error en findById: ${error.message}`);
            throw error;
        }
    }

    // Crear un nuevo registro
    async create(data) {
        try {
            const [result] = await this.pool.query(`INSERT INTO ${this.tableName} SET ?`, data);
            return { id: result.insertId, ...data };
        } catch (error) {
            console.error(`Error en create: ${error.message}`);
            throw error;
        }
    }

    // Actualizar un registro existente
    async update(id, data) {
        try {
            await this.pool.query(`UPDATE ${this.tableName} SET ? WHERE id = ?`, [data, id]);
            return this.findById(id);
        } catch (error) {
            console.error(`Error en update: ${error.message}`);
            throw error;
        }
    }

    // Eliminar un registro
    async delete(id) {
        try {
            const [result] = await this.pool.query(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error en delete: ${error.message}`);
            throw error;
        }
    }
}

module.exports = CrudRepository;
