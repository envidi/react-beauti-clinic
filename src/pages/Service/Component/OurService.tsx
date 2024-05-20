import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Section from "../../../components/Section";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
import ImageSrc from "../../../components/ImageSrc";
function OurService() {
  return (
    <div tw='relative'>
      <ImageSrc src="/service/Bubble_BG_Service.png" clx="absolute top-[-1.8rem] left-0 w-full -z-10"/>
      <Section tw='mt-[4.9rem] mb-[3.1rem]'>
        <Wrapper>
          <Column tw='items-center w-full ml-[0.25rem]'>
            <Column>
              <TitleHeading tw=''>Our Services</TitleHeading>
              <SecondHeading tw='tracking-[0.025rem] mt-[0.35rem] '>
                We focus on your beauty
              </SecondHeading>
              <Paragraph tw=' mt-[1.3rem]'>
                Lorem ipsum dolor sit amet
              </Paragraph>
            </Column>
            <Row tw='w-full justify-between xs:flex-row md:pl-[1.2rem] md:pr-[1.25rem] mt-[4.6rem]'>
              <Column tw='basis-[26.5%]'>
                <ImageSrc clx='w-full' src='/service/image-our-service-1.png' />
              </Column>
              <Column tw='basis-[65.9%]'>
                <ImageSrc clx='w-full' src='/service/image-our-service-2.png' />
              </Column>
            </Row>
            <Row tw='w-full justify-between flex-row-reverse md:pl-[1.2rem] md:pr-[1.25rem] xl:mt-[4.3rem] md:mt-[3.6rem] sm:mt-[3.3rem] xs:mt-[2.7rem] lg:mt-[4rem]'>
              <Column tw='basis-[26.5%]'>
                <ImageSrc clx='w-full' src='/service/image-our-service-4.png' />
              </Column>
              <Column tw='basis-[65.9%]'>
                <ImageSrc clx='w-full' src='/service/image-our-service-3.png' />
              </Column>
            </Row>
          </Column>
        </Wrapper>
      </Section>
    </div>
  );
}

export default OurService;
