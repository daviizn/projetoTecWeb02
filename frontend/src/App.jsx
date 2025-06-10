import './App.css';
import Cabecalho from './components/Cabecalho';
import Menu from './components/Menu';
import Listagem from './pages/Listagem';
import Formulario from './pages/Formulario';
import { NavegacaoProvider, useNavegacao } from './contexts/NavegacaoContext';
import { TransacaoProvider } from './contexts/TransacaoContext';

function Conteudo() {
  const { pagina } = useNavegacao();
  return pagina === 'listar' ? <Listagem /> : <Formulario />;
}

export default function App() {
  return (
    <NavegacaoProvider>
      <TransacaoProvider>
        <div className="app">
          <Cabecalho />
          <Menu />
          <Conteudo />
        </div>
      </TransacaoProvider>
    </NavegacaoProvider>
  );
}
