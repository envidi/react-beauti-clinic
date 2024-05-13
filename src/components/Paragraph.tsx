import tw from "twin.macro";

// function Paragraph({ children, clx }: { children: string; clx: string }) {
//   const ParagraphText = tw.p`text-primary-textColor text-[0.8rem] tracking-[0.1rem] w-full text-center`;
//   return <ParagraphText tw={clx}>{children}</ParagraphText>;
// }
const Paragraph = tw.p`text-primary-textColor text-[1rem] tracking-[0.1rem] w-full text-center`;
export default Paragraph;
