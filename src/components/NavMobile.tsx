import { useEffect, useRef, useState } from "react";
import tw, { styled } from "twin.macro";

const ulStyles = tw`
bg-background-main
  [> li]:(rounded-2xl pl-9 mx-3 transition-all border-b-[rgba(255, 255, 255, 0.1)] border-b hover:pl-10  hover:bg-secondary-mainColor  duration-300 py-1.5)
  [> li > a]:(block text-primary-mainColor hover:text-background-main text-[0.85rem] p-3 uppercase font-bold)
  [> li > a > span]:( mr-[0.5rem])`;
const menuStyle = tw`
    [> i]:(hover:cursor-pointer flex items-center justify-center bg-primary-mainColor lg:p-2 lg:px-3 xs:p-1 xs:px-2 text-background-main rounded text-sm)
`;
const MenuComponent = styled.div<{ open: boolean }>(({ open }) => [
  tw`flex fixed left-0 top-0 h-full duration-300 ease-in-out w-64  pt-3 flex-col translate-x-[-100%] bg-background-main shadow-lg`, // Add base styles first
  open && tw`translate-x-[0%] duration-300 ease-in-out`, // Then add conditional styles
]);
const arrayLinks = [
  {
    icon: <i className='fas fa-home'></i>,
    title: "Home",
  },
  {
    icon: <i className='fas fa-address-card'></i>,
    title: "About",
  },
  {
    icon: <i className='fas fa-cog'></i>,
    title: "Service",
  },
  {
    icon: <i className='fas fa-address-book'></i>,
    title: "Gallery",
  },
  {
    icon: <i className='fa-solid fa-book'></i>,
    title: "Blog",
  },
  {
    icon: <i className='fa-regular fa-address-book'></i>,
    title: "Contact",
  },
];

function NavMobile() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    // Thêm sự kiện click vào document
    document.addEventListener("click", handleClickOutside);

    // Cleanup: loại bỏ sự kiện khi component bị unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={menuRef} tw='md:hidden xs:block relative'>
      <button
        onClick={() => setOpen(!open)}
        tw='bg-none border-none'
        css={menuStyle}
      >
        <i className='fa-solid fa-bars '></i>
      </button>
      <MenuComponent open={open}>
        <button
          onClick={() => setOpen(!open)}
          className='absolute right-2 top-1'
        >
          <i className='fa-solid fa-xmark close-icon'></i>
        </button>
        <div className='mb-2 mt-2'>
          <img
            tw='w-32'
            style={{ marginLeft: "3.3rem" }}
            src={window.location.origin + "/logo.png"}
            alt=''
          />
        </div>
        <ul css={ulStyles} tw=''>
          {arrayLinks.map((link, index: number) => {
            return (
              <li key={index}>
                <a href='#'>
                  <span>{link.icon}</span>
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </MenuComponent>
    </div>
  );
}

export default NavMobile;
