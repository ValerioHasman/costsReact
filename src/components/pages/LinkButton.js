import { Link } from 'react-router-dom'
import style from './LinkButton.module.css'

function LinkButton({to, text}){
    return (
        <Link to={to} className={style.link}>
            {text}
        </Link>
    )
}

export default LinkButton