import 'twin.macro'
// import tw from 'twin.macro';
function ImageSrc({ src, clx='', alt='' }: { src: string, clx ?: string, alt?:string  }) {
  return <img src={window.location.origin + src} tw={"object-cover"} className={clx} alt={alt} />;
}

export default ImageSrc;
