import Section from "../../../components/Section";
import tw from "twin.macro";
import Wrapper from "../../../components/Wrapper";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import BackgroundImage from "../../../components/BackgroundImage";
import ImageSrc from "../../../components/ImageSrc";

const Overlay = tw.div`absolute top-0 left-0 w-full h-full bg-[#09115699] z-10`;
function Goal() {
  return (
    <div tw='relative z-30'>
      <ImageSrc src='/team/wave-1.png' clx='absolute bottom-0 left-0 translate-y-[100.5%] w-[29.32%]' />

      <BackgroundImage
        image='team/background-image-goal.png'
        info={{
          style: tw`mt-[7.84rem] xl:h-[33rem] md:h-[34.19rem] xs:h-[32.19rem] 2xl:bg-top`,
        }}
      >
        <Overlay />
        <Section tw='w-full flex items-center z-20'>
          <Wrapper tw='w-full flex flex-col justify-center items-center h-[33.89rem] xl:mt-[-1.22rem]  gap-y-[0.45rem]'>
            <SecondHeading tw='text-background-main z-20 xl:w-[40%] md:w-[60%] sm:w-[80%] text-[2.22rem] font-semibold tracking-[0.02rem] ml-[1.75rem] leading-[2.83rem]'>
              Customer satisfaction is our main goal
            </SecondHeading>
            <Paragraph tw='text-primary-treatment text-[0.97rem] tracking-[0.114rem] z-20 md:w-[60%] sm:w-[80%] mt-[0rem] ml-[0.1rem] leading-[1.5rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Paragraph>
          </Wrapper>
        </Section>
      </BackgroundImage>
    </div>
  );
}

export default Goal;
