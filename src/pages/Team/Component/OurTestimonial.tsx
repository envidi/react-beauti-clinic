import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import "twin.macro";
import Section from "../../../components/Section";
import Column from "../../../components/Column";
import SwiperCustom from "../../../components/Swiper/SwiperCustom";
import ImageSrc from "../../../components/ImageSrc";

function OurTestimonial() {
  return (
    <>
      <div tw="relative">
        <ImageSrc src="/team/wave-2.png" clx="absolute bottom-0 translate-y-[23%] right-0 xl:w-[38.4%] 2xl:w-[30%] z-10"/>
        <Section tw='mt-[7.28rem] mb-[1rem] z-20'>
          <Wrapper>
            <Column tw='items-center w-full '>
              <TitleHeading tw=' z-30 ml-[0.2rem]'>
                Our Testimonials
              </TitleHeading>
              <SecondHeading tw='tracking-[0.03rem] mt-[0.35rem] z-30 font-semibold ml-[0.2rem]'>
                What our customer says
              </SecondHeading>
              <Paragraph tw=' mt-[1.3rem] z-30 ml-[0.25rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam.
              </Paragraph>
              <div tw='relative md:w-[69.5%] xs:w-full mt-[4rem]'>
                <SwiperCustom />
              </div>
            </Column>
          </Wrapper>
        </Section>
      </div>
    </>
  );
}

export default OurTestimonial;
