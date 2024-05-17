import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Section from "../../../components/Section";
import ImageSrc from "../../../components/ImageSrc";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
function OurMission() {
  return (
    <Section tw='mt-[8.7rem]'>
      <Wrapper>
        <Row tw="justify-between gap-y-14 ml-[0.21rem]">
          <Column tw='md:items-start xs:items-center  basis-[43.8%] gap-y-[0.3rem]'>
            <TitleHeading tw='md:text-left'>Our Mission</TitleHeading>
            <SecondHeading tw='md:text-left w-full font-semibold  tracking-[0.03rem] text-[2.2rem] leading-[2.8rem] mt-[0.3rem]'>
              Special & premium service to any clients
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
          <Column tw='basis-[42.7%] justify-center xs:items-center md:items-start'>
            <ImageSrc
              clx='md:w-[97.8%] xs:w-[68%] mt-[-0.65rem] h-auto object-cover md:ml-[0.48rem]'
              src='/all-time.png'
              alt=''
            />
          </Column>
        </Row>
      </Wrapper>
    </Section>
  );
}

export default OurMission;
