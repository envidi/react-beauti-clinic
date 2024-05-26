import tw, { css, styled } from "twin.macro";
import Column from "./Column";

const Block = styled(Column)(() => [
  tw`pl-[3.1rem] pr-[1.7rem] py-[3.5rem] pb-[4.1rem] rounded-[25px] mt-[1rem]`,
  css`
    box-shadow: -2px 4px 31px 9px #f2f4ff;
  `,
]);
export default Block;
