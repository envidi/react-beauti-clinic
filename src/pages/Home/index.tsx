import Introduce from "./Component/Introduce";
import "twin.macro";
import MainService from "./Component/MainService";
import AboutUs from "./Component/AboutUs";
import Team from "./Component/Team";
import Contact from "./Component/Contact";
import Bubble from "../../components/Bubble";
import tw from "twin.macro";
function Home() {
  return (
    <main tw='flex flex-col'>
      <Bubble />
      <Introduce />
      <MainService />
      <AboutUs />
      <Team
        page='home'
        secondHeading='The Professional expert'
        titleHeading="Professional Teams"
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'
        styles={{
          paragraph : tw`mt-[1rem]`
        }}
      />
      <Contact />
    </main>
  );
}

export default Home;
