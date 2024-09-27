import styles from "./Footer.module.scss"

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const icons= [
    { id: 1, name: 'Instagram', icon: <FaInstagram color="#878787e5" size={32} />, link: "https://www.instagram.com/watashi_gi/" },
    { id: 2, name: 'Linkedin', icon: <FaLinkedin color="#878787e5" size={32} />, link: "https://www.linkedin.com/in/giselefranca-devfrontend/" },
    { id: 3, name: 'Github', icon: <FaGithub color="#878787e5" size={32} />, link: "https://github.com/Gisa99" }
]


const Footer = () => {
    const ano = new Date().getFullYear();

    return(
        <footer>
            <section className={styles.contatos}> 
                {icons.map(icone =>(
                    <div key={icone.id}>
                        <a href={icone.link}>{icone.icon}</a>

                    </div>
                ))}

            </section>
            <p>{ano} - Gisele França &copy;</p>

        </footer>
    
        
    )
}

export default Footer