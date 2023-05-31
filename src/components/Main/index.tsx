import {
  Container,
  Passo1,
  Passo2,
  Passo3,
  Piece,
  Image,
  Piece2,
  Value,
  Button,
  Selected,
  Total,
  Button2,
} from "./styles";
import trash from "../../assets/trash.svg";
import Font from "../Font";
import Box from "../Box";
import { useState, useEffect } from "react";
import { PieceType } from "../../Interfaces/pieceType";
import { useChessBoard } from "../../contexts/chessContext";
import api from "../../services/api";

function Main() {
  const {
    addPiece,
    removePiece,
    chessBoard,
    totalPieces,
    quantityPieces,
    resetPieces,
  } = useChessBoard();
  const [pieces, setPieces] = useState<PieceType[]>([]);

  useEffect(() => {
    async function loadPieces() {
      const response = await api.get("/api/pieces");
      setPieces(response.data);
    }
    loadPieces();
  },[]);

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
    <>
      <Container>
        <Passo1>
          <Font size="20px" weight="600">
            Passo 01 - Selecione peças
          </Font>
            {pieces && (
              <Box flex="1" gap="1.5rem" flexWrap="wrap" margin="1rem 0 0 0">
              {
                pieces.map((piece) => (
                  <Piece
                  key={piece.id}
                    onClick={() => handleSelectPiece(piece)}
                    border={piece.border}
                  >
                    <Box flexDirection="column">
                      <Font size="18px" weight="600">
                        {piece.name}
                      </Font>
                      <Font size="13px" weight="600">
                        {piece.description}
                      </Font>
                    </Box>
                    <Box flexDirection="column">
                      <Image src={`http://localhost:5000${piece.image}`} weight="3rem" />
                      <Font size="22px" weight="800">
                        {piece.value}
                      </Font>
                    </Box>
                  </Piece>
                ))
              }
              </Box>
            )}
        </Passo1>

        <Box flexDirection="column" flex="1">
          <Passo2>
            <Font size="20px" weight="600">
              Passo 2 - Revise a seleção
            </Font>

            {chessBoard &&
              chessBoard.map((piece) => (
                <Piece2>
                  <Image src={`http://localhost:5000${piece.image}`} weight="2rem" />
                  <Box flexDirection="column">
                    <Font size="18px" weight="600">
                      {piece.name}
                    </Font>
                    <Font size="14px" weight="600">
                      {piece.description}
                    </Font>
                  </Box>
                  <Box alignItems="center">
                    <Value>
                      <Font size="22px" weight="800">
                        {piece.value}
                      </Font>
                    </Value>
                    <Box margin="0.5rem">
                      <Button onClick={() => removePiece(piece)}>
                        <img src={trash} />
                      </Button>
                    </Box>
                  </Box>
                </Piece2>
              ))}
          </Passo2>

          <Passo3>
            <Box>
              <Box flex="1" flexWrap="wrap" margin="1rem">
                <Font size="20px" weight="600">
                  Passo 03 - Resumo da seleção
                </Font>

                <Box alignItems="center">
                  <Font size="16px" weight="600">
                    Quantidade de peças selecionadas:
                  </Font>

                  <Selected>
                    <Font size="14px" weight="700">
                      {quantityPieces}
                    </Font>
                  </Selected>
                </Box>
              </Box>
              <Box margin="2rem">
                <Font size="16px" weight="600">
                  Total:
                </Font>
                <Total>
                  <Font size="20px" weight="700">
                    {totalPieces}
                  </Font>
                </Total>
              </Box>
            </Box>

            <Button2 onClick={resetPieces}>
              <Box alignItems="center">
                <img src={trash} />
                <Font size="14px" weight="400">
                  Limpar tudo
                </Font>
              </Box>
            </Button2>
          </Passo3>
        </Box>
      </Container>
    </>
  );
}

export default Main;
