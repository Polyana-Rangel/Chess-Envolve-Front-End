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
import Font from "../Font";
import Box from "../Box";
import king from "../../assets/king.svg";
import queen from "../../assets/queen.svg";
import rook from "../../assets/rook.svg";
import pawn from "../../assets/pawn.svg";
import knight from "../../assets/knight.svg";
import bishop from "../../assets/bishop.svg";
import trash from "../../assets/trash.svg";
import { useState } from "react";
import { PieceType } from "../Interfaces/pieceType";
import { useChessBoard } from "../../contexts/chessContext";

function Main() {
  const {
    addPiece,
    removePiece,
    chessBoard,
    totalPieces,
    quantityPieces,
    resetPieces,
  } = useChessBoard();
  const [pieces, setPieces] = useState<PieceType[]>([
    {
      name: "King",
      description: "The most important piece in the game",
      image: king,
      value: 1000,
      border: "none",
    },
    {
      name: "Queen",
      description: "A versatile and powerful piece",
      image: queen,
      value: 500,
      border: "none",
    },
    {
      name: "Rook",
      description: "A piece that moves in a straight line",
      image: rook,
      value: 300,
      border: "none",
    },
    {
      name: "Pawn",
      description: "The basic piece of the game",
      image: pawn,
      value: 100,
      border: "none",
    },
    {
      name: "Knight",
      description: 'A piece that moves in an "L" shape',
      image: knight,
      value: 150,
      border: "none",
    },
    {
      name: "Bishop",
      description: "A piece that moves diagonally",
      image: bishop,
      value: 200,
      border: "none",
    },
  ]);


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
          <Box flex="1" gap="1.5rem" flexWrap="wrap" margin="1rem 0 0 0">
            {pieces &&
              pieces.map((piece) => (
                <Piece
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
                    <Image src={piece.image} weight="3rem" />
                    <Font size="22px" weight="800">
                      {piece.value}
                    </Font>
                  </Box>
                </Piece>
              ))}
          </Box>
        </Passo1>

        <Box flexDirection="column" flex="1">
          <Passo2>
            <Font size="20px" weight="600">
              Passo 2 - Revise a seleção
            </Font>

            {chessBoard &&
              chessBoard.map((piece) => (
                <Piece2>
                  <Image src={piece.image} weight="2rem" />
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
