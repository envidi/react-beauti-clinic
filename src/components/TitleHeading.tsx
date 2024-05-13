import tw from "twin.macro";
// function TitleHeading({children, clx=''}:{ children : React.ReactNode, clx : string}) {
//   const TitleHeadingText = tw.h4`text-secondary-mainColor text-[1rem] tracking-[0.1rem] w-full text-center`;
//   return <TitleHeadingText tw='flex'>{children}</TitleHeadingText>;
// }
const TitleHeading = tw.h4`text-secondary-mainColor font-semibold text-[1rem] tracking-[0.001rem] w-full text-center`;

export default TitleHeading;
