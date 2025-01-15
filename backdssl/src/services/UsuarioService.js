const usuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
    getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    getUsuarioById(id) {
        return usuarioRepository.findById(id);
    }

    createUsuario(usuarioData) {
        return usuarioRepository.create(usuarioData);
    }

    updateUsuario(id, usuarioData) {
        return usuarioRepository.update(id, usuarioData);
    }

    deleteUsuario(id) {
        return usuarioRepository.delete(id);
    }

    async getUsuariosByRole(rol) {
        const usuarios = await usuarioRepository.findByRole(rol);
        if (!usuarios.length) {
            throw new Error('No se encontraron usuarios con este rol');
        }
        return usuarios;
    }
}

module.exports = new UsuarioService();
