import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './ProjetoForm.module.css'

function ProjetoForm({ textoBotao, handleSubmit, projectData }) {
  const [categoria, setCategoria] = useState([])
  const [projeto, setProjeto] = useState(projectData || {})

  useEffect(() => {
    fetch("http://localhost:5000/categorias", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategoria(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(projeto)
  }

  function handleChange(e) {
    setProjeto({ ...projeto, [e.target.name]: e.target.value })
  }

  function handleCategoria(e) {
    setProjeto({
      ...projeto,
      categoria: {
        id: e.target.value,
        nome: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={style.form}>
      <Input
        type="text"
        text="Nome Do Projeto"
        name="nome"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={projeto.nome ? projeto.nome : '' }
      />
      <Input
        type="number"
        text="Orçamento toral"
        name="orcamento"
        placeholder="Insira o Orçamento do projeto"
        handleOnChange={handleChange}
        value={projeto.orcamento ? projeto.orcamento : '' }
      />
      <Select
        text="Selecione a categoria"
        name="categoria_id"
        options={categoria}
        handleOnChange={handleCategoria}
        value={projeto.categoria ? projeto.categoria.id : ''}
      />
      <SubmitButton text={textoBotao} />
    </form>
  )
}

export default ProjetoForm