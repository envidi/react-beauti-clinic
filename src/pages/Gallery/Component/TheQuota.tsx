import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import Section from "../../../components/Section";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
import Button from "../../../components/Button";
import { css } from "twin.macro";

function TheQuota() {
  return (
    <div tw='relative'>
      <Section tw='xl:mt-[7.4rem] md:mt-[7.55rem] xs:mt-[6rem] mb-[1.9rem]'>
        <Wrapper>
          <Row tw='md:flex-row justify-between gap-y-14'>
            <Column tw='md:items-start xs:items-center  basis-[60%] gap-y-[0.3rem] ml-[0.2rem]'>
              <TitleHeading tw='md:text-left'>Get The Quota</TitleHeading>
              <SecondHeading tw='md:text-left xl:w-full font-semibold sm:w-[70%] md:w-full tracking-[0.03rem] text-[2.2rem] leading-[2.8rem] mt-[0.3rem]'>
                Want to be handled by our professional team immediately?
              </SecondHeading>
              <Paragraph tw='md:text-left xs:w-[100%] sm:w-[75%] md:w-[85%] mt-[1.1rem]'>
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </Paragraph>
            </Column>
            <Column tw='basis-[40%] justify-center items-center relative'>
              <Button
                tw='flex  border-none w-fit  text-[1.01rem] tracking-[0.093rem] font-semibold ml-[1.55rem] mt-[0.1rem] py-[1.05rem] px-[3rem] pl-[3.4rem] items-center'
                variant='main'
                css={[
                  css`
                    box-shadow: 0px 17px 22px 0px #ffedf6;
                  `,
                ]}
              >
                Make an Appointment
              </Button>
            </Column>
          </Row>
        </Wrapper>
      </Section>
    </div>
  );
}

export default TheQuota;
