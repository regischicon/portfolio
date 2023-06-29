import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiPython,
    DiDjango,
    DiMysql,
    DiPostgresql,
    DiLinux
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "python", name: "Python", icon: <DiPython /> },
    { id: "django", name: "Django", icon: <DiDjango /> },
    { id: "mysql", name: "MySql", icon: <DiMysql /> },
    { id: "postgresql", name: "PostgreSql", icon: <DiPostgresql /> },
    { id: "linux", name: "Linux", icon: <DiLinux /> }
];

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus dolorum eius ad aliquam ea.</p> */}
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer