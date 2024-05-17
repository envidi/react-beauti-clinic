import { TwStyle, css } from "twin.macro";

const BackgroundImage = ({
  image,
  children,
  info,
}: {
  image: string;
  children: React.ReactNode;
  info?: {
    style: TwStyle;
  };
}) => {
  return (
    <div
      tw='relative bg-center '
      css={[
        info?.style || "",
        css`
          background-image: url("/${image}");
          background-repeat: no-repeat;
          background-size: cover;
          background-color: #09115699;
        `,
      ]}
    >
      {children}
    </div>
  );
};
export default BackgroundImage;
