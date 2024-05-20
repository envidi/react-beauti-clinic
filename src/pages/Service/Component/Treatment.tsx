import Section from "../../../components/Section";
import tw, { css } from "twin.macro";
import Wrapper from "../../../components/Wrapper";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import BackgroundImage from "../../../components/BackgroundImage";
import Row from "../../../components/Row";
import Column from "../../../components/Column";
import ImageSrc from "../../../components/ImageSrc";
// const BackgroundImage = styled.div`
//   ${css`
//     background-image: url("/Treatment.png");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-color: #09115699;

//     ${tw`relative bg-center mt-[9.5rem]`};
//   `}
// `;

const Overlay = tw.div`absolute top-0 left-0 w-full h-full bg-[#09115699] z-10`;
function Treatment() {
  return (
    <BackgroundImage
      image='service/background-image-service.png'
      info={{
        style: tw`mt-[9.9rem]`,
      }}
    >
      <Overlay />
      <Section tw='w-full flex items-center z-20'>
        <Wrapper tw=' w-full h-[32.99rem] mt-[0rem] ml-[0.25rem] '>
          <Row tw='xs:justify-center items-center md:justify-between xs:gap-y-[3rem] md:gap-y-0'>
            <Column tw="md:basis-1/2 gap-y-[1.2rem] md:mt-[-0.5rem] xs:items-center xs:justify-center">
              <SecondHeading tw='text-background-main z-20 md:text-left text-[2.21rem] md:w-full sm:w-[80%] font-semibold tracking-[0.02rem] mt-[0rem] leading-[2.8rem]'>
                Best responsibility and service for our customers
              </SecondHeading>
              <Paragraph tw='text-primary-treatment z-20 md:text-left md:w-[100%] sm:w-[80%] mt-[0.01rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </Paragraph>
            </Column>
            <Column tw="md:basis-[40%] xs:justify-center">
              <div tw='flex items-center gap-[1.8rem] justify-center z-10'>
                <div
                  css={[
                    tw`xs:w-[8.87vw] xs:h-[8.87vw] 2xl:w-[8rem]  2xl:h-[8rem] md:ml-[0rem] rounded-full md:border-2 border border-background-main flex justify-center items-center`,
                    css`
                      box-shadow: 0px 0px 12px 7px #ffffff26;
                    `,
                  ]}
                >
                  <ImageSrc src='/Polygon_1.png' clx='lg:ml-[0.6rem] md:ml-[0.2rem] w-[33%] md:mt-[0.1rem]' />
                </div>
                <span tw='text-background-main text-[0.95rem] tracking-[0.13rem] font-semibold mt-[-0.2rem]'>
                    Treatments Videos
                </span>
              </div>
            </Column>
          </Row>
        </Wrapper>
      </Section>
    </BackgroundImage>
  );
}

export default Treatment;
