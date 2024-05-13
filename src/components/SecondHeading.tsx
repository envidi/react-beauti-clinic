import tw from "twin.macro";
// function SecondHeading({children, clx}:{ children : React.ReactNode, clx : string}) {
//     const SecondHeadingText = tw.h2`text-primary-mainColor text-[1.8rem] tracking-[0.1rem] w-full text-center`;
//     return <SecondHeadingText tw={clx}>{children}</SecondHeadingText>;
// }
const SecondHeading = tw.h2`text-primary-mainColor text-[2.2rem] font-bold tracking-[0.1rem] w-full text-center`;
export default SecondHeading