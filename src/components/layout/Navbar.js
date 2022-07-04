import { Link } from "react-router-dom"
import Container from './Container';
import style from './Navbar.module.css'
import logo from '../../img/logoreact.svg'

function Navbar() {
  return (
    <nav className={style.navbar}>
      <Container>
        <Link to="/">
          <img className={style.logo} src={logo} />
        </Link>
        <ul className={style.list}>
        <li className={style.item}>
            <Link to='/' >Home</Link>
          </li>
          <li className={style.item}>
            <Link to='/projetos' >Projetos</Link>
          </li>
          <li className={style.item}>
            <Link to='/contato' >Contato</Link>
          </li>
          <li className={style.item}>
            <Link to='/sobre' >Sobre</Link>
          </li>
          <li className={style.item}>
            <Link to='/novoprojeto' >Novo Projeto</Link>
          </li>
        </ul>
      </Container>
    </nav>

  )
}

export default Navbar