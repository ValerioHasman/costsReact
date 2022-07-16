import { useLocation } from 'react-router-dom'
import Mensagem from '../layout/Mensagem'

function Projetos () {

    const local = useLocation()
    let mensagem = ''

    if(local.state) {
        mensagem = local.state.mensagem
    }

    return (
        <div>
            <h2>Meus Projetos</h2>
            {
                mensagem && <Mensagem msg={mensagem} tipo="sucesso" />
            }
            
        </div>
    )
}

export default Projetos