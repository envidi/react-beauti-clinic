// import tw from 'twin.macro'
import tw from "twin.macro";
import Button from "./Button";
import Wrapper from "./Wrapper";
import NavMobile from "./NavMobile";
const ulStyles = tw`
  xl:gap-[2.9rem] md:gap-[1.5rem]
  [> li]:(lg:text-[1rem]  tracking-[0.09rem])`;

function Header() {
  return (
    <header tw='flex w-full justify-center'>
      {/* <div tw='container large-container'> */}
      <Wrapper>
        <nav tw='flex items-center lg:py-[2.3rem] md:py-4 xs:py-3 justify-between w-full gap-2'>
        <NavMobile />
          <div tw='w-full md:block hidden '>
            <img
              tw='xl:w-[16.4rem] md:w-[13.4rem] object-cover mt-1'
              src={window.location.origin + "/logo.png"}
              alt=''
            />
          </div>
          <div tw='md:flex md:gap-[1.5rem] xl:gap-[3.4rem] mt-[-0.5rem] hidden'>
            <ul
              css={ulStyles}
              tw='flex text-lg items-center text-primary-textColor '
            >
              <li tw='text-primary-mainColor flex items-center mr-[-0.25rem]'>
                Home <span tw='ml-[0.1rem] mt-[0.2rem]'> +</span>
              </li>
              <li>About</li>
              <li>Service</li>
              <li>Gallery</li>
              <li>Blog</li>
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
