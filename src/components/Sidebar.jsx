import Avatar from '../img/ezio-color-ok.jpg'
import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'


const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Ezio R. Lorenzetti" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download CV</a>
        </aside>
    )
}

export default Sidebar