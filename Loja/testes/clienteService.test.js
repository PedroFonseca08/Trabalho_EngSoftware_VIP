import clienteService from "../services/cliente.service";

test('Verificando busca de cliente', async() => {
    let consulta = await clienteService.getCliente('admin')
    consulta = consulta[0]
    expect(consulta.nome).toBe('admin')
    expect(consulta.senha).toBe('admin')
})

test('Testando remoção de cliente que não foi cadastrado', async() => {
    let consulta = await clienteService.deleteCliente('Pedro10')
    consulta = consulta[0]
    expect(consulta.nome).toBe(undefined)
})

test('Testando remoção de cliente que já foi cadastrado', async() => {
    let consulta = await clienteService.deleteCliente('sada')
    consulta = consulta[0]
    expect(consulta.nome).toBe('Pedro900')
})