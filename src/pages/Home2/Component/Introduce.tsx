import Button from "../../../components/Button";
import Column from "../../../components/Column";
import ImageSrc from "../../../components/ImageSrc";
import MainHeading from "../../../components/MainHeading";
import MainParagraph from "../../../components/MainParagraph";
import Section from "../../../components/Section";
import Wrapper from "../../../components/Wrapper";
import tw, { css } from "twin.macro";

function Introduce() {
  return (
    <Section tw="z-20 absolute top-[9.3rem] left-0">
      <Wrapper tw='xl:mt-[9.88rem] lg:mt-[7.88rem] md:mt-[5rem] xs:mt-[2rem] flex md:flex-row gap-y-14 xs:flex-col md:justify-between'>
        <Column tw='md:basis-[48%] xs:w-full xl:ml-[0.2rem]  xs:items-center md:items-start gap-y-[0.6rem]'>
          <MainHeading tw='text-background-main'>
            Your beauty center place
          </MainHeading>
          <MainParagraph tw='text-background-main mt-[0.15rem] leading-[1.5rem] xl:w-[92%] md:w-full font-light tracking-[0.137rem] text-[0.945rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
            massa pellentesque arcu fusce et magna consequat neque vitae
            lobortis.
          </MainParagraph>
          <Button variant='outline' tw='w-fit rounded-[15px] mt-[0.2rem] tracking-[0.12rem] pb-[0.83rem] pt-[0.83rem] text-[0.98rem] px-[1.8rem]'>
            More Details
          </Button>
        </Column>
        <Column tw='basis-[52%] flex justify-center items-center'>
          <div tw='flex items-center gap-[2.8rem]'>
            <div
              css={[
                tw`xs:w-[8.9vw] xs:h-[8.9vw] 2xl:w-[8rem]  2xl:h-[8rem] md:ml-[1.75rem] rounded-full md:border-2 border border-background-main flex justify-center items-center`,
                css`
                  box-shadow: 0px 0px 12px 7px #ffffff26;
                `,
              ]}
            >
              <ImageSrc src='/Polygon_1.png' clx="md:ml-[0.5rem] w-[34%]" />
            </div>
            <span tw="text-background-main text-[1rem] tracking-[0.11rem] mt-[0.1rem]">Tour Video</span>
          </div>
        </Column>
      </Wrapper>
    </Section>
  );
}

export default Introduce;
