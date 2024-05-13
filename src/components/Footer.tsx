import tw, { styled, css } from "twin.macro";
import Wrapper from "./Wrapper";
const BackgroundFooter = styled.div`
  ${css`
    position: relative;
    width: 100%;
    margin-top: 3.6rem;
    background-image: url(${window.location.origin + '/Footer_BG.png'});
    background-repeat: no-repeat;
    height: 50.8vw;
    background-position: center;
    max-width: 1440px;
    ${tw``};
  `}
`;
const UlStyles = tw.ul`
mt-[1.8rem] flex flex-col gap-[0.7rem] ml-[0.1rem]
  [> li]:(block tracking-[0.1rem])
  [> li >i]:(mr-[0.25rem] text-[0.8rem])`
const IconFooter = tw.div`
  [> div > i]:( text-[1.52rem])
  `
function Footer() {
  return (
    <footer tw='w-full justify-center flex items-start'>
      <BackgroundFooter tw="lg:bg-contain xs:bg-cover 2xl:h-auto 2xl:py-[10rem] lg:h-[50.8vw] xs:h-auto xs:py-[6vw] lg:py-[2vw]">
        <div tw='absolute bottom-0 w-full -z-10 h-[20rem] bg-secondary-footerColor'></div>
        <Wrapper tw='flex flex-col 2xl:mt-[10rem] xl:mt-[13.1rem] lg:mt-[8.3rem] md:mt-[5.3rem] xs:mt-[2.3rem]'>
          <a href='#' tw='absolute bottom-[11.4rem] rounded-md text-background-main right-[4rem] w-[2.3rem] h-[2.3rem] bg-secondary-mainColor flex justify-center items-center'>
            <i className='fa-solid fa-arrow-up'></i>
          </a>
          <div className='grid lg:grid-cols-[2fr_1fr_1fr] xs:grid-cols-2 gap-y-7 text-background-main'>
            <div tw='flex flex-col xs:items-center lg:items-start col-span-2 lg:col-span-1'>
              <img tw="w-[16.3rem] object-cover mt-[0.9rem] ml-[0.1rem]" src={window.location.origin + '/Footer Logo.png'} alt='' />
              <p tw='ml-[2.16rem] mt-[2.2rem] tracking-[0.105rem]'>
                Beautice is a Beauty Clinic WordPress Theme.
              </p>
              <p tw='ml-[2.16rem] tracking-[0.1rem] text-[0.85rem] mt-[1.4rem] italic'>
                Baker Steet 101, NY, United States.
              </p>
              <p tw='ml-[2.16rem] flex gap-[2.7rem] text-[0.83rem] tracking-[0.11rem] mt-[0.3rem] italic'>
                <span>+521 569 8966.</span>
                <span>
                  <a href='#' tw="decoration-solid underline">
                    mail@company.com.
                  </a>
                </span>
              </p>
            </div>
            <div tw='flex flex-col lg:ml-[3.35rem] col-span-1 xs:items-center lg:items-start'>
              <h5 tw="text-[1.1rem] tracking-[0.11rem]">Pages</h5>
              <UlStyles  >
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
              <h5 tw="text-[1.1rem] tracking-[0.14rem]">Informations</h5>
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
          <div tw='flex lg:justify-between md:justify-evenly xs:flex-col md:flex-row xs:items-center xs:gap-y-5 lg:mt-[8.5rem] md:mt-[4.7rem] xs:mt-[2.7rem] text-background-main pl-[0.1rem]'>
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
