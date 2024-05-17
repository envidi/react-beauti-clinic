import tw, { styled, css } from "twin.macro";
import Wrapper from "../../../components/Wrapper";
import Image from "../../../components/Image";
const BackgroundFooter = styled.div`
  ${css`
    position: relative;
    width: 100%;
    margin-top: 3.6rem;
    background-image: url(${window.location.origin + "/Footer_BG_1440.png"});
    background-repeat: no-repeat;
    height: 50.8vw;

    ${tw``};
  `}
`;
const UlStyles = tw.ul`
lg:mt-[1.8rem] xs:mt-[1.1rem] flex flex-col gap-[0.7rem] lg:ml-[0.1rem]
  [> li]:(block tracking-[0.1rem])
  [> li >i]:(mr-[0.25rem] text-[0.8rem])`;
const IconFooter = tw.div`
  [> div > i]:( text-[1.52rem])
  `;
const HeadingFooter = tw.h5`text-[1.1rem]`;
const NoteFooter = tw.p`lg:ml-[2.16rem] italic`;
function Footer() {
  return (
    <footer tw='w-full justify-center flex items-start'>
      <BackgroundFooter tw='lg:bg-contain 3xl:bg-cover xs:bg-center 2xl:bg-center 3xl:bg-top xs:bg-cover 2xl:h-auto 2xl:py-[10rem] lg:h-[50.8vw] xs:h-auto xs:py-[6vw] lg:py-[2vw]'>
        <div tw='absolute bottom-0 w-full -z-10 h-[20rem] bg-secondary-footerColor'></div>
        <Wrapper tw='flex flex-col 2xl:mt-[10rem] xl:mt-[14.56vw] lg:mt-[8.3rem] mx-auto md:mt-[5.3rem] xs:mt-[2.3rem]'>
          <a
            href='#'
            tw='absolute bottom-[11.4rem] rounded-md text-background-main right-[4rem] w-[2.3rem] h-[2.3rem] bg-secondary-mainColor flex justify-center items-center'
          >
            <i className='fa-solid fa-arrow-up'></i>
          </a>
          <div className='grid lg:grid-cols-[2fr_1fr_1fr] xs:grid-cols-2 xs:gap-y-14 text-background-main'>
            <div tw='flex flex-col xs:items-center lg:items-start col-span-2 lg:col-span-1'>
              <Image
                tw='w-[16.3rem] mt-[0.9rem] ml-[0.1rem]'
                src={window.location.origin + "/Footer Logo.png"}
                alt=''
              />
              <NoteFooter tw='md:text-left text-center  mt-[2.2rem] not-italic tracking-[0.105rem]'>
                Beautice is a Beauty Clinic WordPress Theme.
              </NoteFooter>
              <NoteFooter tw=' tracking-[0.1rem] text-[0.85rem] mt-[1.4rem] italic'>
                Baker Steet 101, NY, United States.
              </NoteFooter>
              <NoteFooter tw=' flex gap-[2.7rem] text-[0.83rem] tracking-[0.11rem] mt-[0.3rem] italic'>
                <span>+521 569 8966.</span>
                <span>
                  <a href='#' tw='decoration-solid underline'>
                    mail@company.com.
                  </a>
                </span>
              </NoteFooter>
            </div>
            <div tw='flex flex-col lg:ml-[3.35rem] col-span-1 xs:items-center lg:items-start'>
              <HeadingFooter tw='tracking-[0.11rem]'>Pages</HeadingFooter>
              <UlStyles>
                <li>
                  <i className='fa-solid fa-caret-right'></i> Home
                </li>
                <li>
                  <i className='fa-solid fa-caret-right'></i> About
                </li>
                <li>
                  <i className='fa-solid fa-caret-right'></i> Services
                </li>
                <li>
                  <i className='fa-solid fa-caret-right'></i> Gallery
                </li>
                <li>
                  <i className='fa-solid fa-caret-right'></i> Team
                </li>
              </UlStyles>
            </div>
            <div tw='flex flex-col lg:ml-[4.45rem] col-span-1 xs:items-center lg:items-start'>
              <HeadingFooter tw='tracking-[0.14rem]'>
                Informations
              </HeadingFooter>
              <UlStyles>
                <li>
                  <i className='fa-solid fa-caret-right'></i> Terms & conditions
                </li>
                <li>
                  <i className='fa-solid fa-caret-right'></i> Privacy policy
                </li>
                <li>
                  <i className='fa-solid fa-caret-right'></i> Blog
                </li>
                <li>
                  <i className='fa-solid fa-caret-right'></i> Contact
                </li>
              </UlStyles>
            </div>
          </div>
          <div tw='flex lg:justify-between md:justify-evenly xs:flex-col md:flex-row xs:items-center xs:gap-y-5 lg:mt-[8.5rem] xl:mt-[9.4vw] 2xl:mt-[8.5rem] md:mt-[4.7rem] xs:mt-[2.7rem] text-background-main pl-[0.1rem]'>
            <IconFooter tw='flex gap-[2.92rem] mt-[0.42rem]'>
              <div>
                <i className='fa-brands fa-facebook'></i>
              </div>
              <div>
                <i className='fa-brands fa-twitter'></i>
              </div>
              <div>
                <i className='fa-brands fa-linkedin-in'></i>
              </div>
              <div>
                <i className='fa-brands fa-youtube'></i>
              </div>
              <div>
                <i className='fa-brands fa-instagram'></i>
              </div>
            </IconFooter>
            <div tw='text-[0.95rem] tracking-[0.122rem] mr-[-0.09rem]'>
              © AltDesain Studio 2021 - All right reserved.
            </div>
          </div>
        </Wrapper>
      </BackgroundFooter>
    </footer>
  );
}

export default Footer;
