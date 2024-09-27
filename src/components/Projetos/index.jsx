
import aluraGeek from "../../../public/images/aluraGeek.png";
import biblioteca from "../../../public/images/biblioteca.png";
import laMode from "../../../public/images/laMode.png";
import organograma from "../../../public/images/organograma.png";
import styles from "./Projetos.module.scss";

const projetos = [
  {
    id: 1,
    src: aluraGeek,
    nome: "AluraGeek",
    descricao: "E-commerce Geek utilizando javascript e trabalhando o CRUD",
    link: "https://github.com/Gisa99/Alura__Geek-"
  },
  {
    id: 2,
    src: biblioteca,
    nome: "CoffeBook",
    descricao: "Biblioteca (Projeto estático apenas para trabalhar a responsividade)",
    link: "https://github.com/Gisa99/biblioteca"
  },
  {
    id: 3,
    src: laMode,
    nome: "LaMode App",
    descricao: "Galeria de fotos (trabalhando com Hooks React",
    link: "https://github.com/Gisa99/laMode"
  },
  {
    id: 4,
    src: organograma,
    nome: "Organograma",
    descricao: "Organizador de séries e animes (trabalhando com React)",
    link: "https://github.com/Gisa99/organo_animes-series"
  }
];

const Projetos = () => {
 
  return (
    <>
      <section className={styles.container}>
        <h2>Projetos</h2>
        <section  className={styles.projetosSection}>
          {projetos.map((projeto) => (
            <div className={styles.projetosContainer} key={projeto.id}>
              <img src={projeto.src} alt={projeto.nome} />
              <div className={styles.texto}>
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
                <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                  <button>Ver mais</button>
                </a>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Projetos;
