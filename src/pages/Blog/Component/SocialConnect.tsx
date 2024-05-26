import tw, { styled } from "twin.macro";
import Block from "../../../components/Block";
import { css } from "twin.macro";
const HeadingCategory = tw.h4`text-primary-mainColor font-semibold mt-[0.02rem]`;
const SocialMediaIcons = tw.div`flex flex-row gap-[1.29rem] mt-[1.75rem] ml-[-0.3rem]`;
// const SocialMediaIcon = tw.div`flex text-[1.3rem] w-[3.0625rem] justify-center items-center h-[3.0625rem]
// bg-background-main`;
const SocialMediaIcon = styled.div`
  ${css`
    box-shadow: -2px 6px 16px -1px #e6e9fd;
    ${tw`flex text-[1.5rem] rounded-full text-primary-mainColor w-[2.7rem] h-[2.7rem] justify-center items-center  
  bg-background-main`};
  `}
`;
function SocialConnect() {
  return (
    <Block tw='mt-[5.2rem] pb-[3.9rem]'>
      <HeadingCategory>Social Connect</HeadingCategory>
      <SocialMediaIcons>
        <SocialMediaIcon>
          <i className='fa-brands fa-facebook'></i>
        </SocialMediaIcon>
        <SocialMediaIcon>
          <i className='fa-brands fa-twitter'></i>
        </SocialMediaIcon>
        <SocialMediaIcon>
          <i className='fa-brands fa-instagram'></i>
        </SocialMediaIcon>
        <SocialMediaIcon>
          <i className='fa-brands fa-linkedin-in'></i>
        </SocialMediaIcon>
      </SocialMediaIcons>
    </Block>
  );
}

export default SocialConnect;
