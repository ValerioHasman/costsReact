import {useState} from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import style from '../projeto/ProjetoForm.module.css';

function ServicoForm ({handleSubmit, textoBotao, projetoDado}) {

  const [servico, setServico] = useState({});

  function handleChange(e) {
    setServico({...servico, [e.target.name]: e.target.value})
  }

  function submit(e) {
    e.preventDefault();
    projetoDado.services.push(servico);
    handleSubmit(projetoDado);
  }

  return <form onSubmit={submit} className={style.form}>
    <Input
      type='text'
      text='Nome do Serviço'
      name='nome'
      placeholder='Insira o nome do serviço'
      handleOnChange={handleChange}
    />
    <Input
      type='number'
      text='Custo do serviço'
      name='custo'
      placeholder='Insira o valor total'
      handleOnChange={handleChange}
    /> 
    <Input
      type='text'
      text='Descrição do serviço'
      name='descricao'
      placeholder='Descreva o serviço'
      handleOnChange={handleChange}
    />
    <SubmitButton text={textoBotao} />
  </form>
}

export default ServicoForm;