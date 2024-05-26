import tw from "twin.macro";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
import ImageSrc from "../../../components/ImageSrc";
import Paragraph from "../../../components/Paragraph";
import Block from "../../../components/Block";
const TitlePost = tw.h3`text-primary-mainColor text-[0.99rem] font-semibold tracking-[0.01rem]`;
const Posts = tw(Column)`w-full mt-[1.74rem] gap-y-[1.6rem]`;
const Post = tw(Row)`justify-between flex-row`;

function RecentPost() {
  return (
    <Block tw='mt-[4.81rem]'>
      <TitlePost>Recent Posts</TitlePost>
      <Posts>
        <Post>
        <Column tw="md:basis-[30%] xs:basis-[30%]">
            <ImageSrc src='/blog/recent-post-1.png' />
          </Column>
          <Column tw='basis-[60.5%] items-start justify-between'>
            <div tw='text-secondary-mainColor text-[0.87rem] font-semibold leading-[1.1rem] tracking-[0.09rem]'>
              01 jan 2021
            </div>
            <Paragraph tw='text-left text-[0.75rem] tracking-[0.075rem] mt-[-0rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </Paragraph>
          </Column>
        </Post>
        <Post>
          <Column tw='md:basis-[30%] xs:basis-[30%]'>
            <ImageSrc src='/blog/recent-post-2.png' />
          </Column>
          <Column tw='basis-[60.5%] items-start justify-between'>
            <div tw='text-secondary-mainColor text-[0.87rem] font-semibold leading-[1.1rem] tracking-[0.09rem]'>
              01 jan 2021
            </div>
            <Paragraph tw='text-left text-[0.75rem] tracking-[0.075rem] mt-[-0rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </Paragraph>
          </Column>
        </Post>
        <Post>
          <Column tw='md:basis-[30%] xs:basis-[30%]'>
            <ImageSrc src='/blog/recent-post-3.png' />
          </Column>
          <Column tw='basis-[60.5%] items-start justify-between'>
            <div tw='text-secondary-mainColor text-[0.87rem] font-semibold leading-[1.1rem] tracking-[0.09rem]'>
              01 jan 2021
            </div>
            <Paragraph tw='text-left text-[0.75rem] tracking-[0.075rem] mt-[-0rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </Paragraph>
          </Column>
        </Post>
      </Posts>
    </Block>
  );
}

export default RecentPost;
