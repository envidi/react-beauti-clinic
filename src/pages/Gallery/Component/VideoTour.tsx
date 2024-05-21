import Section from "../../../components/Section";
import tw, { css } from "twin.macro";
import Wrapper from "../../../components/Wrapper";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import BackgroundImage from "../../../components/BackgroundImage";
import ImageSrc from "../../../components/ImageSrc";
// const BackgroundImage = styled.div`
//   ${css`
//     background-image: url("/slogan.png");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-color: #09115699;

//     ${tw`relative bg-center mt-[9.5rem]`};
//   `}
// `;

const Overlay = tw.div`absolute top-0 left-0 w-full h-full bg-[#09115699] z-10`;
function VideoTour() {
  return (
    <div tw="relative">
      <ImageSrc
        src='/gallery/background-image-gallery.png'
        clx='absolute bottom-0 right-0 xl:w-[48.2%] md:w-[58.2%] xs:w-[60.2%] -z-10 translate-y-[100%]'
      />

      <BackgroundImage
        image='gallery/background-image.png'
        info={{
          style: tw`mt-[7.9rem] xl:h-[39.19rem] md:h-[34.19rem] xs:h-[32.19rem]`,
        }}
      >
        <Overlay />
        <Section tw='w-full flex items-center z-20'>
          <Wrapper tw=' w-full flex flex-col justify-center items-center h-[33.89rem] xl:mt-[2.58rem] ml-[0.3rem] gap-y-[0.85rem]'>
            <SecondHeading tw='text-background-main z-20 md:w-[50%] sm:w-[80%] font-semibold tracking-[0.02rem] mt-[0.2rem] leading-[2.8rem]'>
              Watch the video tour
            </SecondHeading>
            <Paragraph tw='text-primary-treatment z-20 md:w-[50%] sm:w-[80%] mt-[0.35rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Paragraph>
            <div tw='flex items-center gap-[1.8rem]  justify-center z-10 mt-[2.1rem]'>
              <div
                css={[
                  tw`xs:w-[8.87vw] xs:h-[8.87vw] 2xl:w-[8rem]  2xl:h-[8rem] md:ml-[-0.1rem] rounded-full md:border-2 border border-background-main flex justify-center items-center`,
                  css`
                    box-shadow: 0px 0px 12px 7px #ffffff26;
                  `,
                ]}
              >
                <ImageSrc
                  src='/Polygon_1.png'
                  clx='lg:ml-[0.6rem] md:ml-[0.2rem] w-[33%] md:mt-[0.1rem]'
                />
              </div>
            </div>
          </Wrapper>
        </Section>
      </BackgroundImage>
    </div>
  );
}

export default VideoTour;
