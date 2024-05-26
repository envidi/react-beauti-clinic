import Button from "../../../components/Button";
import Column from "../../../components/Column";
import ImageSrc from "../../../components/ImageSrc";
import Row from "../../../components/Row";

import tw, { styled, css } from "twin.macro";

const Card = styled.div<{ large?: boolean }>(({ large }) => [
  tw`flex xs:w-10/12 md:w-full  hover:border-secondary-hoverCardHome relative flex-col z-50 items-start rounded-[50px]   xs:pb-[2.5rem] border-none `,
  css`
    z-index: 40;
  `,
  large && tw``, // Then add conditional styles
]);
const Cards = tw(
  Column,
)` justify-items-center xs:items-center md:items-start xl:gap-y-[5.875rem] lg:gap-y-[6.38rem] md:gap-y-[5.38rem] xs:gap-y-[4rem]  xl:pr-[0rem] xl:pl-[0.2rem] `;
const CardTitle = tw.div`text-primary-mainColor text-[1.12rem] font-semibold text-left tracking-[0.001rem] w-[90%]`;
const CardParagraph = tw.div`text-primary-textColor leading-[1.35rem] text-[0.93rem] tracking-[0.06rem] text-left mt-[0.8rem]`;

const datas = [
  {
    img: "/blog/card-blog-1.png",
    title: "How much does a consultation cost at our clinic?",
    folder: "Consultation",
    p: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
  },
  {
    img: "/blog/card-blog-2.png",
    title: "Watch out! don't choose the wrong beauty product",
    folder: "Beauty",
    p: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
  },
  {
    img: "/blog/card-blog-3.png",
    title: "About skin care you need to know",
    folder: "Treatments",
    p: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
  },
];
function CardBlog() {
  return (
    <Cards tw='z-40 md:basis-[64.14%] md:w-[60%] sm:w-[85%] xs:w-full'>
      {datas.map((data, index) => {
        return (
          <Card key={index}>
            <div tw='w-full z-50'>
              <ImageSrc
                src={data.img}
                alt='makeup'
                clx='object-cover xl:w-full w-full'
              />
            </div>
            <div tw='absolute bg-background-main top-0 left-0 w-full h-full -z-10'></div>

            <div
              css={[
                css`
                  box-shadow: 10px 13px 80px 14px #f2f4ff;
                `,
              ]}
              tw='flex flex-col items-start pl-[4.7rem] pr-[1.5rem] pt-[3.5rem] xl:pb-[6.27rem] xs:pb-[4.5rem] rounded-b-[50px]'
            >
              <Row tw='gap-y-5 flex-row items-center'>
                <ImageSrc src='/blog/folder.png' />
                <span tw='ml-[0.95rem] mt-[0.1rem] font-semibold text-secondary-mainColor'>
                  {data?.folder || ""}
                </span>
              </Row>
              <CardTitle tw='mt-[1.08rem] tracking-[0.001rem]  md:text-[2.25rem] xs:text-[1.7rem] md:leading-[2.8rem] '>
                {data.title}
              </CardTitle>
              <CardParagraph tw='leading-[1.5rem] mt-[1.37rem] tracking-[0.09rem] text-[1.02rem]  text-left w-[94%]'>
                {data.p}
              </CardParagraph>
              <Button
                tw='flex border-none w-fit p-0 text-[1rem] pl-[3.8rem] pr-[2.89rem] py-[1.05rem] tracking-[0.1rem] font-semibold mt-[2.2rem] items-center'
                css={[
                  css`
                    box-shadow: 0px 17px 22px 0px #ffedf6;
                  `,
                ]}
                variant='main'
              >
                Read More
                <ImageSrc
                  src='/blog/caret.png'
                  clx='xl:w-[0.63rem] md:w-[0.5rem] xs:w-[0.5rem]  ml-[0.5rem]'
                />
              </Button>
            </div>
          </Card>
        );
      })}
    </Cards>
  );
}

export default CardBlog;
