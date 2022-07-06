import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './Projeto.module.css'

function ProjetoForm ({testoBotao}) {
    return (
        <form className={style.form}>
            <Input
                type="text"
                text="Nome Do Projeto"
                name="nome"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="number"
                text="Orçamento toral"
                name="orcamento"
                placeholder="Insira o Orçamento do projeto"
            />
            <Select
                text="Selecione a categoria"
                name="categoria_id"
            />
            <SubmitButton text={testoBotao} />
        </form>
    )
}

export default ProjetoForm