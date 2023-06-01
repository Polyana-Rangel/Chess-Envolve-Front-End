import { Container } from "./styles";
import { FontProps } from "../../interfaces/props/fontProps";

function Font({ size, weight, children }: FontProps) {
  return (
    <Container size={size} weight={weight}>
      {children}
    </Container>
  );
}

export default Font;
