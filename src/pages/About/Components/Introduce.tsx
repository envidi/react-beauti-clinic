import tw, { css } from "twin.macro";
import ImageSrc from "../../../components/ImageSrc";
import Paragraph from "../../../components/Paragraph";
import SecondHeading from "../../../components/SecondHeading";
import Section from "../../../components/Section";
import TitleHeading from "../../../components/TitleHeading";
import Wrapper from "../../../components/Wrapper";
import "twin.macro";
import Column from "../../../components/Column";
import PlayButton from "../../../components/PlayButton";

function Introduce() {
  return (
    <div tw='relative'>
      <ImageSrc
        src='/Bubble_BG_About.png'
        clx='absolute top-[25.6rem] right-0 w-[79.5%] -z-10'
      />
      <Section tw='mt-[4.9rem]'>
        <Wrapper>
          <Column>
            <Column tw='ml-[0.2rem] sm:items-center md:items-start'>
              <TitleHeading tw='md:text-left'>About</TitleHeading>
              <SecondHeading tw='md:text-left md:w-[66%] sm:w-[86%] tracking-[0.02rem] mt-[0.65rem] leading-[2.8rem]'>
                We are a leading beauty clinic that has been around since 2002
              </SecondHeading>
              <Paragraph tw='md:text-left md:w-[60%] sm:w-[86%] mt-[1.2rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </Paragraph>
            </Column>
            <Column
              css={[
                tw`relative w-full flex md:mt-[4.2rem] xs:mt-[2.2rem] ml-[0.2rem]  overflow-hidden md:rounded-[50px] xs:rounded-[25px]`,
                css`
                  box-shadow: 0px 25px 50px 25px #f6f7ff;
                `,
              ]}
            >
              <ImageSrc clx='w-[99.9%] ' src='/introduce-about.png' />
              <PlayButton
                styles={{
                  icon: tw`md:ml-[0.3rem] xs:mt-[0.1rem] md:mt-[0rem]`,
                  btn: tw`text-background-main bg-primary-mainColor absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`,
                }}
              />
            </Column>
          </Column>
        </Wrapper>
      </Section>
    </div>
  );
}

export default Introduce;
