import { useNavegacao } from '../contexts/NavegacaoContext';

export default function Menu() {
  const { setPagina } = useNavegacao();

  return (
    <div className="menu">
      <button onClick={() => setPagina('listar')}>Listagem</button>
      <button onClick={() => setPagina('novo')}>Nova Transação</button>
    </div>
  );
}
