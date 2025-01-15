class Categoria {
    static tableName = 'categorias';

    constructor(id_categoria, nombre_categoria, descripcion) {
        this.id_categoria = id_categoria;
        this.nombre_categoria = nombre_categoria;
        this.descripcion = descripcion;
    }
}

module.exports = Categoria;
