import { Container, Image } from "./styles";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  );
}

export default Header;
