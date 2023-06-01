import { Container } from "./styles";
import Image from "../Image";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  );
}

export default Header;
