import tw, { styled } from "twin.macro";
const PaginationList = tw.div`flex flex-row mt-[3.54rem] gap-x-[1rem] ml-[1.05rem]`;
// const PaginationItem = tw.div``;
const PaginationItem = styled.div<{ isActive?: boolean }>(({ isActive }) => [
  tw`w-[2.2rem] h-[2.2rem] rounded-full z-30  text-primary-textColor  flex items-center justify-center`, // Add base styles first
  isActive && tw`bg-primary-footerColor text-background-main`, // Then add conditional styles
]);

function Pagination() {
  return (
    <PaginationList>
      <PaginationItem isActive>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
  );
}

export default Pagination;
