import { PieceType } from "./piece";

export interface Step {
  pieces: PieceType[];
  setPieces: React.Dispatch<React.SetStateAction<PieceType[]>>;
}