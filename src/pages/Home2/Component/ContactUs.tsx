import "twin.macro";
import Button from "../../../components/Button";
import ImageSrc from "../../../components/ImageSrc";
import Input from "../../../components/Input";
import Paragraph from "../../../components/Paragraph";
import Section from "../../../components/Section";
import Wrapper from "../../../components/Wrapper";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
import { css } from "twin.macro";

function ContactUs() {
  return (
    <div tw='relative'>
      <ImageSrc
        src='/Wave_Line_3.png'
        clx='absolute top-[-7.8rem] left-0 w-[21.9%] -z-10'
      />
      <Section tw='mt-[10.25rem] mb-[3.8rem]'>
        <Wrapper>
          <Row tw="items-center justify-between w-full gap-y-10">
            <Column tw='basis-[36%] ml-[0.2rem]'>
              <h3 tw='text-[2.25rem] font-semibold xs:text-center md:text-left'>Request call services</h3>
              <Paragraph tw='md:text-left mt-[0.8rem] xs:text-center'>
                Lorem ipsum dolor sit amet, consect adipiscing elit{" "}
                <span tw='text-primary-mainColor font-bold'>Contact Us</span>.
              </Paragraph>
            </Column>
            <Column tw='md:basis-[64%] xs:basis-full md:items-end items-center w-full'>
              <div tw='flex md:justify-end xs:justify-center w-full mt-[1.15rem]'>
                <Input
                  placeholder='Insert your phone number here ...'
                  tw='basis-[74.9%] pl-[2.3rem] rounded-l-[25px] py-[1.5rem] rounded-r-none'
                  css={[
                    css`
                    &::placeholder{
                      letter-spacing:0.095rem
                    }
                    `
                  ]}
                />
                <Button tw='basis-[15.4%] rounded-r-[25px] rounded-l-none'>
                  <ImageSrc
                    clx='xl:w-[150%] md:w-full xs:w-[40%] max-w-[130%] mr-[0.5rem]'
                    src='/phone-volume.png'
                  />
                </Button>
              </div>
              <div tw='text-primary-textColor italic text-[0.76rem] mt-[0.5rem] tracking-[0.067rem] mr-[-0.1rem]'>
                Toll free for our coverage areas.
              </div>
            </Column>
          </Row>
        </Wrapper>
      </Section>
    </div>
  );
}

export default ContactUs;
