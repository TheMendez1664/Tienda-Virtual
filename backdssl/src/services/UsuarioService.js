const usuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
    async getAllUsuarios() {
        return await usuarioRepository.findAll();
    }

    async getUsuarioById(id) {
        const usuario = await usuarioRepository.findById(id);
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        return usuario;
    }

    async createUsuario(usuarioData) {
        return await usuarioRepository.create(usuarioData);
    }

    async updateUsuario(id, usuarioData) {
        const usuarioExistente = await usuarioRepository.findById(id);
        if (!usuarioExistente) {
            throw new Error('Usuario no encontrado');
        }
        return await usuarioRepository.update(id, usuarioData);
    }

    async deleteUsuario(id) {
        const usuarioExistente = await usuarioRepository.findById(id);
        if (!usuarioExistente) {
            throw new Error('Usuario no encontrado');
        }
        return await usuarioRepository.delete(id);
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
