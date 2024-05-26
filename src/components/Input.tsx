import tw, { css, styled } from "twin.macro";

const Input = styled.input`
    ${css`
      ${tw`bg-background-main outline-none border  border-[#D9DDFE] pl-[1.58rem] py-[1.15rem] rounded-[15px]`};

      &::placeholder {
        color: #c5c5c5;
        font-size: 1.01rem;
        letter-spacing:0.09rem
      }
    `}
  `;


export default Input;
