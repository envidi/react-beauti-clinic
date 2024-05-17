import tw, { TwStyle, styled } from "twin.macro";

type ButtonVariant = "main" | "outline" | "large";

interface ButtonProps {
  variant?: ButtonVariant;
}
const buttonVariants: Record<ButtonVariant, TwStyle> = {
  // Named class sets
  main: tw`bg-secondary-mainColor`,
  outline: tw`bg-none border`,
  large: tw`py-4 px-[2.6rem] bg-secondary-mainColor`,
};
const Button = styled.button<ButtonProps>(() => [
  // Return a function here
  tw`flex w-full justify-center items-center lg:px-[2.5rem] md:px-[1.5rem]  py-3 text-[1.07rem] tracking-[0.06rem] text-background-main rounded-[50px]`,
  ({ variant = "main" }) => buttonVariants[variant], // Grab the variant style via a prop
]);

// const Button = styled.button<{large ?: boolean, clx?: string, normal?: boolean}>(({ large, clx ='', normal }) => [
//   tw`flex w-full bg-secondary-mainColor justify-center items-center lg:px-[2.5rem] md:px-[1.5rem]  py-3 text-[1.07rem] tracking-[0.06rem] text-background-main rounded-[50px]`, // Add base styles first
//   clx && tw`${clx}`, // Then add conditional styles
//   large && tw`py-4 px-[2.6rem] `, // Then add conditional styles
//   normal && tw`flex w-full items-center tracking-[0.06rem]  bg-none `, // Then add conditional styles
// ])

export default Button;
