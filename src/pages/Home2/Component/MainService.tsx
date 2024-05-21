import Button from "../../../components/Button";
import ImageSrc from "../../../components/ImageSrc";
import Paragraph from "../../../components/Paragraph";
import SecondHeading from "../../../components/SecondHeading";
import Section from "../../../components/Section";
import TitleHeading from "../../../components/TitleHeading";
import Wrapper from "../../../components/Wrapper";
import tw, { styled, css } from "twin.macro";
const Card = styled.div<{ large?: boolean }>(({ large }) => [
  tw`flex xs:w-10/12 md:w-full overflow-hidden hover:border-secondary-hoverCardHome relative flex-col z-50 items-start rounded-[25px] px-[1.9rem] py-[2rem] pb-[2.87rem] border border-secondary-cardHome2`, // Add base styles first
  css`
    z-index: 100;
  `,
  large && tw``, // Then add conditional styles
]);
const Cards = tw.div`z-10 sm:w-[60%] xs:w-full md:w-full grid xl:grid-cols-[15.8rem_15.8rem_15.8rem] xxl:grid-cols-[16.2rem_16.2rem_16.2rem] md:grid-cols-3 justify-between xs:grid-cols-1 justify-items-center xl:gap-x-0 lg:gap-x-[2rem] md:gap-x-[1.5rem]  xs:gap-y-[1rem] mt-[4.73rem] xl:pr-[7rem] xl:pl-[7.31rem] `;
const CardTitle = tw.div`text-primary-mainColor text-[1.12rem] font-semibold text-left`;
const CardParagraph = tw.div`text-primary-textColor leading-[1.35rem] text-[0.93rem] tracking-[0.06rem] ml-[0.19rem] text-left mt-[0.8rem]`;
const datas = [
  {
    img: "/icon-1.png",
    title: "Beauty consultation",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    img: "/icon-2.png",
    title: "Skin treatments",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    img: "/icon-3.png",
    title: "Beauty product",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
];
function MainService() {
  return (
    <div tw='relative'>
      <ImageSrc src="/Wave_Line_1.png" clx="absolute top-[21rem] left-0 w-[36.5%] -z-10"/>
      <Section tw='mt-[9.8rem] z-50'>
        <Wrapper tw='flex flex-col items-center '>
          <TitleHeading tw='ml-[0.2rem]'>Main Services</TitleHeading>

          <SecondHeading tw='xl:w-[40%] md:w-[50%] xs:w-[80%] leading-[2.8rem] font-semibold ml-[0.2rem] mt-[0.57rem] tracking-[0.02rem]'>
            Our focus services
          </SecondHeading>
          <Paragraph tw='w-[75%] mt-[1.35rem] ml-[0.18rem] '>
            Lorem ipsum dolor sit amet.
          </Paragraph>
          <Cards tw='z-50'>
            {datas.map((data, index) => {
              return (
                <Card key={index}>
                  <div tw='' css={[css``]}>
                    <ImageSrc src={data.img} alt='makeup' clx='ml-[0.3rem] object-cover xl:w-[93%] w-full' />
                  </div>
                  <div tw='absolute bg-background-main top-0 left-0 w-full h-full -z-10'></div>
                  <div tw='flex flex-col items-start'>
                    <CardTitle tw='mt-[1.3rem] ml-[0.25rem]'>
                      {data.title}
                    </CardTitle>
                    <CardParagraph>{data.p}</CardParagraph>
                    <Button
                      tw='flex text-secondary-mainColor border-none w-fit p-0 text-[0.85rem] tracking-[0.01rem] font-bold ml-[0.2rem] mt-[0.8rem] items-center'
                      variant='outline'
                    >
                      Learn more
                      <i
                        tw='text-secondary-mainColor text-[0.67rem] mt-[0.15rem] font-bold ml-[0.6rem]'
                        className='fa-solid fa-chevron-right'
                      ></i>
                      <i
                        tw='text-secondary-mainColor text-[0.67rem] mt-[0.15rem] font-bold'
                        className='fa-solid fa-chevron-right'
                      ></i>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </Cards>
        </Wrapper>
      </Section>
    </div>
  );
}

export default MainService;
