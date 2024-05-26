import tw from 'twin.macro'
import Block from '../../../components/Block'
const HeadingCategory = tw.h4`text-primary-mainColor font-semibold mt-[0.02rem]`
const CategoriesList = tw.ul`flex flex-col mt-[1.2rem] gap-y-[0.29rem]`
const CategoriesItem = tw.li`flex flex-col text-[0.88rem] tracking-[0.089rem] text-primary-textColor`
function Categories() {
  return (
    <Block tw="mt-[5.19rem] pb-[3.28rem]">
        <HeadingCategory>Categories</HeadingCategory>
        <CategoriesList>
            <CategoriesItem>Consultation</CategoriesItem>
            <CategoriesItem>Beauty</CategoriesItem>
            <CategoriesItem>Treatments</CategoriesItem>
            <CategoriesItem>News</CategoriesItem>
        </CategoriesList>
    </Block>
  )
}

export default Categories