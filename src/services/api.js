/**
 * Arquivo de serviços para comunicação com a API
 */

/**
 * Busca um cliente pelo ID
 * @param {string} id - ID do cliente a ser buscado
 * @returns {Promise<Object>} - Dados do cliente
 * @throws {Error} - Erro caso o cliente não seja encontrado
 */
export async function getClientById(id) {
  try {
    const response = await fetch(`http://localhost:3001/clients`);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    
    const clients = await response.json();
    const client = clients.find(client => client.id === id);
    
    if (!client) {
      throw new Error("ID do cliente não encontrado!");
    }
    
    return client;
  } catch (error) {
    throw error;
  }
} 