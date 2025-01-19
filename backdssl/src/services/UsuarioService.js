const UsuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
    async getAllUsuarios() {
        return await UsuarioRepository.findAll();
    }

    async getUsuarioById(id) {
        const usuario = await UsuarioRepository.findById(id);
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        return usuario;
    }

    async createUsuario(usuarioData) {
        return await UsuarioRepository.create(usuarioData);
    }

    async createUsuarioConCliente(usuarioData, clienteData) {
        return await UsuarioRepository.createUsuarioConCliente(usuarioData, clienteData);
    }

    async updateUsuario(id, usuarioData) {
        return await UsuarioRepository.update(id, usuarioData);
    }

    async deleteUsuario(id) {
        return await UsuarioRepository.delete(id);
    }

    async findUsuarioByEmail(email) {
        return await UsuarioRepository.findByEmail(email);
    }
}

module.exports = new UsuarioService();
