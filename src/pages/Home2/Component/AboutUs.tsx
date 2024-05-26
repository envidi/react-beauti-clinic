import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Button from "../../../components/Button";
import Section from "../../../components/Section";
import ImageSrc from "../../../components/ImageSrc";
function AboutUs() {
  return (
    <Section tw='mt-[1.12rem]'>
      <Wrapper tw=' flex md:flex-row-reverse xs:flex-col justify-between gap-y-14'>
        <div tw='flex flex-col ml-[0.2rem]  md:items-start xs:items-center  basis-[42.2%] gap-y-[0.3rem]'>
          <TitleHeading tw='md:text-left'>About Us</TitleHeading>
          <SecondHeading tw='md:text-left w-full font-semibold  tracking-[0.01rem] text-[2.23rem] leading-[2.8rem] mt-[0.3rem]'>
            We are the best beauty clinic
          </SecondHeading>
          <Paragraph tw='md:text-left xs:w-[100%] sm:w-[80%]  md:w-[97%] mt-[0.45rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </Paragraph>

          <div tw='flex md:justify-start xs:justify-center items-center gap-x-[2.7rem] mt-[2.6rem] w-full'>
            <Button
              variant='large'
              tw='w-fit tracking-[0.118rem] text-[0.98rem] pl-[3.08rem] pr-[2.95rem] py-[1.1rem]'
            >
              Learn More
            </Button>
           
          </div>
        </div>
        <div tw='basis-[48.7%] flex justify-center items-start'>
          <ImageSrc  clx="md:w-[88%] xs:w-[68%] mt-[0.1rem] h-auto object-cover md:mr-[3.8rem]" src='/about-us-home2.png' alt='' />
        </div>
      </Wrapper>
    </Section>
  );
}

export default AboutUs;
