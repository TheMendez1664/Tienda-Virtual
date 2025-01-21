const usuarioRepository = require('../repositories/UsuarioRepository');
const clienteRepository = require('../repositories/ClienteRepository');

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

    async createUsuarioConCliente(usuarioData, clienteData) {
        try {
            return await usuarioRepository.createUsuarioConCliente(usuarioData, clienteData);
        } catch (error) {
            console.error(`Error en createUsuarioConCliente (UsuarioService): ${error.message}`);
            throw new Error('No se pudo crear el usuario con cliente asociado');
        }
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

    async getUsuarioByEmail(email) {
        const usuario = await usuarioRepository.findByEmail(email);
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        return usuario;
    }

    async getUsuariosByRole(role) {
        return await usuarioRepository.findByRole(role);
    }
}

module.exports = new UsuarioService();
