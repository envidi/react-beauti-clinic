// import tw from 'twin.macro'
import { Link, useLocation } from "react-router-dom";
import tw, { TwStyle, styled } from "twin.macro";
import Button from "../../../components/Button";
import Wrapper from "../../../components/Wrapper";
import NavMobile from "../../../components/NavMobile";
import ImageSrc from "../../../components/ImageSrc";

type WrapperVariant = "light" | "dark";
interface UlProps {
  variant?: WrapperVariant;
}
interface LiProps {
  livariant?: WrapperVariant;
}
const ulvariants: Record<WrapperVariant, TwStyle> = {
  dark: tw` text-primary-textColor xl:gap-[2.9rem]`,
  light: tw` text-secondary-secondNav xl:gap-[2.82rem]`,
};
const currentLiVariants: Record<WrapperVariant, TwStyle> = {
  dark: tw` text-primary-mainColor tracking-[0.11rem] font-semibold`,
  light: tw` text-background-main tracking-[0.1rem] mt-[-0.1rem]`,
};
const liVariants: Record<WrapperVariant, TwStyle> = {
  dark: tw`lg:text-[1rem]  tracking-[0.1rem]`,
  light: tw`lg:text-[1rem]  tracking-[0.1rem]`,
};
const styles = {
  ul: ({ variant = "dark" }: UlProps) => [
    tw`flex text-lg items-center  md:gap-[1.5rem]`,
    ulvariants[variant], // Grab the variant style via a prop
  ],
  currentLi: ({ livariant = "dark" }: LiProps) => [
    tw`lg:text-[0.97rem]  relative font-medium`,
    currentLiVariants[livariant], // Grab the variant style via a prop
  ],
  li: ({ livariant = "dark" }: LiProps) => [
    tw`lg:text-[0.97rem]  relative font-medium`,
    liVariants[livariant], // Grab the variant style via a prop
  ],
};
const LiHome = styled.li<{ isActive: boolean }>(({ isActive }) => [
  tw`hover:text-background-main hover:bg-secondary-mainColor duration-200 ease-in-out text-left px-[1rem] py-2`, // Add base styles first
  isActive && tw`bg-secondary-mainColor text-background-main`, // Then add conditional styles
]);
const dataLi = [
  {
    id: 1,
    page: "Home",
    link: "#",
    url: "/",
  },

  {
    id: 3,
    page: "About",
    link: "/about",
  },
  {
    id: 4,
    page: "Service",
    link: "/service",
  },
  {
    id: 5,
    page: "Gallery",
    link: "/gallery",
  },
  {
    id: 6,
    page: "Blog",
    link: "/blog",
  },
];

function Header() {
  const location = useLocation();
  const logo =
    location.pathname === "/second" ? "/Second_logo.png" : "/logo.png";
  const variant = location.pathname === "/second" ? "light" : "dark";
  const livariant = location.pathname === "/second" ? "light" : "dark";
  const locationName = location.pathname;
  const isPage = (page: string, currentPage: string) => page == currentPage;
  const isLocationSecond = locationName == "/second";
  const isNotLocationSecond = locationName !== "/second";
  const isHomeAndLocation = (page: string) =>
    isPage(page, "Home") && isLocationSecond
      ? "flex items-center mr-[-0.15rem] mt-[-0.1rem]"
      : "";
  const isHomeAndNotLocation = (page: string) =>
    isPage(page, "Home") && isNotLocationSecond
      ? "flex items-center mr-[-0.3rem]"
      : "";
  const isAboutAndLocation = (page: string) =>
    isPage(page, "About") && isLocationSecond
      ? "mt-[-0.1rem] mr-[-0.1rem]"
      : "";
  const isAboutAndNotLocation = (page: string) =>
    isPage(page, "About") && isNotLocationSecond ? "mr-[-0.22rem]" : "";
  return (
    <header tw='flex w-full justify-center'>
      {/* <div tw='container large-container'> */}
      <Wrapper header={true}>
        <nav tw='flex items-center lg:py-[2.3rem] md:py-4 xs:py-3 justify-between w-full gap-2'>
          <NavMobile />
          <div tw='w-full md:block hidden '>
            <ImageSrc
              clx={` md:w-[13.4rem] object-cover mt-1 ${
                location.pathname === "/second"
                  ? "xl:w-[16.2rem] ml-[0.1rem]"
                  : "xl:w-[16.4rem]"
              }`}
              src={logo}
              alt=''
            />
          </div>
          <div
            className={`md:flex md:gap-[1.5rem] hidden ${
              location.pathname === "/second"
                ? "xl:gap-[3.3rem] mt-[-0.00rem]"
                : "xl:gap-[3.25rem] mt-[-0.35rem]"
            }`}
          >
            <ul css={styles.ul({ variant })}>
              {dataLi.map((li) => {
                return (
                  <Link to={li.link} key={li.id}>
                    <li
                      css={
                        locationName === li.link || locationName === li.url
                          ? styles.currentLi({ livariant })
                          : styles.li({ livariant })
                      }
                      className={`group after:absolute after:content-['']  after:top-[-0.9rem] after:left-[-0.8rem] after:w-[6rem] after:h-[3.8rem]  after:bg-none after:z-40 ${isHomeAndLocation(
                        li.page,
                      )} ${isAboutAndLocation(li.page)} 
                      ${isHomeAndNotLocation(li.page)} 
                      ${isAboutAndNotLocation(li.page)}`}
                    >
                      {li.page}{" "}
                      {li.page == "Home" && (
                        <span tw='ml-[0.1rem] mt-[0.15rem]'> +</span>
                      )}
                      {li.page == "Home" && (
                        <ul tw='absolute top-9 z-50 xs:hidden shadow-lg group-hover:block  left-[-1rem] w-fit h-fit bg-background-main  text-secondary-mainColor rounded-md overflow-hidden'>
                          <Link to={"/"}>
                            <LiHome isActive={locationName === "/"}>
                              Overview
                            </LiHome>
                          </Link>
                          <Link to={"/second"}>
                            <LiHome isActive={locationName === "/second"}>
                              Advice
                            </LiHome>
                          </Link>
                          <Link to={"/team"}>
                            <LiHome isActive={locationName === "/team"}>
                              Team
                            </LiHome>
                          </Link>
                        </ul>
                      )}
                    </li>
                  </Link>
                );
              })}
            </ul>
            {locationName == "/contact" && (
              <Link to={"/contact"}>
                <Button tw='py-[0.89rem] text-primary-mainColor pt-[0.9rem] text-[0.95rem] tracking-[0.13rem]'>
                  Contact
                </Button>
              </Link>
            )}
            {locationName !== "/contact" && (
              <Link to={"/contact"}>
                <Button tw='py-[0.89rem] pt-[0.9rem] text-[0.95rem] tracking-[0.13rem]'>
                  Contact
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </Wrapper>

      {/* </div> */}
    </header>
  );
}

export default Header;
