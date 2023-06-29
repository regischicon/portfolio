import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'
import Others from './others'
import '../styles/components/maincontent.sass'

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
            <Others />
        </main>
    )
}

export default MainContent