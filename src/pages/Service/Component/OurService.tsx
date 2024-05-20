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
    <Section tw='mt-[4.9rem] mb-[3.1rem]'>
      <Wrapper>
        <Column tw='items-center w-full ml-[0.25rem]'>
          <Column>
            <TitleHeading tw=''>Our Services</TitleHeading>
            <SecondHeading tw='tracking-[0.025rem] mt-[0.35rem] '>
              We focus on your beauty
            </SecondHeading>
            <Paragraph tw=' mt-[1.3rem]'>Lorem ipsum dolor sit amet</Paragraph>
          </Column>
          <Row tw='w-full justify-between pl-[1.25rem] pr-[1.3rem] mt-[4.6rem]'>
            <div tw="basis-[26.5%]">
                <ImageSrc clx="w-full" src="/service/image-our-service-1.png"/>
            </div>
            <div tw="basis-[66%]">
                <ImageSrc clx="w-full" src="/service/image-our-service-2.png"/>
            </div>
          </Row>
        </Column>
      </Wrapper>
    </Section>
  );
}

export default OurService;
