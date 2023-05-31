import { Container, Piece } from "./styles";
import Image from "../Image";
import Font from "../Font";
import Box from "../Box";
import { useState, useEffect } from "react";
import { PieceType } from "../../interfaces/piece";
import { useChessBoard } from "../../contexts/chessContext";
import api from "../../services/api";

function Step1() {
  const { addPiece, removePiece, chessBoard } = useChessBoard();
  const [pieces, setPieces] = useState<PieceType[]>([]);

  useEffect(() => {
    async function loadPieces() {
      const response = await api.get("/api/pieces");
      setPieces(response.data);
    }
    loadPieces();
  }, []);

  function handleSelectPiece(piece: PieceType) {
    const pieceExists = chessBoard.find(
      (selectedPiece) => selectedPiece.name === piece.name
    );

    if (pieceExists) {
      removePiece(piece);

      setPieces(
        pieces.map((selectedPiece) => {
          if (selectedPiece.name === piece.name) {
            selectedPiece.border = "none";
          }
          return selectedPiece;
        })
      );
    } else {
      addPiece(piece);

      setPieces(
        pieces.map((selectedPiece) => {
          if (selectedPiece.name === piece.name) {
            selectedPiece.border = "3px solid #c0c0c4";
          }
          return selectedPiece;
        })
      );
    }
  }

  return (
    <Container>
      <Font size="20px" weight="600">
        Passo 01 - Selecione peças
      </Font>

      <Box flex="1" gap="1.5rem" flexwrap="wrap" margin="1rem 0 0 0">
        {pieces ? (
          pieces.map((piece) => (
            <Piece
              key={piece.id}
              onClick={() => handleSelectPiece(piece)}
              border={piece.border}
            >
              <Box flexdirection="column">
                <Font size="18px" weight="600">
                  {piece.name}
                </Font>
                <Font size="13px" weight="600">
                  {piece.description}
                </Font>
              </Box>
              <Box flexdirection="column">
                <Image
                  src={`http://localhost:5000${piece.image}`}
                  width="3rem"
                />
                <Font size="22px" weight="800">
                  {piece.value}
                </Font>
              </Box>
            </Piece>
          ))
        ) : (
          <Font size="18px" weight="600">
            Carregando ...
          </Font>
        )}
      </Box>
    </Container>
  );
}

export default Step1;
