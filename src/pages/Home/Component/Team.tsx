import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import tw, { styled, css } from "twin.macro";
import Section from "../../../components/Section";
import Image from "../../../components/Image";
import Column from "../../../components/Column";
const Card = styled.div<{ large?: boolean }>(({ large }) => [
  tw`flex xs:w-2/3 md:w-full  flex-col hover:scale-100 items-center overflow-hidden relative rounded-[42px] px-[2.33rem] py-[5.8rem]`, // Add base styles first
  css`
    &:hover {
      box-shadow: 0px 25px 50px 25px #f6f7ff;
    }
  `,
  large && tw``, // Then add conditional styles
]);
const Cards = tw.div`grid md:grid-cols-3 xs:grid-cols-1 justify-items-center mt-[7rem] `;
const CardTitle = tw.div`text-primary-mainColor text-[1.12rem] font-semibold`;
const CardNameTeam = tw.div`text-secondary-mainColor text-[1rem] font-semibold text-center`;
const CardParagraph = tw.div`text-primary-textColor leading-[1.35rem] text-[0.93rem] tracking-[0.06rem] ml-[0rem] text-center mt-[1.12rem] w-[79%]`;
const SocialMediaIcons = tw.div`flex flex-row gap-[2.1rem] mt-[3.15rem] `;
// const SocialMediaIcon = tw.div`flex text-[1.3rem] w-[3.0625rem] justify-center items-center h-[3.0625rem]
// bg-background-main`;
const SocialMediaIcon = styled.div`
  ${css`
    box-shadow: -2px 6px 16px -1px #e6e9fd;
    ${tw`flex text-[1.5rem] rounded-full text-primary-mainColor w-[3.0625rem] justify-center items-center h-[3.0625rem] 
  bg-background-main`};
  `}
`;
const datas = [
  {
    id: 1,
    nameTeamate: "Briyan Nevalli",
    img: "/first.png",
    position: "Surgeon",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    id: 2,
    nameTeamate: "Bella sebastian",
    img: "/mid.png",
    position: "Dermatologist",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    id: 3,
    nameTeamate: "Lilly Adams",
    img: "/last.png",
    position: "Stylist expert",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
];
function Team({ page }: { page?: string }) {
  return (
    <Section
      css={[
        tw`flex justify-center`, // Add base styles first
        page === "home" && tw`mt-[7.15rem]`, // Then add conditional styles
        page === "about" && tw`mt-[8.35rem]`, // Then add conditional styles
      ]}
    >
      <Wrapper team={true}>
        <Column tw="items-center">
          <TitleHeading tw='ml-[0.1rem]'>Professional Teams</TitleHeading>
          <SecondHeading tw='tracking-[0.01rem] mt-[0.35rem] ml-[0.1rem]'>
            The Professional expert
          </SecondHeading>
          <Paragraph tw='ml-[0.2rem] mt-[1rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </Paragraph>
          <Cards tw=''>
            {datas.map((data, index) => {
              return (
                <Card key={index} className='group group-hover:scale-100'>
                  <div tw='w-[9.125rem] h-[9.125rem] rounded-full'>
                    <Image src={window.location.origin + data.img} alt='' />
                  </div>
                  {data && (
                    <div tw='absolute group-hover:bg-background-main top-0 left-0 w-full h-full -z-10'></div>
                  )}
                  <div tw='mt-[3.2rem] flex flex-col items-center'>
                    <CardNameTeam tw='ml-[0.1rem]'>
                      {data.position}
                    </CardNameTeam>
                    <CardTitle tw='ml-[0.1rem] mt-[0.6rem]'>
                      {data.nameTeamate}
                    </CardTitle>
                    <CardParagraph tw='w-[79%]'>{data.p}</CardParagraph>
                    <SocialMediaIcons>
                      <SocialMediaIcon>
                        <i className='fa-brands fa-twitter'></i>
                      </SocialMediaIcon>
                      <SocialMediaIcon>
                        <i className='fa-brands fa-facebook'></i>
                      </SocialMediaIcon>
                      <SocialMediaIcon>
                        <i className='fa-brands fa-instagram'></i>
                      </SocialMediaIcon>
                    </SocialMediaIcons>
                  </div>
                </Card>
              );
            })}
          </Cards>
        </Column>
      </Wrapper>
    </Section>
  );
}

export default Team;
