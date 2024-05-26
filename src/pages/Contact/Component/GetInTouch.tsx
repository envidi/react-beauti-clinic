import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import tw, { styled, css } from "twin.macro";
import Section from "../../../components/Section";
import Image from "../../../components/Image";
import Column from "../../../components/Column";
const Card = styled.div<{ mid?: boolean }>(({ mid }) => [
  tw`flex xs:w-2/3 md:w-full  flex-col hover:scale-100 items-center overflow-hidden relative rounded-[42px] lg:px-[0.03rem] md:px-[1.33rem] pt-[4.95rem] pb-[4.4rem]`, // Add base styles first
  mid &&
    css`
      box-shadow: 0px 25px 50px 25px #f6f7ff;
    `,
  mid && tw`bg-background-main `, // Then add conditional styles
]);
const Cards = tw.div`grid md:grid-cols-[26%_34.9%_26%] xs:grid-cols-1 justify-items-center mt-[6rem] justify-center gap-x-[0.8rem]`;
const CardTitle = tw.div`text-primary-mainColor text-[1.12rem] font-semibold`;
const CardNameTeam = tw.div`text-secondary-mainColor text-[1rem] font-semibold text-center`;
const CardParagraph = tw.div`text-primary-textColor leading-[1.35rem] text-[0.93rem] tracking-[0.06rem] ml-[0rem] text-center mt-[1.12rem] w-[79%]`;

const datas = [
  {
    id: 1,
    nameTeamate: "101 Baker Street, NY",
    img: "/Contact/map-marker-alt.png",
    position: "Address",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    id: 2,
    nameTeamate: "+896 120 5889",
    img: "/Contact/phone-alt.png",
    position: "Phone",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    id: 3,
    nameTeamate: "mail@company.com",
    img: "/Contact/mail-bulk.png",
    position: "Mail",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
];
function GetInTouch() {
  return (
    <>
      <Section tw='mt-[6.9rem] mb-[3.4rem]'>
        <Wrapper team={true}>
          <Column tw='items-center w-full'>
            <TitleHeading tw='ml-[0rem]'>Get in Touch</TitleHeading>
            <SecondHeading tw='tracking-[0.025rem] mt-[0.35rem] ml-[0rem] font-semibold '>
              Get direct handling by us
            </SecondHeading>
            <Paragraph tw='ml-[0.1rem] mt-[1.3rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </Paragraph>
            <Cards>
              {datas.map((data, index) => {
                return (
                  <Card
                    key={index}
                    className='group group-hover:scale-100'
                    mid={index === 1}
                  >
                    <div tw='w-[4.05rem] h-[4.05rem] rounded-full'>
                      <Image
                        tw='w-full'
                        src={window.location.origin + data.img}
                        alt=''
                      />
                    </div>
                    {data && (
                      <div tw='absolute   top-0 left-0 w-full h-full -z-10'></div>
                    )}
                    <div tw='mt-[2.8rem] flex flex-col items-center'>
                      <CardNameTeam tw='ml-[0.1rem]'>
                        {data.position}
                      </CardNameTeam>
                      <CardTitle tw='ml-[0.1rem] mt-[0.6rem] text-[1.505rem]'>
                        {data.nameTeamate}
                      </CardTitle>
                      <CardParagraph
                        css={[tw`w-full`, index === 1 && tw`w-[75%]`]}
                        tw=' mt-[0.58rem] text-[0.87rem] tracking-[0.09rem] leading-[1.32rem]'
                      >
                        {data.p}
                      </CardParagraph>
                    </div>
                  </Card>
                );
              })}
            </Cards>
          </Column>
        </Wrapper>
      </Section>
    </>
  );
}

export default GetInTouch;
