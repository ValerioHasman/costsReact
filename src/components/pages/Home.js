import style from './Home.module.css'
import LinkButton from './LinkButton'

function Home () {
    return (
        <section className={style.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece agora mesmo os seus projetos!</p>
            <LinkButton to='/novoprojeto' text='Criar Projetos' />
            <img src='https://cdn.pixabay.com/photo/2016/05/27/08/11/piggy-bank-1419251_960_720.png'/>
        </section>
    )
}
export default Home