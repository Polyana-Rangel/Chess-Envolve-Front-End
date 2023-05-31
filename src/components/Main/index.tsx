import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Box from "../Box";
import { Container } from "./styles";

function Main() {
  return (
    <Container>
      <Step1 />

      <Box flexdirection="column" flex="1">
        <Step2 />

        <Step3 />
      </Box>
    </Container>
  );
}

export default Main;
