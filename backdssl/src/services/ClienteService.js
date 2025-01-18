const clienteRepository = require('../repositories/ClienteRepository');

class ClienteService {
    async getAllClientes() {
        return await clienteRepository.findAll();
    }

    async getClienteById(id) {
        const cliente = await clienteRepository.findById(id);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        return cliente;
    }

    async createCliente(clienteData) {
        return await clienteRepository.create(clienteData);
    }

    async updateCliente(id, clienteData) {
        const clienteExistente = await clienteRepository.findById(id);
        if (!clienteExistente) {
            throw new Error('Cliente no encontrado');
        }
        return await clienteRepository.update(id, clienteData);
    }

    async deleteCliente(id) {
        const clienteExistente = await clienteRepository.findById(id);
        if (!clienteExistente) {
            throw new Error('Cliente no encontrado');
        }
        return await clienteRepository.delete(id);
    }

    async getClienteByEmail(email) {
        return await clienteRepository.findByEmail(email);
    }
}

module.exports = new ClienteService();
