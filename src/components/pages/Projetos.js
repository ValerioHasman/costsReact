import { useLocation } from 'react-router-dom'
import Mensagem from '../layout/Mensagem'
import Conteiner from '../layout/Container'
import LinkButton from '../pages/LinkButton'
import ProjetoCartao from '../projeto/ProjetoCartao'

import style from './Projetos.module.css'
import { useEffect, useState } from 'react'

function Projetos () {
  const [projetos, setProjetos] = useState([])

  const local = useLocation()
  let mensagem = ''

  if(local.state) {
    mensagem = local.state.mensagem
  }

  useEffect(() => {
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
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className={style.projeto_container}>
      <div className={style.titulo_container}>
        <h2>Meus Projetos</h2>
        <LinkButton to="/NovoProjeto" text="Criar projeto"/>
      </div>
      {
        mensagem && <Mensagem msg={mensagem} tipo="sucesso" />
      }
      <Conteiner customClass="start">
        {
          projetos.length > 0 &&
          projetos.map((projetos) => (
            <ProjetoCartao
              id={projetos.id}
              name={projetos.nome}
              orcamento={projetos.orcamento}
              categoria={projetos.categoria.nome}
              key={projetos.id}
            />
          ))
        }
      </Conteiner>
    </div>
  )
}

export default Projetos