import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Section from "../../../components/Section";
import Image from "../../../components/Image";
import Column from "../../../components/Column";
import Row from "../../../components/Row";

function ContactUs() {
  return (
    <Section tw='mt-[4.9rem] relative'>
      <div tw='absolute top-[5.4rem] right-0 -z-10 w-[100%]'>
        <img
          tw='w-full -z-10'
          src={window.location.origin + "/Contact/Background_Bubble_Contact.png"}
          alt=''
        />
      </div>
      <Wrapper>
        <Column >
          <TitleHeading tw='md:text-left ml-[0.2rem]'>Contact Us</TitleHeading>
          <Row tw='md:justify-between sm:items-center'>
            <SecondHeading tw='md:text-left md:basis-[50%] ml-[0.2rem] text-[2.25rem] font-semibold mt-[0.6rem] tracking-[0.001rem] leading-[2.8rem]'>
              Contact service for our customers
            </SecondHeading>
            <Paragraph tw='md:text-left sm:w-[80%] md:basis-[37.39%] flex items-center xl:mt-[-0.6rem] sm:mt-[1.2rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Paragraph>
          </Row>
          <Row tw='justify-between xs:flex-col-reverse md:flex-row'>
            <div tw='basis-[47.5%] flex items-center'>
              <Image
                tw='mt-[-1.36rem] ml-[0.3rem]'
                src={window.location.origin + "/Contact_Animations.png"}
                alt=''
              />
            </div>
            <div tw='basis-[45.5%] flex flex-col xs:items-center md:items-start'>
              <form
                tw='mt-[3.68rem] flex flex-col md:items-start xs:items-center gap-y-[2.4rem] xs:w-[70%] md:w-full'
                action=''
              >
                <div tw='flex sm:flex-row xs:flex-col gap-[2.2rem] w-full'>
                  <Input tw='flex-1 py-[1.09rem] pl-[1.45rem] pr-[0.4rem]' type='text' placeholder='First name' />
                  <Input tw='flex-1 py-[1.09rem] pl-[1.8rem] box-content' type='text' placeholder='Last name' />
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
                    tw='md:flex-grow pt-[1.6rem] mt-[0.1rem]'
                    as={"textarea"}
                    placeholder='Your inquiry here'
                    name=''
                    rows={8}
                  ></Input>
                </div>
                <Button
                  tw='w-fit px-[3.4rem] mt-[1.15rem] pb-[1.1rem] ml-[0.1rem] tracking-[0.12rem] text-[1rem]'
                  variant='large'
                >
                  Send Message
                </Button>
              </form>
            </div>
          </Row>
        </Column>
      </Wrapper>
    </Section>
  );
}

export default ContactUs;
