const CrudRepository = require('../lib/crudRepository');
const Rol = require('../models/Rol');

class RolRepository extends CrudRepository {
  constructor() {
    super(Rol);
  }

  // Add any user-specific repository methods here
  async findUsersByIdRol(rolId) {
    const [rows] = await this.pool.query(`
      SELECT * FROM rol r inner join usuario u on 
      r.id=u.idRol where r.id = ?`, [rolId]);
    return rows;
  }



}

module.exports = new RolRepository();