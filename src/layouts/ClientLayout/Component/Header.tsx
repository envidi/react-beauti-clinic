// import tw from 'twin.macro'
import { Link, useLocation } from "react-router-dom";
import tw, { TwStyle } from "twin.macro";
import Button from "../../../components/Button";
import Wrapper from "../../../components/Wrapper";
import NavMobile from "../../../components/NavMobile";

type WrapperVariant = "light" | "dark";
interface UlProps {
  variant?: WrapperVariant;
}
interface LiProps {
  livariant?: WrapperVariant;
}
const ulvariants: Record<WrapperVariant, TwStyle> = {
  dark: tw` text-primary-textColor`,
  light: tw` text-secondary-secondNav`,
};
const livariants: Record<WrapperVariant, TwStyle> = {
  dark: tw` text-primary-mainColor`,
  light: tw` text-background-main`,
};
const styles = {
  ul: ({ variant = "dark" }: UlProps) => [
    tw`flex text-lg items-center xl:gap-[2.9rem] md:gap-[1.5rem]`,
    ulvariants[variant], // Grab the variant style via a prop
  ],
  li: ({ livariant = "dark" }: LiProps) => [
    tw`lg:text-[1rem]  tracking-[0.09rem]`,
    livariants[livariant], // Grab the variant style via a prop
  ],
};

function Header() {
  const location = useLocation();
  const logo =
    location.pathname === "/second" ? "/Second_logo.png" : "/logo.png";
  const variant = location.pathname === "/second" ? "light" : "dark";
  const livariant = location.pathname === "/second" ? "light" : "dark";
  return (
    <header tw='flex w-full justify-center'>
      {/* <div tw='container large-container'> */}
      <Wrapper header={true}>
        <nav tw='flex items-center lg:py-[2.3rem] md:py-4 xs:py-3 justify-between w-full gap-2'>
          <NavMobile />
          <div tw='w-full md:block hidden '>
            <img
              tw='xl:w-[16.4rem] md:w-[13.4rem] object-cover mt-1'
              src={window.location.origin + logo}
              alt=''
            />
          </div>
          <div tw='md:flex md:gap-[1.5rem] xl:gap-[3.4rem] mt-[-0.5rem] hidden'>
            <ul css={styles.ul({ variant })}>
              <Link to={"/"}>
                <li
                  css={styles.li({ livariant })}
                  tw='flex items-center mr-[-0.25rem]'
                >
                  Home <span tw='ml-[0.1rem] mt-[0.2rem]'> +</span>
                </li>
              </Link>
              <Link to={"/about"}>
                <li tw='lg:text-[1rem]  tracking-[0.09rem]'>About</li>
              </Link>
              <li tw='lg:text-[1rem]  tracking-[0.09rem]'>Service</li>
              <li tw='lg:text-[1rem]  tracking-[0.09rem]'>Gallery</li>
              <li tw='lg:text-[1rem]  tracking-[0.09rem]'>Blog</li>
            </ul>

            <Button>Contact</Button>
          </div>
        </nav>
      </Wrapper>

      {/* </div> */}
    </header>
  );
}

export default Header;
