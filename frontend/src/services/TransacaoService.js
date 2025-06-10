import axios from 'axios';

const API_URL = 'http://localhost:3001/transacoes';

export const buscarTodos = () => axios.get(API_URL);
export const adicionar = (transacao) => axios.post(API_URL, transacao);
export const remover = (id) => axios.delete(`${API_URL}/${id}`);
export const atualizar = (id, transacao) => axios.put(`${API_URL}/${id}`, transacao);
