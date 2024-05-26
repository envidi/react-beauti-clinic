import tw, { styled } from "twin.macro";
import Block from "../../../components/Block";
const HeadingTag = tw.h4`text-primary-mainColor font-semibold mt-[0.02rem]`;
const Tags = tw.ul`grid grid-cols-3 mt-[1.265rem] gap-x-[0.7rem] ml-[-0.2rem] gap-y-[1.3rem]`;
// const Tag = tw.li`flex flex-col text-[0.9rem] tracking-[0.069rem] text-primary-textColor`;
const Tag = styled.li`
  box-shadow: 0px 4px 17px 0px #eef0ff;
  ${tw`text-[0.88rem] tracking-[0.08rem] text-primary-textColor rounded-[50px] text-center py-[0.1rem]`}
`;
const tags = [
  "beauty",
  "cute",
  "skin",
  "glow",
  "style",
  "clinic",
  "style",
  "great",
  "cute",
];
function CloudTags() {
  return (
    <Block tw='mt-[5.2rem] pr-[2.75rem] pb-[3.6rem]'>
      <HeadingTag>Cloud Tags</HeadingTag>
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
    </Block>
  );
}

export default CloudTags;
