import 'twin.macro'
import Column from "../../components/Column";
import Row from "../../components/Row";
import Section from "../../components/Section";
import Wrapper from "../../components/Wrapper";
import CardBlog from "./Component/CardBlog";
import IntroduceBlog from "./Component/IntroduceBlog";
import RecentPost from "./Component/RecentPost";
import Categories from "./Component/Categories";
import CloudTags from "./Component/CloudTags";
import SocialConnect from "./Component/SocialConnect";
import SearchBar from "./Component/SearchBar";
import Pagination from "./Component/Pagination";
function Blog() {
  return (
    <>
      <IntroduceBlog />
      <Section tw='mt-[1.35rem] mb-[0rem] z-50'>
        <Wrapper tw='flex flex-col items-center'>
          <Row tw='w-full mt-[5.45rem] md:justify-between xs:items-center md:items-start'>
            <CardBlog />
            <Column tw='basis-[30.67%] md:block xs:hidden'>
              <SearchBar />
              <RecentPost />
              <Categories />
              <CloudTags />
              <SocialConnect />
            </Column>
          </Row>
          <Pagination />
        </Wrapper>
      </Section>
    </>
  );
}

export default Blog;
