import { Container } from "./styles";
import { ImageProps } from "../../interfaces/props/ImageProps";

function Image({ src, width }: ImageProps) {
  return <Container src={src} width={width} />;
}

export default Image;
