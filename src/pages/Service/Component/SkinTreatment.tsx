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
function SkinTreatment() {
  return (
    <div tw='relative'>
      <Section tw='xl:mt-[9.1rem] md:mt-[6.55rem] xs:mt-[4rem]'>
        <Wrapper>
          <Row tw='md:flex-row justify-between gap-y-14'>
            <Column tw='md:items-start xs:items-center ml-[.23rem]  md:basis-[41.8%] gap-y-[0.3rem]'>
              <TitleHeading tw='md:text-left mt-[0.1rem]'>Skin Treatements</TitleHeading>
              <SecondHeading tw='md:text-left xl:w-[80%]  sm:w-[70%] md:w-full   tracking-[0.02rem] text-[2.2rem] leading-[2.8rem] mt-[0.3rem] font-semibold'>
                Skin care and treatment by expert
              </SecondHeading>
              <Paragraph tw='md:text-left xs:w-[100%]  sm:w-[75%]  md:w-[97%] mt-[0.52rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero.
              </Paragraph>
              <Button
                tw='flex text-primary-mainColor border-none w-fit p-0 text-[1.01rem] tracking-[0.095rem] font-semibold ml-[0rem] mt-[1.15rem] items-center'
                variant='outline'
              >
                Make an Appointment
                <ChevronsRight
                  strokeWidth={3}                
                  className='ml-[0.65rem] w-[1.7rem] h-[1.7rem] text-secondary-mainColor '
                />
              
              </Button>
            </Column>
            <Column tw='md:basis-[42.7%] justify-center items-center relative'>
            <ImageSrc src='/service/Vector-2.png' clx="absolute top-[50%] left-[50%] translate-x-[-50.1%] translate-y-[-40%] w-[54.2%] -z-10"/>
              <ImageSrc
                clx='md:w-[61.5%] xs:w-[60%]  xs:mt-[0rem] h-auto object-cover xl:ml-[2.17rem] md:mt-[-2.6rem]'
                src='/service/animation-1.png'
                alt=''
              />
            </Column>
          </Row>
        </Wrapper>
      </Section>
    </div>
  );
}

export default SkinTreatment;
