import { Container, Button, BackgroundFont } from "./styles";
import trash from "../../assets/trash.svg";
import Font from "../Font";
import Box from "../Box";
import { useChessBoard } from "../../contexts/chessContext";
import { Step } from "../../interfaces/step";
import { useWindow } from "../../contexts/windowDimensionContext";

function Step3({ pieces, setPieces }: Step) {
  const { windowWidth } = useWindow()
  const { totalPieces, quantityPieces, resetPieces } = useChessBoard();

  const handleAllClean = () => {
    setPieces(
      pieces.map((selectedPiece) => {
        selectedPiece.border = "none";
        return selectedPiece;
      })
    );

    resetPieces();
  };

  return (
    <Container>
      <Box flexdirection={windowWidth > 540 ? "row" : "column"} alignitems="center">
        <Box flex="1" flexwrap="wrap" margin="1rem">
          <Font size="20px" weight="600">
            Passo 03 - Resumo da seleção
          </Font>

          <Box alignitems="center" margin="1rem 0 0 0">
            <Font size="16px" weight="600">
              Quantidade de peças selecionadas:
            </Font>

            <BackgroundFont width="3rem" height="1.5rem">
              <Font size="14px" weight="700">
                {quantityPieces}
              </Font>
            </BackgroundFont>
          </Box>
        </Box>
        <Box margin="1rem 2rem 3rem 0">
          <Font size="16px" weight="600">
            Total:
          </Font>
          <BackgroundFont width="10rem" height="4rem">
            <Font size="20px" weight="700">
              {totalPieces}
            </Font>
          </BackgroundFont>
        </Box>
      </Box>

      <Button onClick={handleAllClean}>
        <Box alignitems="center">
          <img src={trash} />
          <Font size="14px" weight="400">
            Limpar tudo
          </Font>
        </Box>
      </Button>
    </Container>
  );
}

export default Step3;
