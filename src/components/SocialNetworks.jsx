import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/Fa';

import '../styles/components/SocialNetworks.sass';

const socialNetworks = [
    { link: "https://linkedin.com/in/regispac", name: "linkedin", icon: <FaLinkedinIn /> },
    { link: "https://github.com/regispac", name: "github", icon: <FaGithub /> }
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} target='blank' className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>

            ))}

        </section>
    )
}

export default SocialNetworks