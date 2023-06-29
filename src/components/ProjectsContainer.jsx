import '../styles/components/projectscontainer.sass';


const projetos = [
    { titulo: "Tradutor em Javascript", texto: "", link: "https://regischicon.github.io/translator/", id: "p1", key: "p1" },
    { titulo: "Todo List em React", texto: "", link: "https://regischicon.github.io/todo-list/", id: "p2", key: "p2" },
    { titulo: "Buscador de Álbuns utilizando a API do Spotify em React", texto: "", link: "https://regischicon.github.io/Spotify-Album-React/", id: "p3", key: "p3" },
    { titulo: "Gerador de Piadas utilizando API do Chuck Norris em React", texto: "", link: "https://regischicon.github.io/Chuck-Norris-Api/", id: "p4", key: "p4" },
];

function ProjectsContainer() {
    return <section className='project-container'>
        <h2>Projetos</h2>
        <p>Alguns projetos que desenvolvi</p>
        <div className='project-grid'>
            {projetos.map((proj) => (
                <div className='project-card' id={proj.id} key={proj.key}>
                    <p>{proj.titulo}</p>
                    <div className='project-info'>
                        {/* <p>{proj.texto}</p> */}

                    </div>
                    <div className='project-btn'>
                        <a href={proj.link} className="btn" target='blank'>Veja aqui</a>
                    </div>
                </div>


            ))}

        </div>
    </section>
}

export default ProjectsContainer