import 'twin.macro'
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import Section from '../../../components/Section';
import Image from '../../../components/Image';
function Introduce() {
  return (
    <Section tw='mt-[6.9rem] '>
      <Wrapper tw='justify-between xs:flex-col md:flex-row gap-y-10'>
        <div tw='flex flex-col md:basis-[43%] xs:basis-full md:gap-y-[0.35rem] xs:gap-y-3 xs:items-center md:items-start justify-center md:ml-[2.6rem] mt-[-1.35rem]'>
          <h1 tw='text-[2.98rem] text-primary-mainColor font-semibold w-full xs:text-center md:text-left leading-[3.8rem] tracking-[0.016rem]'>Clinic & beauty consultant</h1>
          <p tw='text-primary-mainColor text-[1.05rem] sm:w-2/3 xs:w-full md:w-full tracking-[0.076rem] font-medium xs:text-center w-full md:text-left mb-[1.7rem]'>
            It is a long established fact that a reader will be by the readable
            content of a page.
          </p>
          <Button tw='w-fit tracking-[0.08rem]' large={true} >
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
