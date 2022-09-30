import { useEffect, useState } from 'react'
import styles from './Mensagem.module.css'

function Mensagem({ tipo, msg }) {
  const [visivel, setVisivel] = useState(true)

  useEffect(() => {
    if(!msg){
      setVisivel(true)
      return
    }

    setVisivel(true)

    const timer = setTimeout(() => {
      setVisivel(false)
    }, 6000)

    return () => clearTimeout(timer)

  }, [msg])
  // sucesso - erro
  return (
    <>{
      visivel && (
        <div className={`${styles.mensagem} ${styles[tipo]}`}>
          <p>{msg}</p>
        </div>
      )
    }</>
  )
}

export default Mensagem