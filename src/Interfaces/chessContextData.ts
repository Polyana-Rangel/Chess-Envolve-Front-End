import { PieceType } from "./piece";

export interface ChessContextData {
  chessBoard: PieceType[];
  totalPieces: number;
  quantityPieces: number;
  addPiece: (piece: PieceType) => void;
  removePiece: (piece: PieceType) => void;
  resetPieces: () => void;
}