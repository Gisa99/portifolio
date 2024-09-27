import styles from "./Tecnologias.module.scss"

import { FaHtml5, FaCss3, FaJs, FaReact, FaSass } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const icons= [
    { id: 1, name: 'HTML5', icon: <FaHtml5 color="#878787e5" size={50} /> },
    { id: 2, name: 'CSS3', icon: <FaCss3 color="#878787e5" size={50} /> },
    { id: 3, name: 'JavaScript', icon: <FaJs color="#878787e5" size={50} /> },
    { id: 4, name: 'React', icon: <FaReact color="#878787e5" size={50} /> },
    { id: 5, name: 'Next.js', icon: <SiNextdotjs color="#878787e5" size={50} /> },
    { id: 6, name: 'Tailwind CSS', icon: <SiTailwindcss color="#878787e5" size={50} /> },
    { id: 7, name: 'Sass', icon: <FaSass color="#878787e5" size={50} /> },
];



const Tecnologias = () =>{
    return(
        <>
            <div className={styles.title}> 
                <h2>Tecnologias</h2>
            </div>
            <section className={styles.container}>
            
            {icons.map((tech) => (
                <div key={tech.id} className={styles.card}>
                    {tech.icon}
                    <h3>{tech.name}</h3>
                </div>
            ))}



            </section>
        </>
        
    )
}

export default Tecnologias