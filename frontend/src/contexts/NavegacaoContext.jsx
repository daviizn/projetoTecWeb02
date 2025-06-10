import { createContext, useState, useContext } from 'react';

const NavegacaoContext = createContext();

export const NavegacaoProvider = ({ children }) => {
  const [pagina, setPagina] = useState('listar');

  return (
    <NavegacaoContext.Provider value={{ pagina, setPagina }}>
      {children}
    </NavegacaoContext.Provider>
  );
};

export const useNavegacao = () => useContext(NavegacaoContext);
