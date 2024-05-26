import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet";
import Input from "../../../components/Input";
import RecentPost from "./RecentPost";
import Categories from "./Categories";
import CloudTags from "./CloudTags";
import SocialConnect from "./SocialConnect";
import Column from "../../../components/Column";
import Row from "../../../components/Row";
import { css } from "twin.macro";
import ImageSrc from "../../../components/ImageSrc";
import Button from "../../../components/Button";
import { Search } from "lucide-react";

function SheetMobile() {
  return (
    <Sheet>
      <SheetTrigger className=''>
        <Search size={20} />
      </SheetTrigger>
      <SheetContent className='bg-background-main p-0 w-[40rem] md:hidden xs:block'>
        <Column tw='basis-[30.67%] xs:block md:hidden h-screen overflow-auto py-[3rem] px-[1.5rem] '>
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
              tw='w-[78.6%] pl-[1.7rem] rounded-l-full py-[1.25rem] border-0 rounded-r-none outline-none focus:border focus:border-primary-footerColor'
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
                clx='xl:w-[34%]  md:w-[34%] xs:w-[32%]  mr-[0rem]'
                src='/blog/search-blog.png'
              />
            </Button>
          </Row>
          <RecentPost />
          <Categories />
          <CloudTags />
          <SocialConnect />
        </Column>
      </SheetContent>
    </Sheet>
  );
}

export default SheetMobile;
