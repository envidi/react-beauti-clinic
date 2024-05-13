import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Button from "../../../components/Button";
import Section from "../../../components/Section";
import Image from "../../../components/Image";
function AboutUs() {
  return (
    <Section tw='mt-[8.3rem]'>
      <Wrapper tw=' flex md:flex-row xs:flex-col justify-between'>
        <div tw='flex flex-col ml-[0.2rem]  md:items-start xs:items-center  basis-[48%] gap-y-[0.5rem]'>
          <TitleHeading tw="md:text-left">About Us</TitleHeading>
          <SecondHeading tw="md:text-left w-full tracking-[0.02rem]">We are the best beauty clinic</SecondHeading>
          <Paragraph tw="md:text-left xs:w-[80%]  md:w-[87%] mt-[0.4rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
            <br />
            <br />
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </Paragraph>
         
          <div tw='flex md:justify-start xs:justify-center items-center gap-x-[2.7rem] mt-[2.85rem] w-full'>
            <Button large={true} tw="w-fit tracking-[0.1rem] text-[1rem] px-[3rem] py-[1.01rem]">
              Learn More
            </Button>
            <div  tw='flex gap-x-[0.9rem] items-center '>
              <div tw=' flex justify-center items-center text-background-main w-[3.1rem] h-[3.1rem] bg-primary-mainColor rounded-full'>
                <i className='fa-solid fa-play ml-1 '></i>
              </div>
              <span tw="tracking-[0.1rem] text-[1rem] text-primary-textColor font-semibold">Watch Video</span>
            </div>
          </div>
        </div>
        <div tw='basis-[48.7%] flex justify-center items-center'>
          <Image tw="w-full xl:ml-[5.3rem] mt-[0.8rem]" src={window.location.origin + "/real_image2.png"} alt='' />
        </div>
      </Wrapper>
    </Section>
  );
}

export default AboutUs;
