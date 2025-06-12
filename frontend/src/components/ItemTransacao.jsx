import { useTransacoes } from '../contexts/TransacaoContext';
import { useState } from 'react';

export default function ItemTransacao({ transacao }) {
  const { removerTransacao, editarTransacao } = useTransacoes();
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState(transacao);
  const [erroEdicao, setErroEdicao] = useState('');

  const salvar = async () => {
    if (!form.descricao || !form.valor) {
      setErroEdicao('Descrição e valor não podem ser vazios.');
      return;
    }
    if (+form.valor <= 0) {
      setErroEdicao('O valor da transação deve ser positivo.');
      return;
    }

    const sucesso = await editarTransacao(transacao.id, form);
    
    if (sucesso) {
      alert('Transação salva com sucesso!');
      setEditando(false);
      setErroEdicao('');
    } else {
      setErroEdicao('Ocorreu um erro ao salvar. Tente novamente.');
    }
  };

  const handleRemover = async () => {
    if (window.confirm('Tem certeza que deseja remover esta transação?')) {
      const sucesso = await removerTransacao(transacao.id);
      if (sucesso) {
        alert('Transação removida com sucesso!');
      } else {
        alert('Ocorreu um erro ao remover a transação.');
      }
    }
  };

  return (
    <div className="item-transacao">
      {editando ? (
        <div className="formulario-edit">
          {erroEdicao && <p className="erro-formulario" style={{width: '100%', textAlign: 'center'}}>{erroEdicao}</p>}
          <input value={form.descricao} onChange={e => setForm({...form, descricao: e.target.value})} />
          <input type="number" value={form.valor} onChange={e => setForm({...form, valor: +e.target.value})} />
          <select value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})}>
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
          <button onClick={salvar}>Salvar</button>
        </div>
      ) : (
        <>
          <span>{transacao.descricao}</span>
          <span className={transacao.tipo === 'receita' ? 'valor-receita' : 'valor-despesa'}>
            R$ {transacao.valor.toFixed(2)}
          </span>
          <div className="botoes-acao">
            <button onClick={() => setEditando(true)}>Editar</button>
            <button onClick={handleRemover}>Remover</button>
          </div>
        </>
      )}
    </div>
  );
}