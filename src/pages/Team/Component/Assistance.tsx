import "twin.macro";
import Wrapper from "../../../components/Wrapper";
import TitleHeading from "../../../components/TitleHeading";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import tw, { styled, css } from "twin.macro";
import Section from "../../../components/Section";
import Image from "../../../components/Image";
import Column from "../../../components/Column";
import Row from "../../../components/Row";

const Card = styled.div<{ large?: boolean }>(({ large }) => [
  tw`flex  xs:w-[88.07%]   sm:flex-row xs:flex-col hover:scale-100 items-center justify-between overflow-hidden relative  lg:px-[0.18rem] md:px-[0.33rem] xs:mx-auto sm:mx-0`, // Add base styles first
  css`
    
  `,
  large && tw``, // Then add conditional styles
]);
const Cards = tw(Column)`w-full mt-[7.1rem] gap-y-[4.96rem] `;
const CardTitle = tw.div`text-primary-mainColor text-[1.12rem] font-semibold`;
const CardNameTeam = tw.div`text-secondary-mainColor text-[1rem] font-semibold text-center`;
const CardParagraph = tw.div`text-primary-textColor leading-[1.35rem] text-[0.93rem] tracking-[0.06rem] ml-[0rem] text-center mt-[1.12rem] w-[79%]`;

const datas = [
  {
    id: 1,
    nameTeamate: "Lina Gustav",
    img: "/team/assistance-1.png",
    position: "Pharmacist",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
  },
  {
    id: 2,
    nameTeamate: "Adam White",
    img: "/team/assistance-2.png",
    position: "Finance",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
  },
  {
    id: 3,
    nameTeamate: "Jane Doe",
    img: "/team/assistance-3.png",
    position: "Marketer",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
  },
];
function Assistance() {
  return (
    <>
      <Section tw='mt-[9.6rem] z-20'>
        <Wrapper>
          <Column tw='items-center w-full '>
            <TitleHeading tw=' z-30 ml-[0.2rem]'>Assistance Team</TitleHeading>
            <SecondHeading tw='tracking-[0.03rem] mt-[0.35rem] z-30 font-semibold ml-[0.2rem]'>
              Meet the pro assistance
            </SecondHeading>
            <Paragraph tw=' mt-[1.3rem] z-30 ml-[0.2rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </Paragraph>
            <Cards>
              {datas.map((data, index) => {
                return (
                  <Card key={index} className='group group-hover:scale-100'>
                    <div tw='sm:basis-[39.94%] basis-full xs:w-full flex xs:justify-center sm:justify-start'>
                      <Image src={window.location.origin + data.img} alt='' />
                    </div>
                    {data && (
                      <div tw='absolute group-hover:bg-background-main top-0 left-0 w-full h-full -z-10'></div>
                    )}
                    <Column tw='justify-center items-start xl:basis-[43%] md:basis-[47%] sm:basis-[50%] xs:basis-[52%] sm:mt-[-0.79rem] xs:mt-[1.2rem]'>
                      <Row tw='w-full items-center xs:flex-row xs:justify-center sm:justify-start'>
                        <CardTitle tw='text-[1.13rem] tracking-[0.001rem] sm:text-left text-center'>
                          {data.nameTeamate}<span tw="ml-[0.21rem] mt-[-0.5rem] inline-block">/</span>
                        </CardTitle>
                        <CardNameTeam tw='ml-[0.3rem] mt-[0.09rem] italic text-[0.84rem] tracking-[0.018rem] text-primary-textColor font-normal sm:text-left text-center'>
                          {data.position}
                        </CardNameTeam>
                      </Row>

                      <CardParagraph tw='w-full tracking-[0.1rem] sm:text-left text-center text-[1rem] leading-[1.5rem]'>{data.p}</CardParagraph>
                    </Column>
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

export default Assistance;
