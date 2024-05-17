import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Section from "../../../components/Section";
import ImageSrc from "../../../components/ImageSrc";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
function OurVision() {
  return (
    <div tw='relative'>
      <ImageSrc
        src='/Bubble_BG_Footer_About.png'
        clx='absolute top-[4.1rem] left-0 w-[83.5%] -z-10'
      />
      <Section tw='mt-[7.6rem]'>
        <Wrapper>
          <Row tw='md:flex-row-reverse justify-between gap-y-14'>
            <Column tw='md:items-start xs:items-center  basis-[41.8%] gap-y-[0.3rem]'>
              <TitleHeading tw='md:text-left'>Our Vision</TitleHeading>
              <SecondHeading tw='md:text-left w-full font-semibold  tracking-[0.02rem] text-[2.2rem] leading-[2.8rem] mt-[0.3rem]'>
                Be the best and go international
              </SecondHeading>
              <Paragraph tw='md:text-left xs:w-[100%] sm:w-[80%]  md:w-[97%] mt-[0.6rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero.
                <br />
                <br />
                Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
                suspendisse placerat.
              </Paragraph>
            </Column>
            <Column tw='basis-[42.7%] justify-center items-center'>
              <ImageSrc
                clx='md:w-[77%] xs:w-[68%] mt-[0.7rem] h-auto object-cover md:ml-[0.15rem]'
                src='/about-us-home2.png'
                alt=''
              />
            </Column>
          </Row>
        </Wrapper>
      </Section>
    </div>
  );
}

export default OurVision;
