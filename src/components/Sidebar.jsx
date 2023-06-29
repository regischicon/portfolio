import Avatar from "../img/github.png"
import "../styles/components/sidebar.sass"
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Régis PAC" />
        <p className="title">Desenvolvedor Front-End Junior</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://drive.google.com/file/d/1840NZDst1HaOiUS9YUA-DdeVE8Lmt6J5/view?usp=sharing" className="btn" target="blank">Download currículo</a>
    </aside>
};

export default Sidebar