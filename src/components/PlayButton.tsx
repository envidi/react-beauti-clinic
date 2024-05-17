import  { TwStyle } from "twin.macro";

const PlayButton = ({
  styles,
}: {
  styles: {
    btn: TwStyle;
    icon: TwStyle;
  };
}) => {
  return (
    <div
      tw='w-[6.1vw] h-[6.1vw] flex justify-center items-center rounded-full '
      css={styles.btn}
    >
      <i tw='text-[2.2vw]' css={styles.icon} className='fa-solid fa-play'></i>
    </div>
  );
};
export default PlayButton;
