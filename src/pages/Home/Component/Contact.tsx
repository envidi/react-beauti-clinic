import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Section from "../../../components/Section";
import Image from "../../../components/Image";

function Contact() {
  return (
    <Section tw='mt-[9.05rem] relative'>
         <div
        tw='absolute top-[-12.8rem] left-0 -z-10 w-[81.5%]'
      >
        <img
          tw='w-full -z-10'
          src={window.location.origin + "/Background-Bubble-3.png"}
          alt=''
        />
      </div>
      <Wrapper tw='flex justify-between xs:flex-col-reverse md:flex-row'>
        <div tw='basis-[46%] flex items-center'>
          <Image
            tw='mt-[2.6rem] '
            src={window.location.origin + "/Contact_Animations.png"}
            alt=''
          />
        </div>
        <div tw='basis-[45.5%] flex flex-col xs:items-center md:items-start'>
          <TitleHeading tw='md:text-left'>Contact Us</TitleHeading>
          <SecondHeading tw='md:text-left mt-[0.6rem] tracking-[0.015rem] w-[80%] leading-[2.8rem]'>
            Send your inquiry to our expert team
          </SecondHeading>
          <Paragraph tw='md:text-left mt-[1.2rem]'>
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </Paragraph>
          <form
            tw='mt-[3rem] flex flex-col md:items-start xs:items-center gap-y-[2.35rem] xs:w-[70%] md:w-full'
            action=''
          >
            <div tw='flex sm:flex-row xs:flex-col gap-[2.4rem] w-full'>
              <Input tw='flex-1' type='text' placeholder='First name' />
              <Input tw='flex-1' type='text' placeholder='Last name' />
            </div>
            <div tw='flex flex-col gap-y-[2.35rem] w-full'>
              <Input
                tw='md:flex-grow'
                type='text'
                placeholder='Email address'
                className='poppins-light form-contact_input'
              />
              <Input
                tw='md:flex-grow'
                type='text'
                placeholder='Subject message'
                className='poppins-light form-contact_input'
              />
              <Input
                tw='md:flex-grow pt-[1.6rem]'
                as={"textarea"}
                placeholder='Your inquiry here'
                name=''
                rows={8}
              ></Input>
            </div>
            <Button
              tw='w-fit px-[3.45rem] mt-[1.25rem] pb-[1.1rem] tracking-[0.12rem] text-[1rem]'
              variant="large"
            >
              Send Message
            </Button>
          </form>
        </div>
      </Wrapper>
    </Section>
  );
}

export default Contact;
