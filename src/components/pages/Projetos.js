import { useLocation } from 'react-router-dom'
import Mensagem from '../layout/Mensagem'
import Conteiner from '../layout/Container'
import Carregamento from '../layout/Carregamento'
import LinkButton from '../pages/LinkButton'
import ProjetoCartao from '../projeto/ProjetoCartao'

import style from './Projetos.module.css'
import { useEffect, useState } from 'react'

function Projetos () {
  const [projetos, setProjetos] = useState([])
  const [removeCarregar, setRemoveCarregar] = useState(false)
  const [projetoMensagem, setProjetoMensagem] = useState('')

  const local = useLocation()
  let mensagem = ''

  if(local.state) {
    mensagem = local.state.mensagem
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projetos',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(resp => resp.json())
      .then(data => {
        console.log(data)
        setProjetos(data)
        setRemoveCarregar(true)
      })
      .catch(err => console.log(err))
    }, 1000);
  }, [])

  function removeProjeto(id){
    fetch(
      `http://localhost:5000/projetos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(resp => resp.json())
    .then(data => {
      setProjetos(projetos.filter((projeto) => projeto.id !== id))
      setProjetoMensagem('Projeto removido com sucesso!')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={style.projeto_container}>
      <div className={style.titulo_container}>
        <h2>Meus Projetos</h2>
        <LinkButton to="/NovoProjeto" text="Criar projeto"/>
      </div>
      {
        mensagem && <Mensagem msg={mensagem} tipo="sucesso" />
      }
      {
        projetoMensagem && <Mensagem msg={projetoMensagem} tipo="sucesso" />
      }
      <Conteiner customClass="start">
        {
          !removeCarregar && <Carregamento />
        }
        {
          projetos.length > 0 &&
          projetos.map((projetos) => (
            <ProjetoCartao
              id={projetos.id}
              name={projetos.nome}
              orcamento={projetos.orcamento}
              categoria={projetos.categoria.nome}
              key={projetos.id}
              handleRemove={removeProjeto}
            />
          ))
        }

      </Conteiner>
    </div>
  )
}

export default Projetos