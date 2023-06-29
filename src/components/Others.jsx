import '../styles/components/others.sass'
import React from 'react'

import {
    SiAdobeaftereffects,
    SiAdobepremierepro,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobeaudition,
    SiBlender,
    SiCinema4D,
    SiAutodesk
} from 'react-icons/si'

const tools = [
    { id: "after", name: "After Effects", icon: <SiAdobeaftereffects /> },
    { id: "pre", name: "Premiere", icon: <SiAdobepremierepro /> },
    { id: "ps", name: "Photoshop", icon: <SiAdobephotoshop /> },
    { id: "ai", name: "Illustrator", icon: <SiAdobeillustrator /> },
    { id: "au", name: "Audition", icon: <SiAdobeaudition /> },
    { id: "bl", name: "Blender", icon: <SiBlender /> },
    { id: "c4d", name: "Cinema 4D", icon: <SiCinema4D /> },
    { id: "ma", name: "Maya", icon: <SiAutodesk /> }
];

const others = () => {
    return <section className="others-container">
        <h2>Outras Competências</h2>
        <div className='others-grid'>
            <div className='others-card-link'>
                <p>Eu também sou criador e editor de vídeos e animações</p>
                <div className='others-btn'>
                    <a href='https://linktr.ee/regischicon' className="btn" target='blank'>Veja aqui</a>
                </div>
            </div>
            <div className='others-card'>
                <p>Algumas ferramentas que eu domino:</p>
                {tools.map((tool) => (
                    <div className='icons' id={tool.id} key={tool.id} title={tool.name}>
                        {tool.icon}
                        <p className='tools-font'>{tool.name}</p>
                    </div>
                )

                )}
            </div>

        </div>
    </section>
}

export default others