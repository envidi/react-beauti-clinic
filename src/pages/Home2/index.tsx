import "twin.macro";
import Introduce from "./Component/Introduce";
import tw, { css } from "twin.macro";
import AboutUs from "./Component/AboutUs";
import MainService from "./Component/MainService";
import ChooseUs from "./Component/ChooseUs";
import Blog from "./Component/Blog";
import ContactUs from "./Component/ContactUs";
function SecondHome() {
  return (
    <div >
      <div
        css={[
          tw`relative top-[-9.15rem] xs:h-[60rem] sm:h-[57.18rem] 2xl:h-[50rem]  w-full `,
          css({
            backgroundImage: 'url("./introduce-bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex:-100
          }),
        ]}
      >
      </div>

      <Introduce />
      <AboutUs />
      <MainService/>
      <ChooseUs/>
      <Blog/>
      <ContactUs/>
    </div>
  );
}

export default SecondHome;
