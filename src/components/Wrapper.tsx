import tw, { styled } from "twin.macro";

// const Wrapper = tw.div`flex w-full max-w-[1440px] 2xl:px-[10rem] xl:pl-[10.2%] xl:pr-[10.45%] lg:pl-[7%] lg:pr-[7%] md:pl-[3%] md:pr-[3%] sm:px-[3%] xs:px-[3%]`
const Wrapper = styled.div<{ team?: boolean, header?: boolean }>(({ team, header }) => [
  tw`flex w-full max-w-[1440px] 2xl:px-[10rem] xl:pl-[10.2%] xl:pr-[10.45%] lg:pl-[7%] lg:pr-[7%] md:pl-[3%] md:pr-[3%] sm:px-[3%] xs:px-[3%]`, // Add base styles first
  team && tw`2xl:px-[10rem] xl:pl-[7.65%] xl:pr-[7.65%] lg:pl-[7%] lg:pr-[7%] md:pl-[3%] md:pr-[3%] sm:px-[3%] xs:px-[3%]`, // Then add conditional styles
  header && tw`max-w-[1660px] 2xl:px-[10rem] xl:pl-[10.2%] xl:pr-[10.45%] lg:pl-[7%] lg:pr-[7%] md:pl-[3%] md:pr-[3%] sm:px-[3%] xs:px-[3%]`, // Then add conditional styles
]);
export default Wrapper;
