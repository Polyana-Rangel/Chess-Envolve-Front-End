import { Container } from "./styles";


interface FontProps {size: string, weight: string, children: React.ReactNode}

function Font({ size, weight, children }: FontProps) {
  return <Container size={size} weight={weight}>{children}</Container>;
}

export default Font;
