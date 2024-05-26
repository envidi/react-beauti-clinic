import Row from "../../../components/Row";
import { css } from "twin.macro";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ImageSrc from "../../../components/ImageSrc";

function SearchBar() {
  return (
    <Row
      css={[
        css`
          box-shadow: -2px 4px 31px 9px #f2f4ff;
        `,
      ]}
      tw='md:justify-end xs:justify-center w-full mt-[0rem] rounded-full flex-row'
    >
      <Input
        placeholder='Search here ...'
        tw='w-[78.6%] pl-[1.7rem] outline-none rounded-l-full py-[1.25rem] border-0 focus:border focus:border-primary-footerColor rounded-r-none'
        css={[
          css`
            &::placeholder {
              letter-spacing: 0.095rem;
            }
          `,
        ]}
      />
      <Button tw='flex-1 px-0 bg-primary-footerColor rounded-r-full rounded-l-none'>
        <ImageSrc
          clx='xl:w-[34%]  md:w-[34%] xs:w-[20%]  mr-[0rem]'
          src='/blog/search-blog.png'
        />
      </Button>
    </Row>
  );
}

export default SearchBar;
