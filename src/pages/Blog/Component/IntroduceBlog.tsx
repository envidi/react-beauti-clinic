import Section from "../../../components/Section";
import tw from "twin.macro";
import Wrapper from "../../../components/Wrapper";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import BackgroundImage from "../../../components/BackgroundImage";
import Row from "../../../components/Row";
import { Dot } from "lucide-react";
// const BackgroundImage = styled.div`
//   ${css`
//     background-image: url("/slogan.png");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-color: #09115699;

//     ${tw`relative bg-center mt-[9.5rem]`};
//   `}
// `;

const Overlay = tw.div`absolute top-0 left-0 w-full h-full bg-[#09115699] z-10`;
function IntroduceBlog() {
  return (
    <BackgroundImage
      image='blog/background-image-blog.png'
      info={{
        style: tw`xl:mt-[-0.55rem]`,
      }}
    >
      <Overlay />
      <Section tw='w-full flex items-center z-20'>
        <Wrapper tw=' w-full h-[17.8rem]  ml-[0.2rem] '>
          <Row tw='items-center justify-between w-full flex-row'>
            <SecondHeading tw='text-background-main z-20  md:w-[50%] text-left sm:w-[80%] font-semibold tracking-[0.02rem] mt-[0.2rem] leading-[2.8rem] ml-[-0.03rem]'>
              Blog
            </SecondHeading>
            <Paragraph tw='text-primary-treatment z-20 md:w-[60%] sm:w-[80%] mt-[0.1rem] mr-[-0.2rem] text-[0.98rem] tracking-[0.12rem] flex justify-end'>
              Home<Dot className="ml-[-0.15rem] xl:w-[1.5rem] md:w-[1.2rem] h-auto xs:w-[1.1rem] mr-[-0.05rem]" />Blog
            </Paragraph>
          </Row>
        </Wrapper>
      </Section>
    </BackgroundImage>
  );
}

export default IntroduceBlog;
