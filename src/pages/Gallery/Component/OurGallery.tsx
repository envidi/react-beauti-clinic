import "twin.macro";
import Section from "../../../components/Section";
import Wrapper from "../../../components/Wrapper";
import Column from "../../../components/Column";
import TitleHeading from "../../../components/TitleHeading";
import Row from "../../../components/Row";
import SecondHeading from "../../../components/SecondHeading";
import Paragraph from "../../../components/Paragraph";
import ImageSrc from "../../../components/ImageSrc";
const images = [
  {
    id: 1,
    image: "/gallery/image-1.png",
  },
  {
    id: 2,
    image: "/gallery/image-2.png",
  },
  {
    id: 3,
    image: "/gallery/image-3.png",
  },
  {
    id: 4,
    image: "/gallery/image-4.png",
  },
  {
    id: 5,
    image: "/gallery/image-5.png",
  },
  {
    id: 6,
    image: "/gallery/image-6.png",
  },
  {
    id: 7,
    image: "/gallery/image-7.png",
  },
  {
    id: 8,
    image: "/gallery/image-8.png",
  },
  {
    id: 9,
    image: "/gallery/image-9.png",
  },
  {
    id: 10,
    image: "/gallery/image-10.png",
  },
];

function OurGallery() {
  return (
    <Section tw="mt-[4.95rem]">
      <Wrapper>
        <Column tw="ml-[0.2rem] xs:items-center md:items-start">
          <TitleHeading tw='md:text-left'>Our Gallery</TitleHeading>
          <Row tw='justify-between'>
            <SecondHeading tw='md:text-left md:basis-[60%] font-semibold mt-[0.6rem] tracking-[0.025rem] leading-[2.8rem]'>
              Check out the collection pictures from our clinic
            </SecondHeading>
            <Paragraph tw='md:text-left md:basis-[37.39%] flex items-center xl:mt-[-0.6rem] sm:mt-[1.2rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Paragraph>
          </Row>
          <div tw='grid md:grid-cols-3 gap-x-[2.25rem] gap-y-[2.38rem] sm:grid-cols-2 xs:w-[80%] md:w-full  xs:grid-cols-1 mt-[5.55rem] justify-items-center'>
            {images.map((image) => {
              return (
                <div key={image.id}>
                  <ImageSrc src={image.image} clx='w-full' />
                </div>
              );
            })}
          </div>
          <Paragraph tw="md:text-left md:w-[60%] mt-[1.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim, <span tw="text-primary-footerColor font-bold">our teams</span>.
          </Paragraph>
        </Column>
      </Wrapper>
    </Section>
  );
}

export default OurGallery;
