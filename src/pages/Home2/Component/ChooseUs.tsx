import tw, { css, styled } from "twin.macro";
import Section from "../../../components/Section";
import Wrapper from "../../../components/Wrapper";
import Paragraph from "../../../components/Paragraph";
import ImageSrc from "../../../components/ImageSrc";
const Achievements = tw.div`grid grid-cols-2 basis-1/2`;
const Achievement = tw.div`flex items-center xs:justify-center md:justify-start  w-full`;
const AchievementNumber = tw.div`text-background-main text-[2.2rem] tracking-[0.06rem] font-semibold leading-3`;
const AchievementName = styled.div<{ isActive?: boolean }>(
  ({ isActive = false }) => [
    tw`text-background-main font-semibold  leading-3 text-[0.99rem] ml-[0.08rem]`, // Add base styles first
    isActive && tw`text-secondary-mainColor`, // Then add conditional styles
  ],
);

function ChooseUs() {
  return (
    <Section
      css={[
        tw`h-[50rem] mt-[5rem] xs:bg-cover md:bg-contain 2xl:bg-cover 2xl:bg-bottom`,
        css`
          background-image: url("/Background_choose_us.png");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        `,
      ]}
    >
      <Wrapper tw='flex items-center md:flex-row xs:flex-col xs:justify-center'>
        <div tw='md:basis-1/2 xs:w-full flex flex-col xs:items-center md:items-start gap-y-[1rem] md:ml-[0.4rem] mt-[0.9rem]'>
          <h3 tw='text-[2.2rem] tracking-[0.037rem] md:text-left xs:text-center font-semibold text-background-main'>
            Why choosing us?
          </h3>
          <Paragraph tw='text-background-main md:text-left xs:text-center md:w-[90%] xs:w-[60%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis.
          </Paragraph>
        </div>
        <Achievements tw='grid grid-cols-2 md:basis-1/2 basis-4/12 xs:justify-items-center items-center md:ml-[7.2rem] md:gap-y-[2.2rem] xs:gap-y-[0.2rem] gap-x-[1.7rem] md:mt-[1.2rem] xs:mt-[0.5rem]'>
          <Achievement>
            <div tw='basis-[26.5%]'>
              <ImageSrc clx='w-full object-cover' src='/handshake.png' />
            </div>
            <div tw='flex flex-col basis-2/3 justify-start ml-[0.6rem] gap-y-[1.05rem] mt-[0.6rem]'>
              <AchievementNumber>100%</AchievementNumber>
              <AchievementName tw="text-secondary-mainColor">trusted clinic</AchievementName>
            </div>
          </Achievement>
          <Achievement>
            <div tw='basis-[26.5%]'>
              <ImageSrc clx='w-full object-cover mb-[1rem]' src='/brotherhood.png' />
            </div>
            <div tw='flex flex-col basis-2/3 justify-start ml-[0.6rem] gap-y-[1.05rem] mt-[0.6rem]'>
              <AchievementNumber>99%</AchievementNumber>
              <AchievementName>customer love</AchievementName>
            </div>
          </Achievement>
          <Achievement>
            <div tw='basis-[26.5%]'>
              <ImageSrc clx='w-full object-cover' src='/earth.png' />
            </div>
            <div tw='flex flex-col basis-2/3 justify-start ml-[0.6rem] gap-y-[1.05rem] mt-[1.2rem]'>
              <AchievementNumber>75+</AchievementNumber>
              <AchievementName>asian branch</AchievementName>
            </div>
          </Achievement>
          <Achievement>
            <div tw='basis-[26.5%]'>
              <ImageSrc clx='w-full object-cover' src='/doctor.png' />
            </div>
            <div tw='flex flex-col basis-2/3 justify-start ml-[0.6rem] gap-y-[1.05rem] mt-[1.2rem]'>
              <AchievementNumber>1.200+</AchievementNumber>
              <AchievementName>licensed worker</AchievementName>
            </div>
          </Achievement>
        </Achievements>
      </Wrapper>
    </Section>
  );
}

export default ChooseUs;
