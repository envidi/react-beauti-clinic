import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Section from "../../../components/Section";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
import ImageSrc from "../../../components/ImageSrc";
function OurClient() {
  return (
    <Section tw='mt-[7.5rem] mb-[3.1rem]'>
      <Wrapper>
        <Column tw='items-center w-full ml-[-0.75rem]'>
          <Column tw="ml-[0.1rem]">
            <TitleHeading tw=''>Our Clients</TitleHeading>
            <SecondHeading tw='tracking-[0.03rem] mt-[0.35rem] font-semibold '>
              Well-known agencies
            </SecondHeading>
            <Paragraph tw=' mt-[1rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Paragraph>
          </Column>
          <Row tw='mt-[6.37rem]  justify-center  xs:flex-row xs:gap-[2rem] xl:gap-[3.4rem] lg:gap-[1.4rem] ml-[1.5rem] items-center w-full'>
            <div tw='basis-[12.99%]'>
              <ImageSrc clx=' w-full' src='/LOGO1.png' />
            </div>
            <div tw='basis-[12.99%]'>
              <ImageSrc clx=' w-full translate-x-[-0.15rem]' src='/LOGO2.png' />
            </div>
            <div tw='basis-[12.99%]'>
              <ImageSrc clx=' w-full' src='/LOGO3.png' />
            </div>
            <div tw='basis-[12.99%]'>
              <ImageSrc clx=' w-full translate-y-[-0.01rem] translate-x-[0.1rem]' src='/LOGO4.png' />
            </div>
            <div tw='basis-[12.99%]'>
              <ImageSrc clx=' w-full translate-x-[0.25rem]' src='/LOGO5.png' />
            </div>
          </Row>
        </Column>
      </Wrapper>
    </Section>
  );
}

export default OurClient;
