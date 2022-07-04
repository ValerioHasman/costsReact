import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import style from './Footer.module.css'

function Footer () {
    return (
        <footer className={style.footer}>
            <ul className={style.list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedinIn />
                </li>
                <li>
                    <FaWhatsapp />
                </li>
            </ul>
            <p className={style.costs}><span>Costs &copy; 2022</span></p>
        </footer>
    )
}

export default Footer