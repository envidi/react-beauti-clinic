
import Team from '../Home/Component/Team'
import Introduce from './Components/Introduce'
import OurClient from './Components/OurClient'
import OurMission from './Components/OurMission'
import OurVision from './Components/OurVision'
import Slogan from './Components/Slogan'

function About() {
  return (
    <div>
        <Introduce/>
        <Team page='about'/>
        <Slogan/>
        <OurVision/>
        <OurMission/>
        <OurClient/>
    </div>
  )
}

export default About