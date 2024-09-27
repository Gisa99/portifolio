import styles from './Header.module.scss'

const Header = () =>{
    return(
        <div className={styles.container}>
            <div>
                <ul>
                    <li><a href="https://www.linkedin.com/in/giselefranca-devfrontend/" target='_blank'>Linkedin</a></li>
                    <li> / </li>
                    <li><a href="https://github.com/Gisa99" target='_blank'>GitHub</a></li>
                    <li> / </li>
                    <li><a href="https://www.instagram.com/watashi_gi/" target='_blank'>Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header 