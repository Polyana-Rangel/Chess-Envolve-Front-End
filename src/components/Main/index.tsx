import { useState, useEffect, Fragment } from "react";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Box from "../Box";
import api from "../../services/api";
import { useWindow } from "../../contexts/windowDimensionContext";
import { PieceType } from "../../interfaces/piece";

function Main() {
  const { windowWidth } = useWindow()
  const [pieces, setPieces] = useState<PieceType[]>([]);

  useEffect(() => {
    async function loadPieces() {
      const response = await api.get("/api/pieces");
      setPieces(response.data);
    }
    loadPieces();
  }, []);

  return (
    <Fragment>
      {
        windowWidth > 768 ? (
          <Box margin="0 2rem">
            <Step1 pieces={pieces} setPieces={setPieces} />

            <Box flexdirection="column" flex="1" height="100vh">
              <Step2 pieces={pieces} setPieces={setPieces} />

              <Step3 pieces={pieces} setPieces={setPieces} />
            </Box>
          </Box>
        ) : (
          <Box flexdirection="column" margin="0 2rem">
            <Step1 pieces={pieces} setPieces={setPieces} />

            <Step2 pieces={pieces} setPieces={setPieces} />

            <Step3 pieces={pieces} setPieces={setPieces} />
          </Box>
        )
      }
    </Fragment>
  );
}

export default Main;
