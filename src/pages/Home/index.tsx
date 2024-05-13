import Introduce from "./Component/Introduce";
import 'twin.macro'
import MainService from "./Component/MainService";
import AboutUs from "./Component/AboutUs";
import Team from "./Component/Team";
import Contact from "./Component/Contact";
import Bubble from "../../components/Bubble";
function Home() {
  return (
    <main tw="flex flex-col">
      <Bubble/>
      <Introduce />
      <MainService/>
      <AboutUs/>
      <Team/>
      <Contact/>
    </main>
  );
}

export default Home;
