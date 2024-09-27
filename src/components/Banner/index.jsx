import styles from './Banner.module.scss'
import perfil from '../../../public/images/perfil1.jpg'


const Banner = () => {
    return(
        <div className={styles.container}>

            <div>
                <div className={styles.perfil}>
                    <img src={perfil} alt="Imagem de perfil Gisele" />
                    <p className={styles.texto}>Olá, eu sou a Gisele 👋</p>
                </div>
                <h1>Estudante de Engenharia de Software</h1>
                <p>Estou nessa jornada incrível com o foco em tecnologias front-end, e claro, acompanhada de um bom café ☕</p>
            </div>



        </div>
    )
}

export default Banner