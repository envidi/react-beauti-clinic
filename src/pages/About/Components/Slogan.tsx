import Section from "../../../components/Section";
import tw from "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import BackgroundImage from "../../../components/BackgroundImage";
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
function Slogan() {
  return (
    <BackgroundImage image="slogan.png" info={{
        style : tw`mt-[9.5rem]`
    }}> 
      <Overlay/>
      <Section tw='w-full flex items-center z-20'>
        <Wrapper tw=' w-full flex flex-col justify-center items-center h-[33.89rem] mt-[-0.78rem] ml-[0.3rem] gap-y-[0.85rem]'>
          <TitleHeading tw="text-primary-slogan z-20">Business Slogan</TitleHeading>
          <SecondHeading tw="text-background-main z-20 md:w-[50%] sm:w-[80%] font-semibold tracking-[0.02rem] mt-[-0.2rem] leading-[2.8rem]">
            Best responsibility and service for our customers
          </SecondHeading>
          <Paragraph tw="text-primary-textColor z-20 md:w-[60%] sm:w-[80%] mt-[0.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Paragraph>
        </Wrapper>
      </Section>
    </BackgroundImage>
  );
}

export default Slogan;
