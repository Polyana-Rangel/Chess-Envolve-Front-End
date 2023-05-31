import { Container } from "./styles";
import { BoxProps } from "../../interfaces/props/boxProps";

function Box({ children, ...rest }: BoxProps) {
  return <Container {...rest}>{children}</Container>;
}
export default Box;
