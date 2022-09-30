import style from './Projeto.module.css'
import {parse, v4 as uuidv4} from 'uuid'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Carregamento from '../layout/Carregamento';
import Container from '../layout/Container';
import ProjetoForm from '../projeto/ProjetoForm';
import ServicoForm from '../servico/ServicoForm';
import Mensagem from '../layout/Mensagem';

function Projeto () {

  const { id } = useParams();
  const [projeto, SetProjeto] = useState([]);
  const [mostrarFormularioProjeto, SetMostrarFormularioProjeto] = useState(false);
  const [mostrarFormularioServico, SetMostrarFormularioServico] = useState(false);
  const [mensagem, setMensagem] = useState();
  const [tipo, setTipo] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(
      `http://localhost:5000/projetos/${id}`,
      {
        method: 'GET',
        headers: 
        {
          'Content-Type': 'application/json',
        },
      }).then(resp => resp.json())
      .then((data) => {
        SetProjeto(data)
      })
    }, 1000);
    
  }, [id])

  function criarServico(projeto) {
    setMensagem();
    const lastService = projeto.services[projeto.services.length - 1];

    lastService.id = uuidv4();

    const lastServceCost = lastService.custo;

    const newCost = parseFloat(projeto.cost) + parseFloat(lastServceCost);


    if(newCost > parseFloat(projeto.orcamento)){
      setMensagem('Orçamento ultrapassado, verifique o valor do serviço');
      setTipo('erro');
      projeto.services.pop();
      return false;
    }
    
    projeto.cost = newCost;

    fetch(`http://localhost:5000/projetos/${projeto.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projeto)
    }).then(
      (resp) => resp.json()
    ).then(
      (data) => {
        //exibir
        console.log(data);
      }
    ).catch(err => console.log(err))
  }

  function alternarFormularioProjeto(){
    SetMostrarFormularioProjeto(!mostrarFormularioProjeto);
  }
  function alternarFormularioServico(){
    SetMostrarFormularioServico(!mostrarFormularioServico);
  }

  function editarPost(projeto){
    setMensagem();
    if(projeto.orcamento < projeto.cost){
      setMensagem('O orçamento não pode ser menor que o custo do projeto');
      setTipo('erro');
      return false;
    }

    fetch(`http://localhost:5000/projetos/${projeto.id}`, 
    {
      method: 'PUT',
      headers: 
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projeto),
    })
    .then((resp) => resp.json())
    .then((data) => {
      SetProjeto(data);
      SetMostrarFormularioProjeto(false);
      setMensagem('Projeto Atualizado!');
      setTipo('sucesso');
    })
    .catch(err => console.log(err))
  }

  return (<>
  {projeto.nome ? (
  <div className={style.projeto_detalhe}>
    <Container customClass="column">
      {mensagem && <Mensagem tipo={tipo} msg={mensagem}/>}
      <div className={style.container_detalhe}>
        <h1>Projetos: {projeto.nome}</h1>
        <button
          onClick={alternarFormularioProjeto}
          type='button'
          className={style.link}>
            {mostrarFormularioProjeto ? 'Fechar Projeto' : 'Editar Projeto'}
        </button>
        {!mostrarFormularioProjeto ? (
          <div className={style.projeto_info}>
            <p><span>Categoria:</span> {projeto.categoria.nome}</p>
            <p><span>Total de Orçamento:</span> {projeto.orcamento}</p>
            <p><span>Total utilizado:</span> {projeto.cost}</p>
          </div>
        ) : (
          <div className={style.projeto_info}>
            <ProjetoForm
              handleSubmit={editarPost}
              textoBotao="Finalizar Edição"
              projectData={projeto}
            />
          </div>
        )}
      </div>
      <div className={style.container_form_servico}>
          <h2>Adicione um serviço:</h2>
          <button className={style.link} onClick={alternarFormularioServico}>
            {!mostrarFormularioServico ? 'Adicionar Serviço' : 'Fechar'}
          </button>
          <div className={style.projeto_info}>
            {mostrarFormularioServico && <ServicoForm
              handleSubmit={criarServico}
              textoBotao="Adicionar Serviço"
              projetoDado={projeto}
             />}
          </div>
      </div>
      <h2>Serviços</h2>
      <Container customClass='start'>
        <p>Itens de Serviços</p>
      </Container>
    </Container>
  </div>) : (<Carregamento />)}
  </>)
}

export default Projeto;