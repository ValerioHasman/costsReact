import { useNavigate } from 'react-router-dom'

import ProjetoForm from '../projeto/ProjetoForm'
import style from './NovoProjeto.module.css'

function NovoProjeto() {

  const historico = useNavigate()

  function criarPost(projeto) {
    //inicializar o projeto costs e serviços
    projeto.cost = 0
    projeto.services = []

    fetch('http://localhost:5000/projetos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(projeto),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        // redirecionamento
        historico('/projetos', {state:{mensagem: 'Projeto criado'}})
      })
      .catch((err) => console.log(err))

  }

  return (
    <div className={style.novoprojeto_container}>
      <h1>Criar um Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjetoForm handleSubmit={criarPost} textoBotao='Criar Projeto' />
    </div>
  )
}

export default NovoProjeto