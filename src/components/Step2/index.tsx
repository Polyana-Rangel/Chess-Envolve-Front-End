import { Container, Piece, Value, Button } from "./styles";
import Image from "../Image";
import Font from "../Font";
import Box from "../Box";
import trash from "../../assets/trash.svg";
import { useChessBoard } from "../../contexts/chessContext";
import { Step } from "../../interfaces/step";
import { PieceType } from "../../interfaces/piece";

function Step2({pieces, setPieces}: Step) {
  const { removePiece, chessBoard } = useChessBoard();

  const handleRemovePiece = (piece: PieceType) => {
    setPieces(
      pieces.map((selectedPiece) => {
        if (selectedPiece.name === piece.name) {
          selectedPiece.border = "none";
        }
        return selectedPiece;
      })
    );

    removePiece(piece)
  }

  return (
    <Container>
      <Font size="20px" weight="600">
        Passo 2 - Revise a seleção
      </Font>

      {chessBoard &&
        chessBoard.map((piece) => (
          <Piece key={piece.id}>
            <Box alignitems="center" flex="1">
              <Image src={`http://localhost:5000${piece.image}`} width="1.5rem" />
              <Box flexdirection="column" margin="0 0 0 3rem">
                <Font size="18px" weight="600">
                  {piece.name}
                </Font>
                <Font size="14px" weight="600">
                  {piece.description}
                </Font>
              </Box>
            </Box>
            <Box alignitems="center">
              <Value>
                <Font size="22px" weight="800">
                  {piece.value}
                </Font>
              </Value>
              <Button onClick={() => handleRemovePiece(piece)}>
                <img src={trash} />
              </Button>
            </Box>
          </Piece>
        ))}
    </Container>
  );
}

export default Step2;
