// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "twin.macro";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";
import ImageSrc from "../ImageSrc";
import Paragraph from "../Paragraph";
import Row from "../Row";
import Column from "../Column";
const slides = [
  {
    id: 1,
    avatar: "/team/slide-1.png",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
    star: 5,
  },
  {
    id: 2,
    avatar: "/team/slide-2.png",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
    star: 5,
  },
  {
    id: 3,
    avatar: "/team/slide-3.png",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
    star: 5,
  },
];

export default function SwiperCustom() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        {slides.map((slide) => {
          return (
            <div key={slide.id}>
              <SwiperSlide>
                <Column tw='w-full items-center gap-y-[2.1rem]'>
                  <div tw='w-[9.2%]'>
                    <ImageSrc
                      src={slide.avatar}
                      clx='object-cover w-full ml-[0.15rem]'
                    />
                  </div>
                  <Paragraph tw='text-[0.85rem] w-[70%] mt-[0.7rem] leading-[1.31rem] ml-[0.4rem]'>
                    {slide.paragraph}
                  </Paragraph>
                  <Row tw='gap-x-[0.7rem] ml-[0.2rem] xs:flex-row'>
                    {Array.from(
                      { length: slide.star },
                      (_, index) => index + 1,
                    ).map((_, index) => {
                      return (
                        <div key={index}>
                          <ImageSrc src='/team/star.png' />
                        </div>
                      );
                    })}
                  </Row>
                </Column>
              </SwiperSlide>
            </div>
          );
        })}
      
      </Swiper>
    </>
  );
}
