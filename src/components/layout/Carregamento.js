import spinner from '../../img/spinner.svg'

import style from './Carregamento.module.css'

function Carregamento (props) {
    return (
      <div className={style.loader_container}>
        <img className={style.loader} src={spinner} alt='Carregando&#8230;' />
      </div>
    )
}

export default Carregamento