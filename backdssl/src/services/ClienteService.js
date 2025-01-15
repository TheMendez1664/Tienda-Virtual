const clienteRepository = require('../repositories/ClienteRepository');

class ClienteService {
    getAllClientes() {
        return clienteRepository.findAll();
    }

    getClienteById(id) {
        return clienteRepository.findById(id);
    }

    createCliente(clienteData) {
        return clienteRepository.create(clienteData);
    }

    updateCliente(id, clienteData) {
        return clienteRepository.update(id, clienteData);
    }

    deleteCliente(id) {
        return clienteRepository.delete(id);
    }

    async getClienteByEmail(correo) {
        const cliente = await clienteRepository.findByEmail(correo);
        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }
        return cliente;
    }
}

module.exports = new ClienteService();
