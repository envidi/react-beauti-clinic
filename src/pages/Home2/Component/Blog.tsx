import Button from "../../../components/Button";
import ImageSrc from "../../../components/ImageSrc";
import Paragraph from "../../../components/Paragraph";
import SecondHeading from "../../../components/SecondHeading";
import Section from "../../../components/Section";
import TitleHeading from "../../../components/TitleHeading";
import Wrapper from "../../../components/Wrapper";
import tw, { styled, css } from "twin.macro";
const Card = styled.div<{ large?: boolean }>(({ large }) => [
  tw`flex xs:w-10/12 md:w-full overflow-hidden hover:border-secondary-hoverCardHome relative flex-col z-50 items-start rounded-[25px]  xl:pb-[4.5rem] xs:pb-[2.5rem] border-none `,
  css`
  box-shadow: 0px 25px 50px 5px #F6F7FF;
    z-index: 100;
  `,
  large && tw``, // Then add conditional styles
]);
const Cards = tw.div`z-10 sm:w-[60%] xs:w-full md:w-full grid xl:grid-cols-3  md:grid-cols-3 justify-between xs:grid-cols-1 justify-items-center xl:gap-x-[3rem] 2xl:gap-x-[2.1rem] lg:gap-x-[2rem] md:gap-x-[1.5rem]  xs:gap-y-[2rem] mt-[5.45rem] xl:pr-[0rem] xl:pl-[0.2rem] `;
const CardTitle = tw.div`text-primary-mainColor text-[1.12rem] font-semibold text-left tracking-[0.001rem]`;
const CardParagraph = tw.div`text-primary-textColor leading-[1.35rem] text-[0.93rem] tracking-[0.06rem] ml-[0.19rem] text-left mt-[0.8rem]`;
const datas = [
  {
    img: "/blog-1.png",
    title: "How much does a consultation cost at our clinic?",
    p: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
  },
  {
    img: "/blog-2.png",
    title: "Watch out! don't choose the wrong beauty product",
    p: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
  },
  {
    img: "/blog-3.png",
    title: "About skin care you need to know",
    p: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
  },
];
function Blog() {
  return (
    <div tw='relative'>
      <ImageSrc src="/Wave_Line_2.png" clx="absolute top-[-9rem] right-0 w-[36.5%] -z-10"/>
      <Section tw='mt-[3.51rem] z-50'>
        <Wrapper tw='flex flex-col items-center '>
          <TitleHeading tw='ml-[0.2rem] '>The Blog</TitleHeading>

          <SecondHeading tw='xl:w-[40%] md:w-[50%] xs:w-[80%] leading-[2.8rem] ml-[0.2rem] mt-[0.6rem] tracking-[0.025rem] font-semibold'>
            Our latest news
          </SecondHeading>
          <Paragraph tw='w-[75%] mt-[1.13rem] ml-[0.17rem] '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
          <Cards tw='z-50'>
            {datas.map((data, index) => {
              return (
                <Card key={index}>
                  <div tw='w-full' css={[css``]}>
                    <ImageSrc src={data.img} alt='makeup' clx='object-cover xl:w-full w-full' />
                  </div>
                  <div tw='absolute bg-background-main top-0 left-0 w-full h-full -z-10'></div>
                  <div tw='flex flex-col items-start pl-[2.17rem] pr-[1.5rem] pt-[2rem]'>
                    <CardTitle tw='mt-[1.4rem] leading-[1.49rem] ml-[0.25rem]'>
                      {data.title}
                    </CardTitle>
                    <CardParagraph tw="leading-[1.3rem] ml-[0.2rem] w-[90%]">{data.p}</CardParagraph>
                    <Button
                      tw='flex  text-secondary-mainColor border-none w-fit p-0 text-[0.85rem] tracking-[0.01rem] font-bold ml-[0.3rem] mt-[1.5rem] items-center'
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

export default Blog;
