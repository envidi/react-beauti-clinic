import Image from "../../../components/Image";
import Paragraph from "../../../components/Paragraph";
import SecondHeading from "../../../components/SecondHeading";
import Section from "../../../components/Section";
import TitleHeading from "../../../components/TitleHeading";
import Wrapper from "../../../components/Wrapper";
import tw, { styled, css } from "twin.macro";
const Card = styled.div<{ large?: boolean }>(({ large }) => [
  tw`flex xs:w-2/3 md:w-full overflow-hidden relative flex-col z-50 items-center rounded-[50px] px-[2.33rem] py-[3.8rem] pb-[4.2rem]`, // Add base styles first
  css`
    box-shadow: 0px 25px 50px 25px #f6f7ff;
    z-index: 100;
  `,
  large && tw``, // Then add conditional styles
]);
const Cards = tw.div`z-10 grid md:grid-cols-3 xs:grid-cols-1 justify-items-center lg:gap-x-[2.5rem] md:gap-x-[1.5rem] xl:gap-x-[3.5rem] xs:gap-y-[1rem] mt-[5rem] md:pr-1 md:pl-1`;
const CardTitle = tw.div`text-primary-mainColor text-[1.12rem] font-semibold`;
const CardParagraph = tw.div`text-primary-textColor leading-[1.35rem] text-[0.93rem] tracking-[0.06rem] ml-[0.19rem] text-center mt-[1.12rem]`;
const datas = [
  {
    img: "/makeup-3.png",
    title: "Beauty consultation",
    p: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
  {
    img: "/makeup-2.png",
    title: "Skin treatments",
    p: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
  {
    img: "/makeup-1.png",
    title: "Beauty product",
    p: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
];
function MainService() {
  return (
    <div tw="relative">
      <div
        tw='absolute top-[49rem] right-0 -z-10 w-[65%]'
      >
        <img
          tw='w-full -z-10'
          src={window.location.origin + "/Background-Bubble-2.png"}
          alt=''
        />
      </div>

      <Section tw='mt-[17rem] z-50'>
        <Wrapper tw='flex flex-col items-center '>
          <TitleHeading tw='ml-[0.2rem]'>Main Services</TitleHeading>

          <SecondHeading tw='xl:w-[40%] md:w-[50%] xs:w-[80%] leading-[2.8rem] ml-[0.2rem] mt-[0.7rem] tracking-[0.02rem]'>
            Learn services to focus on your beauty
          </SecondHeading>
          <Paragraph tw='w-[75%] mt-[1.2rem] ml-[0.14rem] '>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient amet, feugiat tellus sagittis, scelerisque
            eget nulla turpis.
          </Paragraph>
          <Cards tw='z-50'>
            {datas.map((data, index) => {
              return (
                <Card key={index}>
                  <div
                    tw='w-[10.375rem] h-[10.375rem] rounded-full overflow-hidden flex ml-[0.1rem] justify-center items-center'
                    css={[
                      css`
                        background: linear-gradient(
                          180deg,
                          #eef0ff 0%,
                          #ffffff 100%
                        );
                      `,
                    ]}
                  >
                    <Image
                      tw='w-[65%] ml-[0.1rem]'
                      src={window.location.origin + data.img}
                      alt='makeup'
                    />
                  </div>
                  <div tw="absolute bg-background-main top-0 left-0 w-full h-full -z-10"></div>
                  <div tw='flex flex-col items-center'>
                    <CardTitle tw='mt-[3.6rem] ml-[0.25rem]'>
                      {data.title}
                    </CardTitle>
                    <CardParagraph>{data.p}</CardParagraph>
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
