import Column from "../../../components/Column";
import SecondHeading from "../../../components/SecondHeading";
import Section from "../../../components/Section";
import Wrapper from "../../../components/Wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import "twin.macro";

function FAQService() {
  return (
    <Section tw='mt-[7.05rem] w-full mb-[1.9rem]'>
      <Wrapper tw='w-full'>
        <Column tw='items-center w-full'>
          <SecondHeading tw='font-semibold xl:ml-[0.7rem] tracking-[0.03rem]'>
            Services FAQ’s
          </SecondHeading>
          <Accordion
            type='single'
            collapsible
            className='w-full mt-[4.45rem] lg:px-[5.15rem] lg:pl-[5.38rem] md:px-[1.38rem]'
            defaultValue='item-1'
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger className='pr-[1.4rem] text-left no-underline data-[state=open]:border-[black]  data-[state=open]:border-b md:pl-[2.2rem] xs:pl-[1.2rem] text-primary-mainColor text-[1.01rem] font-semibold tracking-[0.095rem] py-[0.9rem]'>
                Is beauty consultation handled thoroughly?
              </AccordionTrigger>
              <AccordionContent className='bg-[#F6F7FF] rounded-b-[20px] italic tracking-[0.095rem]  text-primary-textColor pt-[3.3rem] pb-[3.7rem]  md:pl-[4.8rem] md:pr-[7.9rem] xs:pl-[1.8rem] xs:pr-[1.9rem] text-[0.85rem] leading-[1.3rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna
                <br /> <br />
                porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='pr-[1.4rem] text-left mt-[0.9rem] no-underline data-[state=open]:border-[black]  data-[state=open]:border-b md:pl-[2.2rem] xs:pl-[1.2rem] text-primary-mainColor text-[1.01rem] font-semibold tracking-[0.095rem] py-[0.9rem]'>
                Can I be beautiful in an instant time?
              </AccordionTrigger>
              <AccordionContent className='bg-[#F6F7FF] rounded-b-[20px] italic tracking-[0.095rem]  text-primary-textColor pt-[3.3rem] pb-[3.7rem]  md:pl-[4.8rem] md:pr-[7.9rem] xs:pl-[1.8rem] xs:pr-[1.9rem] text-[0.85rem] leading-[1.3rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna
                <br /> <br />
                porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className='pr-[1.4rem] text-left mt-[0.1rem]  no-underline data-[state=open]:border-[black]  data-[state=open]:border-b md:pl-[2.2rem] xs:pl-[1.2rem] text-primary-mainColor text-[1.01rem] font-semibold tracking-[0.095rem] py-[0.9rem]'>
              Are there any side effects to the treatment methods or treatments at this clinic?
              </AccordionTrigger>
              <AccordionContent className='bg-[#F6F7FF] rounded-b-[20px] italic tracking-[0.095rem]  text-primary-textColor pt-[3.3rem] pb-[3.7rem]  md:pl-[4.8rem] md:pr-[7.9rem] xs:pl-[1.8rem] xs:pr-[1.9rem] text-[0.85rem] leading-[1.3rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna
                <br /> <br />
                porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger className='pr-[1.4rem] text-left mt-[0.1rem]  no-underline data-[state=open]:border-[black]  data-[state=open]:border-b md:pl-[2.2rem] xs:pl-[1.2rem]  text-primary-mainColor text-[1.01rem] font-semibold tracking-[0.095rem] py-[0.9rem]'>
              Do professionals have accreditation in their respective fields?
              </AccordionTrigger>
              <AccordionContent className='bg-[#F6F7FF] rounded-b-[20px] italic tracking-[0.095rem]  text-primary-textColor pt-[3.3rem] pb-[3.7rem]  md:pl-[4.8rem] md:pr-[7.9rem] xs:pl-[1.8rem] xs:pr-[1.9rem] text-[0.85rem] leading-[1.3rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna
                <br /> <br />
                porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Column>
      </Wrapper>
    </Section>
  );
}
export default FAQService;
