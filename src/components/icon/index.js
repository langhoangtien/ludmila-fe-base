import Image from "next/image";

export default function Icon({ width = 21, height = 21, src }) {
  return <Image src={src} width={width} height={height} />;
}
