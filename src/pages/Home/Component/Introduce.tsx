import 'twin.macro'
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import Section from '../../../components/Section';
import Image from '../../../components/Image';
import MainHeading from '../../../components/MainHeading';
import MainParagraph from '../../../components/MainParagraph';
function Introduce() {
  return (
    <Section tw='mt-[6.95rem] '>
      <Wrapper tw='justify-between xs:flex-col md:flex-row gap-y-10'>
        <div tw='flex flex-col md:basis-[43%] xs:basis-full md:gap-y-[0.35rem] xs:gap-y-3 xs:items-center md:items-start justify-center md:ml-[2.6rem] mt-[-1.35rem]'>
          <MainHeading>Clinic & beauty consultant</MainHeading>
          <MainParagraph >
            It is a long established fact that a reader will be by the readable
            content of a page.
          </MainParagraph>
          <Button tw='w-fit tracking-[0.08rem]' variant='large' >
            More Details
          </Button>
        </div>
        <div tw='md:basis-[53%] xs:basis-6/12 flex justify-center'>
          <Image tw='md:w-full sm:w-9/12 xs:w-10/12 ml-[0.01rem]' src={window.location.origin + "/Frame 1.png"} alt='' />
        </div>
      </Wrapper>
    </Section>
  );
}

export default Introduce;
