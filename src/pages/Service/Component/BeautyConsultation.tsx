import "twin.macro";
import { ChevronsRight } from "lucide-react";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Section from "../../../components/Section";
import ImageSrc from "../../../components/ImageSrc";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
import Button from "../../../components/Button";
function BeautyConsultation() {
  return (
    <div tw='relative'>
      <Section tw='xl:mt-[10.55rem] md:mt-[7.55rem] xs:mt-[6rem]'>
        <Wrapper>
          <Row tw='md:flex-row-reverse justify-between gap-y-14'>
            <Column tw='md:items-start xs:items-center  basis-[41.8%] gap-y-[0.3rem]'>
              <TitleHeading tw='md:text-left'>Beauty Consultation</TitleHeading>
              <SecondHeading tw='md:text-left xl:w-full font-semibold sm:w-[70%] md:w-full tracking-[0.03rem] text-[2.2rem] leading-[2.8rem] mt-[0.3rem]'>
                We services beauty consultation
              </SecondHeading>
              <Paragraph tw='md:text-left xs:w-[100%] sm:w-[75%] md:w-[97%] mt-[0.55rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero.
              </Paragraph>
              <Button
                tw='flex text-primary-mainColor border-none w-fit p-0 text-[1.01rem] tracking-[0.1rem] font-semibold ml-[0rem] mt-[1.1rem] items-center'
                variant='outline'
              >
                Make an Appointment
                <ChevronsRight
                  strokeWidth={3}
                  className='ml-[0.6rem] w-[1.7rem] h-[1.7rem] text-secondary-mainColor '
                />
              </Button>
            </Column>
            <Column tw='basis-[42.7%] justify-center items-center relative'>
              <ImageSrc src='/service/Vector-1.png' clx="absolute top-[50%] left-[50%] translate-x-[-48.5%] translate-y-[-51%] w-[69.5%] -z-10"/>
              <ImageSrc
                clx='md:w-[61.4%] xs:w-[60%] mt-[0rem] h-auto object-cover xl:mr-[0.27rem]'
                src='/service/animation-3.png'
                alt=''
              />
            </Column>
          </Row>
        </Wrapper>
      </Section>
    </div>
  );
}

export default BeautyConsultation;
