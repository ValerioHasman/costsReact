import ProjetoForm from '../projeto/ProjetoForm'
import style from './NovoProjeto.module.css'

function NovoProjeto () {
    return (
        <div className={style.novoprojeto_container}>
            <h1>Criar um Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm testoBotao='Criar Projeto' />
        </div>
    )
}

export default NovoProjeto