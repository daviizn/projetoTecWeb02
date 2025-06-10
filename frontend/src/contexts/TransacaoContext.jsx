import { createContext, useContext, useEffect, useState } from 'react';
import { buscarTodos, adicionar, remover, atualizar } from '../services/TransacaoService';

const TransacaoContext = createContext();

export const TransacaoProvider = ({ children }) => {
  const [transacoes, setTransacoes] = useState([]);

  const carregar = async () => {
    const { data } = await buscarTodos();
    setTransacoes(data);
  };

  const adicionarTransacao = async (transacao) => {
    try {
      await adicionar(transacao); //
      carregar();
      return true; // Sucesso
    } catch (error) {
      console.error("Erro ao adicionar transação:", error);
      return false; // Falha
    }
  };

  const removerTransacao = async (id) => {
    try {
      await remover(id); //
      carregar();
      return true; // Sucesso
    } catch (error) {
      console.error("Erro ao remover transação:", error);
      return false; // Falha
    }
  };

  const editarTransacao = async (id, novaTransacao) => {
    try {
      await atualizar(id, novaTransacao); //
      carregar();
      return true; // Sucesso
    } catch (error) {
      console.error("Erro ao editar transação:", error);
      return false; // Falha
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <TransacaoContext.Provider value={{
      transacoes,
      adicionarTransacao,
      removerTransacao,
      editarTransacao
    }}>
      {children}
    </TransacaoContext.Provider>
  );
};

export const useTransacoes = () => useContext(TransacaoContext);