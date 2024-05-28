import { Eye, EyeOff } from "lucide-react";

function EyeShow({ isShow,setIsShow }: { isShow: boolean,setIsShow:(arg0: boolean)=>void }) {
  return (
    <>
      {isShow ? (
        <div
          onClick={() => setIsShow(false)}
          className='absolute top-[50%] translate-y-[-50%] flex justify-center items-center right-3 w-[2rem] h-[2rem]'
        >
          <EyeOff className='w-[1.4rem] h-[1.4rem] hover:cursor-pointer' />
        </div>
      ) : (
        <div
          onClick={() => setIsShow(true)}
          className='absolute top-[50%] translate-y-[-50%] flex justify-center items-center right-3 w-[2rem] h-[2rem]'
        >
          <Eye className='w-[1.4rem] h-[1.4rem] hover:cursor-pointer' />
        </div>
      )}
    </>
  );
}

export default EyeShow;
