import {Link} from 'react-router-dom'
import style from './ProjetoCartao.module.css'
import { BsPenFill, BsFillTrashFill} from 'react-icons/bs'

function ProjetoCartao ({id, name, orcamento, categoria, handleRemove}) {
  return (
    <div className={style.cartao_projeto}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span> R${orcamento}
      </p>
      <p className={style.texto_categoria}>
        <span className={`${style[categoria.toLowerCase()]}`}></span> {categoria}
      </p>
      <div className={style.acao_cartao_projetos}>
        <Link to="/">
          <BsPenFill /> Editar
        </Link>
        <Link to="/">
          <BsFillTrashFill /> Excluir
        </Link>
      </div>
    </div>
  )
}

export default ProjetoCartao