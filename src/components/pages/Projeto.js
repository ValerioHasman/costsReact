import style from './Projeto.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Carregamento from '../layout/Carregamento';
import Container from '../layout/Container';

function Projeto () {

  const { id } = useParams();
  const [projeto, SetProjeto] = useState([])
  const [mostrarFormularioProjeto, SetMostrarFormularioProjeto] = useState(false)

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

  function alternarFormularioProjeto(){
    SetMostrarFormularioProjeto(!mostrarFormularioProjeto);
  }

  return (<>
  {projeto.nome ? (
  <div className={style.projeto_detalhe}>
    <Container customClass="column">
      <div className={style.container_detalhe}>
        <h1>Projetos: {projeto.nome}</h1>
        <button
          onClick={alternarFormularioProjeto}
          type='button'
          className={style.link}>
            {mostrarFormularioProjeto ? 'Editar Projeto' : 'Fechar Projeto'}
        </button>
        {!mostrarFormularioProjeto ? (
          <div className={style.projeto_info}>
            <p><span>Categoria:</span> {projeto.categoria.nome}</p>
            <p><span>Total de Orçamento:</span> {projeto.orcamento}</p>
            <p><span>Total utilizado:</span> {projeto.cost}</p>
          </div>
        ) : (
          <div className={style.projeto_info}>
            <p>Detalhes Do Projeto</p>
          </div>
        )}
      </div>
    </Container>
  </div>) : (<Carregamento />)}
  </>)
}

export default Projeto