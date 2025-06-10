import { useTransacoes } from '../contexts/TransacaoContext';
import ItemTransacao from '../components/ItemTransacao';

export default function Listagem() {
  const { transacoes } = useTransacoes();

  const receita = transacoes.filter(t => t.tipo === 'receita').reduce((acc, t) => acc + t.valor, 0);
  const despesa = transacoes.filter(t => t.tipo === 'despesa').reduce((acc, t) => acc + t.valor, 0);

  return (
    <div>
      <div className="resumo">
        <div className="resumo-item">
          <h3>Receita</h3>
          <p className="receita">R$ {receita.toFixed(2)}</p>
        </div>
        <div className="resumo-item">
          <h3>Despesa</h3>
          <p className="despesa">R$ {despesa.toFixed(2)}</p>
        </div>
        <div className="resumo-item">
          <h3>Saldo</h3>
          <p className="saldo">R$ {(receita - despesa).toFixed(2)}</p>
        </div>
      </div>
      {transacoes.map(t => (
        <ItemTransacao key={t.id} transacao={t} />
      ))}
    </div>
  );
}