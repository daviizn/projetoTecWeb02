import { useState } from 'react';
import { useTransacoes } from '../contexts/TransacaoContext';
import { useNavegacao } from '../contexts/NavegacaoContext';

export default function Formulario() {
  const { adicionarTransacao } = useTransacoes();
  const { setPagina } = useNavegacao();
  const [form, setForm] = useState({ descricao: '', valor: '', tipo: 'receita' });
  const [erro, setErro] = useState('');

  const enviar = async () => {
    if (!form.descricao || !form.valor) {
      setErro('Preencha todos os campos!');
      return;
    }
  
    if (+form.valor <= 0) {
      setErro('O valor da transação deve ser positivo.');
      return;
    }

    const sucesso = await adicionarTransacao({ ...form, valor: +form.valor });

    if (sucesso) {
      alert('Transação adicionada com sucesso!');
      setForm({ descricao: '', valor: '', tipo: 'receita' });
      setErro('');
      setPagina('listar');
    } else {
      setErro('Ocorreu um erro ao adicionar a transação. Tente novamente.');
    }
  };

  return (
    <div className="formulario">
      {erro && <p className="erro-formulario">{erro}</p>}
      <input placeholder="Descrição" value={form.descricao} onChange={e => setForm({...form, descricao: e.target.value})} />
      <input type="number" placeholder="Valor" value={form.valor} onChange={e => setForm({...form, valor: e.target.value})} />
      <select value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})}>
        <option value="receita">Receita</option>
        <option value="despesa">Despesa</option>
      </select>
      <button onClick={enviar}>Adicionar</button>
    </div>
  );
}