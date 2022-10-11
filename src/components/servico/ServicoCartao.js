import style from '../projeto/ProjetoCartao.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function ServicoCartao({id, nome, custo, descricao, handleRemove}) {

  const remove = (e) => {}

  return(
    <div className={style.cartao_projeto}>
      <h4>{nome}</h4>
      <p>
        <span>Custo total:</span> R${custo}
      </p>
      <p>
        {descricao}
      </p>
      <div className={style.acao_cartao_projetos}>
        <button onClick={remove}><BsFillTrashFill />Excluir</button>
      </div>
    </div>
  );
}

export default ServicoCartao;